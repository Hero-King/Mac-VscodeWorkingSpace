import classNames from 'classnames';
import { squareWidth } from '../util';
import React from 'react'


interface IDotProps {
  show: boolean;
}
const Dot = ({ show = false }: IDotProps) => {
  return (
    <div
      className={classNames('dot')}
      style={{ width: squareWidth, height: squareWidth }}
    >
      {show && <div className='dot-show'></div>}
    </div>
  );
};

export default Dot;
