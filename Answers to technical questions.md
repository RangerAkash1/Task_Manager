1) How long did you spend on the coding test?

I spent approximately 6 to 7 hours((Due to Ongoing Mid sem)) on the coding test. The time was allocated to designing the UI, implementing functionality, fixing bugs, and debugging issues related to dark mode and routing.

2) What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

One of the most useful features in the latest version of JavaScript (ESNext) is the Optional Chaining (?.) operator. It helps to prevent errors when accessing deeply nested properties that might be undefined or null.

/* code snippet */ Example of usage
-------------------------------------------------------

const user = {
  profile: {
    name: "Akash",
    links: {
      github: "https://github.com/RangerAkash1",
    },
  },
};

// Without optional chaining
console.log(user.profile && user.profile.links && user.profile.links.linkedin); // Undefined

// With optional chaining
console.log(user.profile?.links?.linkedin); // Undefined (but doesn't throw an error)
console.log(user.profile?.links?.github); // Outputs: "https://github.com/RangerAkash1"

----------------------------------------------------------

3) How would you track down a performance issue in production? Have you ever had to do this?

a) Use Browser Developer Tools – Check the Performance Tab in Chrome/Firefox DevTools to identify slow render times and bottlenecks.

b) Analyze Network Requests – Use the Network Tab to find slow API responses, large assets, or unnecessary requests.

c) Monitor Logs & Errors – Check application logs, server logs, and use error tracking tools like Sentry or LogRocket.

d) Use Performance Profiling Tools – Utilize tools like Lighthouse, React Profiler, and Webpack Bundle Analyzer to optimize assets and memory usage.

e) Check Memory Leaks – Use Chrome's Memory Tab to inspect heap snapshots and detect memory leaks.

e) Database & Backend Analysis – Optimize database queries, use caching (e.g., Redis), and scale backend services if necessary.

f) Load Testing – Use tools like JMeter or k6 to simulate high traffic and measure performance.
Yes, I have debugged performance issues in production before. One instance was optimizing API calls by implementing debouncing and lazy loading to reduce unnecessary requests and improve responsiveness.

4) If you had more time, what additional features or improvements would you consider adding to the task management application?

1. User Authentication & Authorization

Implemention of JWT-based authentication.

Allow users to register, log in, and log out.

Role-based permissions (Admin/User) for managing tasks.(Like Admin panel who can assign the tasks to other members)

2. Implementation of the Backend with Database(MongoDB)

3. Real-time Updates with WebSockets

Use Socket.io or WebSockets for real-time updates when tasks are added, deleted, or modified.

Enable live collaboration on tasks with multiple users.

4. Drag and Drop Task Management

Implement Drag-and-Drop functionality using libraries like react-beautiful-dnd.

Enable users to reorder tasks intuitively.

5. Notifications & Reminders

Implement push notifications for due tasks.

Send email reminders or browser alerts for upcoming deadlines.

6. Recurring Tasks & Task Prioritization

Allow setting repeating tasks (daily, weekly, monthly).

Introduce priority levels (Low, Medium, High) and color-coded labels.

7. Mobile Responsiveness & PWA Support

Make the app fully mobile-friendly with an optimized UI.

Convert it into a Progressive Web App (PWA) for offline functionality.

8. Dark Mode Enhancements

Improve dark mode styling for better contrast and readability.

Save the theme preference to localStorage to persist across sessions.