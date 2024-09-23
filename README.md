
# Customer Satisfaction Survey Kiosk (MERN Stack)

## Overview

This is a customer satisfaction survey kiosk application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application allows customers to provide feedback through a series of questions and submit their responses. The backend stores the survey responses in MongoDB, and the frontend provides a user-friendly interface.


## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mryashsinghal/Survey.git
   cd Survey
   ```

2. **Install dependencies**:
   - Backend:
     ```bash
     cd backend
     npm install
     ```
   - Frontend:
     ```bash
     cd frontend
     npm install
     ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory with the following:
   ```bash
   MONGO_URI=your_mongo_uri
   PORT=5000
   ```

4. **Run the application**:
   - Backend:
     ```bash
     cd backend
     npm run dev
     ```
   - Frontend:
     ```bash
     cd frontend
     npm run dev
     ```

## Usage

Open your browser and navigate to `http://localhost:5173/` to interact with the survey kiosk application.

## Technologies Used

- **Frontend**: React.js, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

