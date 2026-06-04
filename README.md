# 🛒 DigiTools - Premium Digital Products Marketplace

## 📝 Description
DigiTools is a modern, clean, and fully responsive web application where users can browse various premium digital assets and tools. It allows users to view product details, add them to a dynamic shopping cart, and manage their selections seamlessly with real-time feedback.

---

## 🛠️ Technologies, Language & Styling Used
- **Language:** JavaScript (ES6+)
- **Core Framework:** React.js (Vite)
- **Styling & Design:** CSS3 & **Tailwind CSS (Latest Update Features)** & DaisyUI
- **Icons:** Lucide React
- **Alerts & Notifications:** React-Toastify

---

## 🚀 Key Features & Implementation Details

### 1. Modern UI & Custom Layouts (Tailwind CSS Latest Update)
The entire user interface is crafted using the **latest features and syntax of Tailwind CSS**. It features modern, upgraded **linear gradients** (`bg-linear-to-r`), vibrant background clips, smooth transitions, and a completely responsive grid system designed to look pixel-perfect on all device screens.

### 2. Dynamic Tab Switcher (Capsule Design)
Users can easily toggle between the "Products" section and the "Your Cart" section using a custom-designed, capsule-shaped tab navigation bar. Advanced CSS border-radius and flexible container properties are used to achieve this sleek design.

### 3. Live Cart Counter & Badge (ES6 Spread Operator)
When a user clicks the "Buy Now" button, the application utilizes the ES6 **Spread Operator (`...`)** to dynamically update the cart state. A red notification badge automatically appears over the Navbar's shopping cart icon using CSS absolute positioning (`absolute -top-1.5 -right-2`) to show the live total.

### 4. Advanced Cart Analytics (ES6 Array Methods)
The cart management heavily relies on modern ES6 JavaScript features:
- **`reduce()` Method:** Dynamically calculates the total price of all selected items in the cart in real-time.
- **`filter()` Method:** Handles the item deletion mechanism smoothly by filtering out the removed product by its unique ID.
- **`map()` Method:** Efficiently renders the product cards and cart items dynamically from data.

### 5. Interactive Notifications & Checkout
Includes smooth toast alerts via React-Toastify that pop up whenever an item is added or removed. Furthermore, clicking the "Proceed to Checkout" button automatically clears the entire cart array and resets the counter to zero.