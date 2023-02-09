export default function test(template) {
  const mustacheParse = window.Mustache.parse(template);
  const myMustacheParse = window.myMustache.parse(template);
  console.log(mustacheParse, myMustacheParse);
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
        console.log('string not same index: ',index, item, arr2[index]);
      return true;
    } else if (Array.isArray(item) && isArrayDiff(item, arr2[index])) {
      return true;
    }
  }
  return false;
}
