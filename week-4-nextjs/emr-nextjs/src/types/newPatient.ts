export interface NewPatient {
  name: string;
  age: number;
  gender: "male" | "female" | "other";
  phone: string;
  address: string;
}
