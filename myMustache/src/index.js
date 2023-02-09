import testToken from "./test";

function render(template, data) {
  let tokens = parse(template);
  let domStr = renderTemplate(tokens, data);
  return domStr;
}

// 将template字符串格式化成token
// 普通字符串 ['text',''] 变量 ['name','']  循环 ['#','',[]]
function parse(template) {
  // 截取字符串的开始指针
  let start = 0;
  // 最后一个"}}" 中第一个 "}" 的位置,用于判断是}}否是模板字符串的结尾
  let endFlag;
  // {{#xxx}}后面的第一个字符的Index
  let arrInnerStart;
  // {{/xxx}}钱面的第一个字符的Index
  let arrInnerEnd;
  let res = [];

  for (let i = 0; i < template.length; i++) {
    if (i < start) {
    } else {
      if (template[i] === "{" && template[i + 1] && template[i + 1] === "{") {
        let titleStr = template.substring(start, i);
        res.push(["text", titleStr]);
        if (template[i + 2] && template[i + 2] === "#") {
          arrInnerStart = i + 2 + 1;
          start = i + 3;
        } else {
          arrInnerStart = null;
          start = i + 2;
        }
      } else if (
        template[i] === "}" &&
        template[i + 1] &&
        template[i + 1] === "}"
      ) {
        let nameStr = template.substring(start, i);
        if (arrInnerStart) {
          let arrEndStrIndex = template.lastIndexOf("/" + nameStr);
          arrInnerEnd = arrEndStrIndex - 2;
          let centerStr = template.substring(i + 2, arrInnerEnd);
          start = arrEndStrIndex + nameStr.length + 3;
          res.push(["#", nameStr, null, null, parse(centerStr)]);
        } else {
          start = i + 2;
          res.push(["name", nameStr]);
        }
        endFlag = start;
      }
    }
  }

  if (endFlag < template.length - 1) {
    res.push(["text", template.substring(endFlag, template.length)]);
  }
  return res;
}

/**
 * 可以在data中寻找连续.运算 ES obj[a.b.c]识别不了
 * @param {object} obj
 * @param {string} key
 */
function lookUp(obj, keyName) {
  let splitKey = "";
  for (let i = 0; i < keyName.length; i++) {
    if (keyName[i] !== ".") {
      splitKey += keyName[i];
    } else {
      obj = obj[splitKey];
      splitKey = "";
    }
  }
  return splitKey.length > 0 ? obj[splitKey] : obj;
}

/**
 *
 * @param {Array} tokens
 * @param {object} data
 */
function renderTemplate(tokens, data) {
  let resDomStr = "";
  tokens.forEach((token, index) => {
    if (token[0] === "text") {
      resDomStr += token[1];
    } else if (token[0] === "name") {
      resDomStr += token[1] === "." ? data : lookUp(data,token[1]);
    } else if (token[0] === "#") {
      Array.isArray(lookUp(data,token[1])) &&
        lookUp(data,token[1]).forEach((item) => {
          resDomStr += renderTemplate(token[4], item);
        });
    }
  });
  return resDomStr;
}

window.myMustache = {
  render,
  parse,
};

testToken();
