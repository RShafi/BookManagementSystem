# Book Management System
## Overview
This project is a Book Management System that consists of an Angular frontend and an ASP.NET Core backend. The application allows users to perform CRUD operations on books.

## Prerequisites
Node.js: Version 20.x\
Angular CLI: Version 18.x\
Docker: Version 20.x or later\
.NET SDK: Version 8.x\
SQLite: Included with the project

## Project Structure
BookManagementFrontend: Angular frontend project\
BookAPI: ASP.NET Core backend project

## SQLite Database Creation
Ensure Entity Framework Core tools are installed:\
```
dotnet tool install --global dotnet-ef
dotnet ef --version
```

Navigate to the BookAPI (backend) directory and run the following script:\
```
dotnet ef migrations add InitialCreate
dotnet ef database update
```

## Running the Project with Docker
### Docker Setup
Ensure Docker is running.

Navigate to the project root directory, then build and run the Docker containers:\
```
cd <repository-directory>
docker-compose up --build
```

### Verify the Setup
**Frontend**: Navigate to http://localhost:4200 in your browser to access the Angular frontend.\
**Backend**: The backend API should be accessible at http://localhost:5000/api/books.
