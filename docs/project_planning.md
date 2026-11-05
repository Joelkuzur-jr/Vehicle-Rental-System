Vehicle Rental System – Sprint 2: Project Planning & Requirement Analysis
Exercise 1: Select a Project
- Selected Project: Vehicle Rental System
- Project Brief: Project Brief 10
- Template ID: T10
- Domain: Transportation & Rental Services
- Difficulty Level: Medium
- Recommended Team Size: 3–5 students
- Technology Stack: MERN (MongoDB, Express.js, React.js, Node.js)
Exercise 2: Identify the Problem
Many small vehicle rental businesses manage reservations and vehicle records manually or through disconnected software systems. These methods can cause booking conflicts, poor vehicle tracking, delayed payments, and inefficient customer management.

The problem affects rental business administrators, rental staff, and customers. A centralized digital system is needed to manage vehicles, customers, bookings, returns, and payments efficiently. It will help keep vehicle availability and rental records organized and make the rental process easier to manage.
Exercise 3: Define the Project Objective
The primary objective is to develop a secure, scalable, and user-friendly web-based Vehicle Rental System that simplifies rental operations. The system will allow administrators and rental staff to manage vehicles, customers, rental bookings, returns, and payments, while customers can browse available vehicles, make rental requests, view rental history, and manage their profiles.
Exercise 4: Identify Stakeholders
1. Administrator
- Manages users, vehicles, rental operations, payments, reports, and system settings.
- Manages rental staff accounts and user roles.
- Monitors business activities and reports.
2. Rental Staff
- Manages customer information.
- Adds and updates vehicles and vehicle categories.
- Creates and manages rental bookings.
- Processes vehicle returns and inspections.
- Updates vehicle availability and records payments.
3. Customer
- Browses available vehicles and views vehicle details.
- Makes vehicle rental requests.
- Views rental history and payment history.
- Manages personal profile information.
Exercise 5: Define Project Scope
Included Features
- User registration and login.
- JWT authentication and role-based authorization.
- User and profile management.
- Vehicle management: add, view, update, delete, search.
- Vehicle categories and availability tracking.
- Customer registration and customer-record management.
- Rental booking creation, modification, cancellation, and history.
- Vehicle return processing and return inspection.
- Vehicle status updates after returns.
- Rental billing and payment recording.
- Payment history.
- Dashboard and basic business/revenue reports.
- Responsive web interface.
Excluded Features
- GPS vehicle tracking.
- Online payment gateway integration.
- Driving licence verification API.
- Vehicle maintenance scheduling.
- Native mobile application.
- Insurance management integration.
Exercise 6: Functional Requirements
Functional requirements describe what the system must do.
Authentication and User Management
1. The system shall allow users to register and log in.
2. The system shall authenticate users using JWT.
3. The system shall provide role-based access for Administrators, Rental Staff, and Customers.
4. The system shall allow users to view and update their profiles.
5. The administrator shall be able to manage user accounts and roles.
Vehicle Management
6. Authorized staff shall be able to add new vehicle records.
7. Authorized staff shall be able to view, update, delete, and search vehicles.
8. The system shall store vehicle details and vehicle categories.
9. The system shall track and update vehicle availability.
10. The system shall display available vehicles to customers.
Customer Management
11. Rental staff shall be able to register customers.
12. Authorized staff shall be able to search and view customer records.
13. Authorized staff shall be able to update customer information.
Rental Management
14. Customers shall be able to browse vehicles and submit rental requests.
15. Rental staff shall be able to create, modify, and cancel rental bookings.
16. The system shall maintain rental details and rental status.
17. The system shall maintain rental history.
18. The system shall update vehicle status when a booking is confirmed and the vehicle is rented.
Return Management
19. Rental staff shall be able to process vehicle returns.
20. Staff shall be able to inspect returned vehicles and record return details.
21. The system shall update vehicle availability after the return process.
22. The system shall mark a rental as completed after the return process.
Payment Management
23. The system shall generate rental billing information.
24. Authorized staff shall be able to record payments.
25. The system shall maintain payment history.
26. The system shall provide payment and revenue reports to authorized users.
Dashboard and Reports
27. The system shall display rental and vehicle statistics on the dashboard.
28. The system shall provide basic business and revenue reports.
Exercise 7: Non-Functional Requirements
Non-functional requirements describe how well the system should work.
Security
- Passwords must be hashed before storage.
- Protected routes must require valid JWT authentication.
- Role-based authorization must prevent unauthorized access.
- User input must be validated.
Performance
- Vehicle searches should be fast.
- The booking process should be efficient.
- API communication between frontend and backend should be responsive.
Usability
- The interface should be simple and easy to navigate.
- The application should have a responsive design.
- The booking process should be clear for customers and staff.
Reliability
- The system should handle invalid requests without crashing.
- Errors should return meaningful messages.
- Rental and payment records should be stored consistently.
Maintainability
- The backend should use modular routes, controllers, models, and middleware.
- The frontend should use reusable React components.
- Code should be organized and documented.
Scalability
- The system should support future improvements without major changes.
- Future enhancements may include GPS tracking, maintenance scheduling, customer reviews, digital rental agreements, and mobile applications.
Exercise 8: Initial Project Summary
Project Title
Vehicle Rental System
Problem Statement
Small vehicle rental businesses often manage vehicle details, customer records, bookings, returns, and payments manually or through disconnected systems. This can cause booking conflicts, inaccurate availability records, delayed payment tracking, and inefficient customer service. A centralized web application is needed to organize these operations.
Objective
To develop a secure, scalable, and user-friendly web-based system for managing vehicles, customers, rental bookings, returns, and payments.
Target Users
- Administrator: Manages users, vehicles, rental operations, payments, reports, and settings.
- Rental Staff: Manages customers, bookings, vehicle returns, availability, and payments.
- Customer: Browses vehicles, requests rentals, views rental history, and manages their profile.
Core Modules
1. User Management
2. Vehicle Management
3. Customer Management
4. Rental Management
5. Return Management
6. Payment Management
7. Dashboard and Reports
Scope
Included: Authentication, role-based access, vehicle and customer management, rental bookings, returns, payment records, dashboards, and reports.

Excluded: GPS tracking, online payment gateway, driving licence verification API, maintenance scheduling, mobile application, and insurance integration.
Expected Outcome
A centralized web application that improves the management of vehicle availability, customers, rental bookings, returns, and payments. It will reduce manual work and help rental businesses maintain organized records.
Technology Stack
MongoDB, Express.js, React.js, and Node.js (MERN Stack).