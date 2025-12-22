📌 Giới thiệu

EMR System (Electronic Medical Records) là dự án thực hành xây dựng hệ thống quản lý hồ sơ bệnh án điện tử cho bệnh viện thông minh.
Hệ thống cho phép số hóa toàn bộ thông tin y tế của bệnh nhân, hỗ trợ bác sĩ và nhân viên y tế trong việc quản lý, tra cứu và theo dõi quá trình khám chữa bệnh một cách hiệu quả.
Dự án được phát triển theo mô hình full-stack web application, áp dụng kiến trúc tách biệt giữa giao diện người dùng, xử lý nghiệp vụ và lưu trữ dữ liệu, phù hợp với các hệ thống y tế hiện đại.

🎯 Mục tiêu dự án

- Số hóa hồ sơ bệnh án thay thế hồ sơ giấy truyền thống
- Quản lý tập trung thông tin bệnh nhân và lịch sử khám bệnh
- Hỗ trợ tìm kiếm và tra cứu dữ liệu nhanh chóng
- Rèn luyện kỹ năng xây dựng hệ thống full-stack thực tế
- Làm quen với quy trình phát triển phần mềm chuyên nghiệp

🏗️ Chức năng chính

🖥️ Frontend (Giao diện người dùng)

- Quản lý danh sách bệnh nhân (thêm, xem, chỉnh sửa)
- Hiển thị chi tiết hồ sơ bệnh nhân
- Quản lý và theo dõi lịch hẹn khám bệnh
- Xem lịch sử khám và hồ sơ y tế
- Giao diện trực quan, dễ sử dụng cho bác sĩ và nhân viên y tế

⚙️ Backend (API & Xử lý nghiệp vụ)

- Cung cấp RESTful API cho frontend
- Quản lý thông tin bệnh nhân (CRUD)
- Xác thực người dùng và phân quyền truy cập
- Tìm kiếm, lọc dữ liệu bệnh nhân theo nhiều tiêu chí
- Kiểm tra và validate dữ liệu đầu vào

🗄️ Database (Lưu trữ dữ liệu)

- Lưu trữ thông tin cá nhân bệnh nhân
- Lưu lịch sử khám bệnh và chẩn đoán
- Quản lý hồ sơ y tế và quá trình điều trị
- Đảm bảo dữ liệu nhất quán và dễ mở rộng

🛠️ Công nghệ sử dụng

- Frontend: React / NextJS
- Backend: NestJS (Node.js Framework)
- Database: MongoDB
- Version Control: Git
- API Testing: Postman

🧱 Kiến trúc hệ thống

Hệ thống được xây dựng theo mô hình 3-tier architecture:

1. Frontend: Giao diện người dùng, gửi request đến backend
2. Backend: Xử lý logic nghiệp vụ, xác thực và truy vấn dữ liệu
3. Database: Lưu trữ và quản lý dữ liệu
