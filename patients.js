// node patient-data.js
// let patients = [{ id: "1", name: "Nguyễn Văn A", age: 30 }];

// console.log("Danh sách bệnh nhân:", patients);
// function testVar() {
//   if (true) {
//     var message = "Toi la Var";
//   }
//   console.log(message);
// }
// testVar();

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

function addPatient(patients, newPatient) {
  return [...patients, newPatient];
}
const patients = [
  { id: "1", name: "Nguyễn Hưng Nam", age: 22 },
  { id: "2", name: "Bùi Thị Hà", age: 22 },
];
const newPatient = { id: "3", name: "Lê Văn C", age: 30 };
const resultAddPatient = addPatient(patients, newPatient);
console.log(resultAddPatient);

console.log("------------------- Update Patient ---------------");
const updatePatient = (patients, updatedPatient) => {
  return patients.map((patient) => {
    if (patient.id === updatedPatient.id) {
      return { ...patient, ...updatedPatient };
    }
    return patient;
  });
};
const UserUpdate = { id: "1", age: 24 };
const resultUpdate = updatePatient(patients, UserUpdate);
console.log(resultUpdate);
