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

const patients = [
  { id: "1", name: "Nguyễn Hưng Nam", age: 22 },
  { id: "2", name: "Bùi Thị Hà", age: 22 },
  { id: "3", name: "Bui Van Lam", age: 24 },
];

console.log("------------------- ADD Patient ---------------");

function addPatient(patients, newPatient) {
  return [...patients, newPatient];
}

const newPatient = { id: "4", name: "Lê Văn C", age: 30 };
const resultAddPatient = addPatient(patients, newPatient);
console.log(resultAddPatient);

console.log("------------------- Update Patient ---------------");

const updatePatient = (patients, id, Update) => {
  return patients.map((patient) =>
    patient.id === id ? { ...patient, ...Update } : patient
  );
};

const resultUpdate = updatePatient(patients, "2", { name: "TEST!@#" });
console.log(resultUpdate);

console.log("------------------- DELETE Patient ---------------");

const deletePatient = (patients, id) => {
  return patients.filter((patient) => patient.id !== id);
};
console.log(deletePatient(patients, "3"));

console.log("------------------- Search Patient ---------------");
const searchPatient = (patients, keyword) => {
  // Test FIND
  // return patients.find(
  //   (patient) => patient.name === keyword || patient.id === keyword
  // );

  // TEST SOME
  return patients.some(
    (patient) => patient.name === keyword || patient.id === keyword
  );
};
console.log(searchPatient(patients, "1"));

console.log(
  "---------- Sử dụng Map để lưu patients theo id làm key cho truy cập nhanh ----------"
);

const patientMap = new Map(patients.map((patient) => [patient.id, patient]));
const isPatient = patientMap.has("3");
const patient = patientMap.get("2");

console.log(isPatient);
console.log(patient);
