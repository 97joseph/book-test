# **Book Review Application**

A simple Book Review Application where users can:
- View a list of books.
- Add a new book.
- Submit a review for a book.
- View all reviews for a specific book.

---

## **Technologies Used**
- **Backend**: Node.js, Express, Sequelize (MySQL)
- **Frontend**: React, Bootstrap
- **Database**: MySQL (XAMPP)

---

## **Prerequisites**
Before running the application, ensure you have the following installed:
1. **Node.js** (v16 or higher)
2. **MySQL** (via XAMPP or standalone)
3. **Git** (optional, for cloning the repository)

---

## **Setup Instructions**

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/book-review-app.git
cd book-review-app
```

---

### 2. Set Up the Backend

#### a. Install Dependencies
Navigate to the `backend` folder and install the required dependencies:
```bash
cd backend
npm install
```

#### b. Configure the Database
1. Open XAMPP and start the **MySQL** server.
2. Create a new database in MySQL:
   ```sql
   CREATE DATABASE book_review_app;
   ```
3. Update the database configuration in `backend/config/config.json`:
   ```json
   {
     "development": {
       "username": "root", // Your MySQL username
       "password": "",     // Your MySQL password
       "database": "book_review_app",
       "host": "127.0.0.1",
       "dialect": "mysql"
     }
   }
   ```

#### c. Run Migrations
Run the Sequelize migrations to create the necessary tables in the database:
```bash
npx sequelize-cli db:migrate
```

#### d. Start the Backend Server
Run the backend server:
```bash
npm start
```
The backend will run on `http://localhost:5000`.

---

### 3. Set Up the Frontend

#### a. Install Dependencies
Navigate to the `frontend` folder and install the required dependencies:
```bash
cd ../frontend
npm install
```

#### b. Start the React App
Run the React development server:
```bash
npm start
```
The frontend will run on `http://localhost:3000`.

---

## **Running the Application**
1. Ensure the **backend server** is running (`http://localhost:5000`).
2. Ensure the **frontend React app** is running (`http://localhost:3000`).
3. Open your browser and navigate to `http://localhost:3000` to use the application.

---

## **Application Features**
1. **View Books**: Displays a list of books with their titles and authors.
2. **Add a Book**: Allows users to add a new book via a form.
3. **Submit a Review**: Allows users to submit a review for a selected book.
4. **View Reviews**: Displays all reviews for a selected book.

---

## **Folder Structure**
```
book-review-app/
├── backend/                  # Backend (Node.js/Express/Sequelize)
│   ├── config/               # Database configuration
│   ├── migrations/           # Sequelize migrations
│   ├── models/               # Sequelize models
│   ├── app.js                # Backend server entry point
│   └── package.json          # Backend dependencies
├── frontend/                 # Frontend (React)
│   ├── public/               # Static assets
│   ├── src/                  # React components
│   ├── package.json          # Frontend dependencies
│   └── README.md             # Frontend setup instructions
└── README.md                 # Main README file
```

---

## **Troubleshooting**
1. **Database Connection Issues**:
   - Ensure MySQL is running via XAMPP.
   - Verify the database credentials in `backend/config/config.json`.

2. **Backend Server Not Starting**:
   - Ensure all dependencies are installed (`npm install`).
   - Check for port conflicts (default port: `5000`).

3. **Frontend Not Connecting to Backend**:
   - Ensure the backend server is running.
   - Verify the API endpoints in the React app (`http://localhost:5000`).

---

## **Contributing**
Contributions are welcome! If you'd like to contribute, please:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

---


## **Acknowledgments**
- [Sequelize](https://sequelize.org/) for database management.
- [Bootstrap](https://getbootstrap.com/) for frontend styling.
- [React](https://reactjs.org/) for building the user interface.

---

Enjoy using the Book Review Application! 🚀

