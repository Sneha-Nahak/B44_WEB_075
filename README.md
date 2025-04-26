Markdown

# Tenant-Landlord Platform

This project is a React.js-based platform that facilitates interaction and management between tenants and landlords.

## Overview

The platform aims to streamline common tasks and communications involved in property rentals, such as:

* **Issue Reporting and Tracking:** Tenants can report maintenance issues, and landlords can track their status and resolution.
* **Communication:** Direct messaging between tenants and landlords.
* **Payment Management:** Tracking rent payments and related financial transactions.
* **User Authentication:** Secure login and registration for tenants and landlords.
* **Role-Based Access:** Different dashboards and functionalities for tenants and landlords.

## File Structure

The project structure is organized as follows:

```

tenant-landlord-platform/
├── node_modules/         # Contains project dependencies (npm packages)
├── public/              # Static assets served directly by the server
│   └── assets/          # Images, fonts, and other static resources
│   └── index.html       # Main HTML file for the application
└── src/                 # Source code of the React application
├── components/      # Reusable UI components
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Home.jsx
│   ├── IssueDashboard.jsx
│   ├── MaintenanceForm.jsx
│   ├── Messaging.jsx
│   ├── Navbar.jsx
│   ├── PaymentTracker.jsx
│   └── ProtectedRoute.jsx
├── context/         # React Context API for global state management
│   └── AppContext.jsx
├── pages/           # Application views/screens
│   ├── LandlordDashboard.jsx
│   ├── Login.jsx
│   ├── Logout.jsx
│   ├── Signup.jsx
│   └── TenantDashboard.jsx
├── App.jsx            # Root component with routing setup
├── main.jsx           # Entry point for the React application
├── .gitignore           # Specifies files to be ignored by Git
├── data.json            # Contains static data used by the application
├── eslint. config.js     # Configuration for ESLint (JavaScript linter)
├── index.html           # (Likely a duplicate, the one in /public is the main entry)
├── package-lock.json    # Records exact versions of dependencies
└── package.json         # Project metadata, dependencies, and scripts

```
## Key Components and Pages

* **`components`**: Houses reusable UI elements like navigation, footers, forms, and specific widgets for displaying information.
* **`context`**: Manages global application state, likely including user authentication status and other shared data.
* **` pages`**: Defines the different views of the application, catering to both landlords and tenants with specific dashboards and functionalities.
* **`ProtectedRoute`**: Handles authentication and authorization, ensuring only authenticated users can access certain parts of the application.

## Getting Started

To run this project locally, you will need to have Node.js and npm (or yarn) installed on your machine.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Sneha-Nahak/B44_WEB_075.git](https://github.com/Sneha-Nahak/B44_WEB_075.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd B44_WEB_075
    ```

3.  **Start the development server:**
    ```bash
    npm start
  
    ```

    This will typically start the application at `http://localhost:3000`.

## Contributing

The contributors of this project are :
Sneha Nahak
Subash Khati

## Live Demo Link:
[Live Demo](https://680b6d08bbbf7ae5894439e8--tenant-landlord-portal.netlify.app/)
