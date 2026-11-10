# Combining Union (|) and Intersection (&) Types in Typescript

### Introduction

Typescript provides Union (`|`) and Intersection (`&`) types to create flexible and reusable type definitions. A Union type allows a variable to hold one of several possible types, where as an Intersection type combines multiple types into a single type. Combinning these concepts is useful when developing real-world application with different user roles.

A Union type represents OR, meaning a value can satisty one type or another. For example, in different erp softeres application, a user can be either an Admin or a customer.

An Intersection type represents AND meaning an object must satisty all the combined type requirements. For example, every user must have basic profile information regardless of their role.

### Example

```typescript
type Admin = {
    role: "admin";
    permissions?: string[]; 
}
 
type Customer = {
    role: "customer";
    purchaseHistory?: string[];
}

type Profile = {
    name: string;
    email: string;
    address: string;
};

//Union: Admin or customer
type UserRole = Admin | Customer;

//Intersection: Profile and user role
type User = Profile & UserRole;

const tanvir: User = {
    name: "tanvir",
    email: "tan@gmail.com",
    address: "BD",
    role: "admin",
    permission: ["manage orders"]
}

const rahim: User = {
    name: "tanvir3",
    email: "tan2@gmail.com",
    address: "Dhaka",
    role: "customer",
    purchaseHistory: ["rice"]
};
```

Here, `UserRole` allows either an Admin or Customer structure. The `User` type combines Profile with UserRole, so every user must provide profile information and satisfy one of the two role structure.

### Conclusion

Union and Intersection types make Typescript application more flexible.

