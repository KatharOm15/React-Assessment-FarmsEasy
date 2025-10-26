# 🌾 FarmsEasy Assessment - User Data with Pagination

This project is a **React-based web application** built as part of the **FarmsEasy Frontend Assessment**.  
It displays user data fetched from an API in a **tabular format** with **pagination**, ensuring smooth navigation and a responsive interface.

---

## 📁 Project Structure

FARMSEASY ASSESSMENT/
│
├── user-data-with-pagination/
│ ├── node_modules/ # Project dependencies
│ ├── public/ # Public assets and index.html entry
│ ├── src/
│ │ ├── assets/ # (Optional) Static assets like images or icons
│ │ ├── components/
│ │ │ └── user/
│ │ │ └── User.jsx # Component to display paginated user data
│ │ ├── App.jsx # Root component integrating User component
│ │ ├── App.css # Styling for main app
│ │ ├── index.css # Global styles
│ │ └── main.jsx # React entry file
│ │
│ ├── .gitignore
│ ├── eslint.config.js
│ ├── index.html
│ ├── package.json
│ ├── package-lock.json
│ ├── vite.config.js # Vite configuration
│ └── README.md


---

## ⚙️ How to Run the App

Follow these steps to set up and run the application locally:

### 1️⃣ Clone the Repository

git clone https://github.com/your-username/FarmEasy-Assessment.git

2️⃣ Navigate into the Project Directory
cd user-data-with-pagination

3️⃣ Install Dependencies

Make sure you have Node.js (>= 16) installed.

npm install

4️⃣ Start the Development Server
npm run dev

5️⃣ Open in Browser

Once the server is running, open your browser and navigate to:

http://localhost:5173


(Vite default port may vary — check your terminal output)

🚀 Features Implemented

✅ User Data Fetching – Fetches user details from a public API (e.g., https://jsonplaceholder.typicode.com/users).
✅ Pagination – Displays a limited number of users per page with Next/Previous navigation.
✅ Responsive Design – Built using Tailwind CSS for a clean and adaptive layout.
✅ Error Handling & Loading States – Handles API errors and shows loading indicators.
✅ Component-Based Architecture – Modular design with reusable and maintainable React components.

💡 Bonus / Extra Features

✨ Lucide Icons Integration – Beautiful icons for better UI representation.
✨ Modern UI – Styled with Tailwind CSS for consistency and speed.
✨ Code Quality – ESLint configuration added for clean and maintainable code.

🧱 Tech Stack
Technology	Purpose
React.js	Frontend library
Vite	Build tool for fast development
Tailwind CSS	Styling and responsiveness
 Fetch API	Data fetching
Lucide React	Icons library

🧪 Example API Used
GET https://jsonplaceholder.typicode.com/users

Sample Response:
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "city": "Gwenborough"
  }
}

👨‍💻 Author

Name: Om Kathar
Role: Frontend Developer
Email: omkathar15@gmail.com  
