import { useState, useEffect } from "react";
import { NewPatient } from "./models/newPatient";
import { CreatePatientForm } from "./components/CreatePatientForm";
import { NewPatientList } from "./components/NewPatientList";

import "./App.css";

function App() {
  const [patients, setPatients] = useState<NewPatient[]>(() => {
    const saved = localStorage.getItem("patients");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const handleAdd = (patient: NewPatient) => {
    setPatients((prev) => [...prev, patient]);
  };

  return (
    <>
      <CreatePatientForm onAdd={handleAdd} />
      <NewPatientList patients={patients} />
    </>
  );
}

export default App;
