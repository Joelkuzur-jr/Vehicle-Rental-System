# MongoDB Collection Design

Use MongoDB ObjectId references between collections. The fields below are a proposed design based on Project Brief 10.

## 1. Users
Purpose: login credentials, roles and staff/admin profiles.
- _id: ObjectId (primary key)
- fullName: String
- email: String (unique)
- passwordHash: String
- role: String (ADMIN, STAFF, CUSTOMER)
- phone: String
- createdAt: Date
- updatedAt: Date

## 2. Customers
Purpose: customer information used for rental transactions.
- _id: ObjectId
- userId: ObjectId (optional reference to Users for customers with login accounts)
- fullName: String
- email: String
- phone: String
- address: String
- identityReference: String (only if required by the project; do not store unnecessary sensitive data)
- createdAt: Date

## 3. VehicleCategories
Purpose: group vehicles by type.
- _id: ObjectId
- name: String (e.g. Car, Motorcycle, Bicycle, Commercial Vehicle)
- description: String
- createdAt: Date

## 4. Vehicles
Purpose: vehicle details and availability.
- _id: ObjectId
- registrationNumber: String (unique)
- brand: String
- model: String
- year: Number
- categoryId: ObjectId (reference to VehicleCategories)
- rentalRate: Number
- rateUnit: String (hour/day)
- availabilityStatus: String (AVAILABLE, RENTED, UNAVAILABLE)
- description: String
- createdAt: Date
- updatedAt: Date

## 5. Rentals
Purpose: booking and rental transaction records.
- _id: ObjectId
- customerId: ObjectId (reference to Customers)
- vehicleId: ObjectId (reference to Vehicles)
- staffId: ObjectId (reference to Users; staff member managing the rental)
- startDate: Date
- expectedReturnDate: Date
- actualReturnDate: Date (optional until returned)
- totalAmount: Number
- rentalStatus: String (REQUESTED, CONFIRMED, ACTIVE, CANCELLED, COMPLETED)
- createdAt: Date

## 6. Returns
Purpose: return processing and inspection.
- _id: ObjectId
- rentalId: ObjectId (unique reference to Rentals)
- returnDate: Date
- vehicleCondition: String
- inspectionNotes: String
- additionalCharges: Number
- processedBy: ObjectId (reference to Users)
- createdAt: Date

## 7. Payments
Purpose: rental billing and payment records.
- _id: ObjectId
- rentalId: ObjectId (unique reference to Rentals for the one-payment-per-rental scope)
- amount: Number
- paymentMethod: String (Cash, Bank Transfer, Card – recorded only)
- paymentStatus: String (PENDING, PAID, FAILED, REFUNDED)
- paymentDate: Date
- recordedBy: ObjectId (reference to Users)

## Relationships and constraints
- One VehicleCategory can contain many Vehicles.
- One Customer can create many Rentals.
- One Vehicle can appear in many Rentals over time; avoid overlapping confirmed/active rentals for the same vehicle.
- One Staff User can manage many Rentals.
- One Rental has at most one Return record and one Payment record in this project's stated scope.
- Store password hashes, never plain-text passwords.
- Create indexes on Users.email, Vehicles.registrationNumber, Rentals.customerId, Rentals.vehicleId, Rentals.rentalStatus, and Payments.rentalId.
- Project Brief 10 excludes online payment gateway integration; payment methods are recorded by staff rather than processed by an external gateway.
