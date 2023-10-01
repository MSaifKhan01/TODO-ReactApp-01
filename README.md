# TODO-ReactApp-01


# E-commerce Dashboard

This is an E-commerce Dashboard project built using React.js. It includes several components for managing products, user profiles, and authentication. Below, you'll find an overview of the components and their functionalities.

## Components

### 1. Navbar (Nav.js)

- Displays navigation links based on the user's authentication status.
- Provides links to view products, add products, update products, view the user profile, and log out.
- Responsive design for small and medium-sized screens.

### 2. Sign Up (SignUp.js)

- Allows users to register by providing their name, email, and password.
- Validates user input and displays error messages.
- Navigates to the dashboard after successful registration.

### 3. Login (Login.js)

- Allows registered users to log in using their email and password.
- Validates user credentials and displays an error message for invalid inputs.
- Navigates to the dashboard after successful login.

### 4. User Profile (Profile.js)

- Displays the user's profile information, including their name and email.
- Additional user information can be added to this component.
- Styled for a clean and organized display.

### 5. Product List (ProductList.js)

- Lists the products available in the e-commerce store.
- Allows users to search for products by name.
- Provides options to delete and update products.
- Responsive design for small screens and medium-sized screens.

### 6. Add Product (AddProduct.js)

- Allows users to add new products to the e-commerce store.
- Validates user input for the product name, price, category, and company.
- Displays error messages for invalid inputs.
- Responsive design for small and medium-sized screens.

### 7. Update Product (UpdateProduct.js)

- Allows users to update existing product details.
- Retrieves the current product details and pre-fills the input fields.
- Allows users to modify the name, price, category, and company of the product.
- Responsive design for small and medium-sized screens.

### 8. Footer (Footer.js)

- Displays a footer with the project name (E-commerce Dashboard).
- Positioned at the bottom of the page.

## Getting Started

1. Clone this repository to your local machine.
2. Install the necessary dependencies using npm or yarn.
3. Run the development server to start the application.

```bash
npm install
npm start


```

## Tech Stack Used


- React.js: A front-end framework for building user interfaces.
- React Router: Used for routing and navigation within the application.
- CSS: Styles and responsive design for the components.
- REST API: Enables communication with the backend server for user authentication and data management.
- Node.js: A JavaScript runtime environment for building server-side applications.
- Express: A web application framework for Node.js, used for building robust APIs.
- MongoDB Atlas: A cloud-based database service for storing and managing data.
