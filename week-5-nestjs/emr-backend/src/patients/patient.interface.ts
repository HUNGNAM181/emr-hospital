export interface Patient {
  id: string; // UUID
  name: string;
  age: number;
  gender: 'male' | 'female';
  phone: string;
  address?: string;
}
