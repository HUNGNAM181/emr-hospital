// node patient-data.js
let patients = [{ id: "1", name: "Nguyễn Văn A", age: 30 }];

console.log("Danh sách bệnh nhân:", patients);
function testVar() {
  if (true) {
    var message = "Toi la Var";
  }
  console.log(message);
}
testVar();

// function testLet() {
//   if (true) {
//     let message = "Toi la Let";
//   }
//   console.log(message); // lỗi vì message không được định nghĩa trong phạm vi này
// }

// testLet();

// function testConst() {
//   if (true) {
//     const message = "Toi la Const";
//   }
//   console.log(message); // lỗi vì message không được định nghĩa trong phạm vi này
// }
// testConst();
