export interface ISnakeCanvasProps {
  wn: number;
  hn: number;
}
import { Button, message } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { getRandomInt, squareWidth } from '../util';
import Dot from './Dot';

interface IPosition {
  x: number;
  y: number;
}

enum Dir {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  TOP = 'TOP',
  BOTTOM = 'BOTTOM',
}

const SnakeCanvas = ({ wn, hn }: ISnakeCanvasProps) => {
  const [randomPos, setrandomPos] = useState<IPosition>();
  const [posArr, setposArr] = useState<Array<IPosition>>([]);
  const [, setgameover] = useState(false);
  const [rows] = useState(() => {
    let _rows = [];
    for (let i = 0; i < hn; i++) {
      _rows.push(i);
    }
    return _rows;
  });

  const [cols] = useState(() => {
    const _cols = [];
    for (let i = 0; i < wn; i++) {
      _cols.push(i);
    }
    return _cols;
  });

  const timer = useRef<number>();
  const dir = useRef<Dir>(Dir.RIGHT);
  const tailPos = useRef<IPosition>();

  let posObj: { [x: string]: { [x: string]: number | string } } = {};
  posArr.forEach((i) => {
    const { x, y } = i;
    if (!posObj[x]) {
      posObj[x] = {};
    }
    posObj[x][y] = y;
  });

  const genderRandom = () => ({
    x: getRandomInt(0, wn + 1),
    y: getRandomInt(0, hn + 1),
  });

  const run = () => {
    console.log('run', posArr);
    if (posArr.length === 0) {
      return;
    }

    const { x, y } = posArr[0];
    let newX = x,
      newY = y;
    switch (dir.current) {
      case Dir.LEFT:
        newX = x - 1;
        break;
      case Dir.RIGHT:
        newX = x + 1;
        break;

      case Dir.TOP:
        newY = y - 1;
        break;

      case Dir.BOTTOM:
        newY = y + 1;
        break;
    }
    if (newX >= wn || newX < 0 || newY >= hn || newY < 0) {
      setgameover(true);
      message.warning('Game over');
      clearTimeout(timer.current);
      return;
    }
    const newArr = [{ x: newX, y: newY }, ...posArr];
    newArr.splice(newArr.length - 1, 1);
    console.log(newArr[0].x, newArr[0].y);
    setposArr(newArr);
  };

  const init = () => {
    setrandomPos(genderRandom());
    setposArr([genderRandom()]);
  };

  const restart = () => {
    init();
  };

  useEffect(() => {
    init();

    window.addEventListener('keydown', (e) => {
      let _dir = dir.current;
      if (e && e.keyCode === 40) {
        //下
        _dir = Dir.BOTTOM;
      }
      if (e && e.keyCode === 37) {
        //左
        _dir = Dir.LEFT;
      }
      if (e && e.keyCode === 39) {
        //右
        _dir = Dir.RIGHT;
      }
      if (e && e.keyCode === 38) {
        // 上
        _dir = Dir.TOP;
      }
      dir.current = _dir;
    });
  }, []);

  useEffect(() => {
    console.log(posArr, 'posArr');
    if (posArr.length > 0) {
      // 判断是否吃掉
      const { x, y } = posArr[0];
      if (timer.current !== undefined && x === randomPos?.x && y === randomPos.y) {
        setrandomPos(genderRandom());
        setposArr([...posArr, tailPos.current as IPosition]);
        return;
      }

      // 移动蛇
      timer.current = window.setTimeout(() => {
        run();
      }, 400);
    }
    return () => {
      if (posArr.length > 0) {
        tailPos.current = { ...posArr[posArr.length - 1] };
      }
    };
  }, [posArr]);

  return (
    <div>
      <div className="tools">
        <Button onClick={restart}>重新开始</Button>
      </div>
      <div className="snake-canvas" style={{ width: squareWidth * wn, height: squareWidth * hn }}>
        {rows.map((y) => (
          <div key={y} className="snake-canvas-row">
            {cols.map((x) => (
              <Dot
                key={x}
                show={(x === randomPos?.x && y === randomPos?.y) || (x in posObj && y in posObj[x])}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SnakeCanvas;
