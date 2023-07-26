data = "global data";

// アロー関数に変更
const returnThisData = () => {
  return this.data;
};

const object = {
  data: "object data",
  func: returnThisData,
};

function getData() {
  return object.func();
}
