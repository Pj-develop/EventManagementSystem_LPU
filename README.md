# Event Management System

Welcome to our Event Management System developed as part of our CA-3 project. This system aims to simplify campus event planning, registration, and ticket booking processes. I took on the role of the project's architect, focusing on creating a user-friendly interface with modern design principles. We chose to implement the system using the MERN stack (MongoDB, Express.js, React.js, Node.js) and adopted the agile Scrum methodology to ensure efficient development.

**Skills:** Figma, UI/UX Design, React.js, MongoDB, Node.js, Express.js, Requirements Analysis, User Interface Design

## Features

- Schedule an event.
- View upcoming events.
- Access the event calendar.
- Obtain approval for events.
- Book tickets for events.
- Generate QR codes for tickets.
- Hire Vertos
- See Important Annnouncements
- View Student Organizations & their Vision

## Technologies Used

- React.js
- Node.js
- Express.js
- MongoDB
- NPM (Node Package Manager)
- JWT Webtoken
- QR Code

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB Database

### Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory using two terminals:
   - **cd client** for Frontend
   - **cd api** for Backend
3. Install server dependencies for both frontend and backend.
4. Create a `.env` file in the root directory with the following content, and replace placeholders with your own values:
   ```
   MONGODB_URI=mongodb://localhost/your-database-name
   ```
5. Start the server:
   - **ems/api:** `nodemon start`
     If the command is not working, use `PowerShell -ExecutionPolicy Bypass nodemon`.
6. Start the Client:
   - **ems/client:** `npm run dev`

The application should now be running. You can access it at [http://localhost:5173](http://localhost:5173) for the client and [http://localhost:4000](http://localhost:4000) for the server.

## Thank You

Feel free to explore the system and provide any feedback or suggestions. Thank you for using Event Management System!
