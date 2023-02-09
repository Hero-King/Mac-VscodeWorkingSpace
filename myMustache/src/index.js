function render(template, data) {
  console.log("render");
  let res = parse(template);
  console.log(res, "res");
  return "";
}

// 普通字符串 ['text',''] 变量 ['name','']  循环 ['#','',[]]
function genderArray(template, type) {}

function parse(template) {
  let start = 0;
  let endFlag;
  let arrStart;
  let arrEnd;
  let continueToIndex = 0;
  let res = [];

  for (let i = 0; i < template.length; i++) {
    if (i < continueToIndex) {
    } else {
      if (template[i] === "{" && template[i + 1] && template[i + 1] === "{") {
        let titleStr = template.substring(start, i);
        res.push(["title", titleStr]);
        if (template[i + 2] && template[i + 2] === "#") {
          arrStart = i + 2 + 1;
          start = i + 3;
        } else {
          arrStart = null;
          start = i + 2;
        }
      } else if (
        template[i] === "}" &&
        template[i + 1] &&
        template[i + 1] === "}"
      ) {
        let nameStr = template.substring(start, i);
        start = i + 2;
        if (arrStart) {
          let arrEndStrIndex = template.lastIndexOf("/" + nameStr);
          arrEnd = arrEndStrIndex - 2;
          let centerStr = template.substring(start, arrEnd);
          console.log(centerStr);
          continueToIndex = arrEndStrIndex + nameStr.length + 1;
          res.push(["#", nameStr, parse(centerStr)]);
        } else {
          res.push(["name", nameStr]);
        }
        endFlag = start;
      }
    }
  }

  if (endFlag !== template.length - 1) {
    res.push(["title", template.substring(endFlag, template.length)]);
  }
  return res;
}

window.myMustache = {
  render,
};
