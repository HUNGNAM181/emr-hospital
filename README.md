# EMR System

Xây dựng hệ thống quản lý EMR (Electronic Medical Records) cho bệnh viện thông minh.

## Architecture

The EMR system follows a 3-tier architecture:
the client layer is built with React/NextJS, which communicates with the backend API built with NestJS via HTTP/HTTPS.
The NestJS API handles business logic and interacts with MongoDB for data persistence.
