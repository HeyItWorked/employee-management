# Employee Management System

Full-stack CRUD application built with **Spring Boot** (backend) and **React + Vite** (frontend).

## Tech Stack

**Backend**
- Java 21
- Spring Boot 4
- Spring Data JPA / Hibernate
- MySQL 8
- Lombok

**Frontend**
- React 19
- Vite 8
- React Router v6
- Native `fetch` (no Axios)

## Project Structure

```
employee-management/
├── backend/    ← Spring Boot REST API
└── frontend/   ← React SPA
```

## REST API Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| `GET` | `/api/v1/employees` | Fetch all employees |
| `GET` | `/api/v1/employees/{id}` | Fetch employee by ID |
| `POST` | `/api/v1/employees` | Create new employee |
| `PUT` | `/api/v1/employees/{id}` | Update employee |
| `DELETE` | `/api/v1/employees/{id}` | Delete employee |

## Getting Started

### Prerequisites
- Java 21+
- Node 20.19+
- Docker + Colima

### 1. Start MySQL

```bash
colima start
docker run -d \
  --name mysql-dev \
  -e MYSQL_ROOT_PASSWORD=Mysql@123 \
  -e MYSQL_DATABASE=employee_management_system \
  -p 3306:3306 \
  mysql:8
```

### 2. Run the backend

```bash
cd backend
./mvnw spring-boot:run
```

API available at `http://localhost:8080`

### 3. Run the frontend

```bash
cd frontend
npm install
npm run dev
```

App available at `http://localhost:5173`
