import { NewPatient } from "./models/newPatient";
import { PatientForm } from "./components/PatientForm";

import "./App.css";

function App() {
  const handleAdd = (patient: NewPatient) => {
    console.log("PATIENT:", patient);
  };

  return (
    <>
      <PatientForm onAdd={handleAdd} />
    </>
  );
}

export default App;
