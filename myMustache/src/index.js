import test from "./test";

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
  let arrInnerStart;
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

window.myMustache = {
  render,
  parse,
};

test("我买了个{{thing}},好{{mood}}");
test("<h1>我买了个{{thing}},好{{mood}}啊</h1>");
test("<div><ul> {{#arr}} <li>{{.}}</li> {{/arr}} </ul> </div>");
test(`<div>
{{#nestArray}}
    <p>{{name}}的爱好是
      <ul>
        {{#hobbies}}  
          <li>{{.}}</li>
        {{/hobbies}}
      </ul>
    </p>
{{/nestArray}}
</div>`);
