# EMR Hospital Backend API

Backend cho hệ thống Electronic Medical Records (EMR), xây dựng bằng NestJS + MongoDB, sử dụng JWT Authentication và Role-based Authorization.

---

## Tech Stack

- NestJS
- MongoDB (Mongoose)
- JWT (Passport)
- class-validator
- Helmet, CORS (strict)
- Rate limiting (`@nestjs/throttler`)
- Swagger (DEV only)

---

## User Roles

- ADMIN: toàn quyền hệ thống
- DOCTOR: quản lý bệnh nhân của mình
- NURSE: chỉ được xem

---

## Authentication Flow

1. User đăng ký (`/auth/register`)
2. Password được hash bằng bcrypt
3. User đăng nhập (`/auth/login`)
4. Backend trả về JWT access token
5. Client gửi token qua header:

---

## Authorization

- Sử dụng `@Roles()` decorator và `RolesGuard`
- `JwtAuthGuard` được áp dụng global
- Business logic kiểm tra quyền nằm trong Service

---

## Patient Access Rules

- Doctor
- Tạo patient cho chính mình
- Chỉ xem / sửa / xoá patient của mình
- Admin
- Quản lý tất cả patient
- Gán patient cho doctor
- Nurse
- Chỉ được xem patient

---

## Security

- JWT Authentication
- Password hashing
- Rate limiting chống brute-force
- Helmet (HTTP security headers)
- CORS strict (whitelist frontend)
- Swagger disabled ở production

---

## Testing

- Test API bằng Postman
- Login → lấy JWT token
- Gắn token vào Authorization header
- Kiểm tra phân quyền theo từng role

---

## Swagger

- Chỉ bật khi DEV
- URL:http://localhost:3001/api-docs
