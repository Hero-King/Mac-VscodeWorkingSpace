function test(template) {
  const mustacheParse = window.Mustache.parse(template);
  const myMustacheParse = window.myMustache.parse(template);
  if (isArrayDiff(mustacheParse, myMustacheParse)) {
    console.error("test failed");
  } else {
    console.log("test success");
  }
}

function isArrayDiff(arr1, arr2) {
  if (typeof arr1 !== typeof arr2) {
    console.error("type not same");
    return true;
  }
  for (let index = 0; index < arr1.length; index++) {
    const item = arr1[index];
    if (typeof item === "string" && item != arr2[index]) {
      console.log("string not same index: ", index, item, arr2[index]);
      return true;
    } else if (Array.isArray(item) && isArrayDiff(item, arr2[index])) {
      return true;
    }
  }
  return false;
}

export default function testToken(params) {
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
}
