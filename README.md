Task Manager

Overview

Task Manager is a simple and efficient task management web application that allows users to create, organize, and manage their tasks with ease. The application supports filtering, sorting, and theme toggling (light/dark mode) for better usability.

###Features

1) Add, delete, and mark tasks as complete

2) Filter tasks by different categories (All, Today, Week, Important, Completed)

3) Sort tasks based on remaining time

4) Dark and light theme support

5) Persistent storage using local storage

6) Responsive design for better accessibility

###Setup Instructions

Prerequisites

 1) Make sure you have the following installed on your system:

    Node.js (v14 or later)

    npm (Node Package Manager) or yarn

 2) Installation

    a) Clone the Repository

        git clone https://github.com/RangerAkash1/task-manager.git
    
        cd task-manager

    b) Install Dependencies

        npm install

        OR

        yarn install

    c) Run the Application

        npm start

        OR

        yarn start

    d) This will start the development server, and the app will be accessible at http://localhost:3000.

    e) Building for Production

        1) To create an optimized production build, run:

        npm run build

        OR

        yarn build

    f) This will generate the production-ready files in the build directory.



####Assumptions Made

    The tasks are stored locally in localStorage, and no backend service is currently used.

    A task has a title, due date, priority level, and status (completed or not).

    The sorting logic assumes tasks should be sorted by their remaining time.

    Filtering is done based on pre-defined categories (e.g., "Today", "Week", "Important").

    The dark theme is applied globally by toggling a CSS class.

####Additional Information

    The project uses React Router for navigation.

    The About component provides details about the developer and links to GitHub and LinkedIn.

    The UI is styled using CSS with a clean and minimal design.

#####Contributing

    If you'd like to contribute, please fork the repository and submit a pull request with your changes.



