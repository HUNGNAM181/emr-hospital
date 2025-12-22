const patients = [
  { id: "1", name: "Nguyễn Hưng Nam", age: 22 },
  { id: "2", name: "Bùi Thị Hà", age: 22 },
  { id: "3", name: "Bui Van Lam", age: 24 },
];

console.log("------------------- DELETE Patient ---------------");

const deletePatient = (patients, id) => {
  return patients.filter((patient) => patient.id !== id);
};
console.log(deletePatient(patients, "3"));

console.log("------------------- Search Patient ---------------");
const searchPatient = (patients, keyword) => {
  // Test FIND
  return patients.find(
    (patient) => patient.name === keyword || patient.id === keyword
  );

  // // TEST SOME
  // return patients.some(
  //   (patient) => patient.name === keyword || patient.id === keyword
  // );
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
