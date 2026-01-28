// src/types/user.ts

export enum UserRole {
  ADMIN = "admin",
  DOCTOR = "doctor",
  NURSE = "nurse",
}
export interface User {
  _id?: string; // thường backend trả về
  email: string;
  role: UserRole;
  createdAt?: string; // timestamps
  updatedAt?: string;
}
