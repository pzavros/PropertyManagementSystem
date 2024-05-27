# Property Management System

This project is a template for a full-stack application with a .NET backend and a React frontend. It includes the necessary structure, models, controllers, and services to get you started quickly.

## Project Structure

The project is organized as follows:

MyBackendProject
├── ClientApp
│ ├── public
│ ├── src
│ │ ├── assets
│ │ ├── components
│ │ │ ├── ItemForm.jsx
│ │ │ ├── ItemList.jsx
│ │ ├── models
│ │ │ ├── Item.js
│ │ ├── App.jsx
│ │ ├── index.css
│ │ ├── main.jsx
│ ├── .eslintignore
│ ├── .gitignore
│ ├── index.html
│ ├── package-lock.json
│ ├── package.json
│ ├── README.md
│ ├── vite.config.js
├── MyBackendProject.sln
├── MyBackendProject
│ ├── Controllers
│ │ ├── ItemsController.cs
│ │ ├── WeatherForecastController.cs
│ ├── Migrations
│ │ ├── [migration files]
│ ├── Models
│ │ ├── ApplicationDbContext.cs
│ │ ├── Item.cs
│ ├── Services
│ │ ├── IItemService.cs
│ │ ├── ItemService.cs
│ ├── Program.cs
│ ├── appsettings.json
│ ├── appsettings.Development.json
├── .gitignore


## Prerequisites

Ensure you have the following installed:

- .NET SDK 7.0 or higher
- Node.js and npm
- SQL Server (LocalDB for development)

## Setting Up the Project

### Backend Setup

1. **Navigate to the project directory:**

  ```bash
   cd MyBackendProject
  ```
Restore the .NET dependencies:

```bash
dotnet restore
```
Update the database:
```bash
dotnet ef database update
```
Run the .NET project:
```bash
dotnet run
```
### Frontend Setup
Navigate to the ClientApp directory:
```bash
cd ClientApp
```
Install the npm dependencies:
```bash
npm install
```
Run the React development server:
```bash
npm run dev
```
## Project Details
### React Components
ItemForm.jsx: Form component to add a new item.
ItemList.jsx: Component to list items.
### React Models
Item.js: JavaScript class representing an item.
### .NET Models
Item.cs: C# class representing an item.
ApplicationDbContext.cs: Entity Framework Core DbContext for the application.
### .NET Controllers
ItemsController.cs: API controller for managing items.
### .NET Services
IItemService.cs: Interface for the item service.
ItemService.cs: Implementation of the item service.
## Running Migrations Manually
To prevent migrations from running automatically during each build, you can manage migrations manually using the Package Manager Console:
```bash
dotnet ef migrations add <MigrationName>
dotnet ef database update
```
## Connecting to LocalDB with SQL Server Management Studio (SSMS)
Start the LocalDB instance:

```bash
sqllocaldb start MSSQLLocalDB
```
Get the LocalDB instance pipe name:

```bash
sqllocaldb info MSSQLLocalDB
```
Use the pipe name to connect in SSMS:

In SSMS, connect to the server using the instance pipe name (e.g., np:\\.\pipe\LOCALDB#<InstanceName>\tsql\query).
