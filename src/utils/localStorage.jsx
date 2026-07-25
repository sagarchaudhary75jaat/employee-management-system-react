const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "employee1@example.com",
    password: "123",

    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },

    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,

        taskTitle: "Prepare Sales Report",

        taskDescription:
          "Prepare monthly sales report.",

        taskDate: "2026-07-10",

        category: "Reports",
      },

      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,

        taskTitle: "Client Meeting",

        taskDescription:
          "Attend client meeting.",

        taskDate: "2026-07-12",

        category: "Meeting",
      },

      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,

        taskTitle: "Update CRM",

        taskDescription:
          "Update customer records.",

        taskDate: "2026-07-08",

        category: "CRM",
      },

      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,

        taskTitle: "Testing",

        taskDescription:
          "Complete testing module.",

        taskDate: "2026-07-05",

        category: "QA",
      },
    ],
  },

  {
    id: 2,
    firstName: "Aman",
    email: "employee2@example.com",
    password: "123",

    taskCounts: {
      active: 0,
      newTask: 1,
      completed: 0,
      failed: 0,
    },

    tasks: [],
  },

  {
    id: 3,
    firstName: "Priya",
    email: "employee3@example.com",
    password: "123",

    taskCounts: {
      active: 0,
      newTask: 0,
      completed: 0,
      failed: 0,
    },

    tasks: [],
  },

  {
    id: 4,
    firstName: "Neha",
    email: "employee4@example.com",
    password: "123",

    taskCounts: {
      active: 0,
      newTask: 0,
      completed: 0,
      failed: 0,
    },

    tasks: [],
  },

  {
    id: 5,
    firstName: "Arjun",
    email: "employee5@example.com",
    password: "123",

    taskCounts: {
      active: 0,
      newTask: 0,
      completed: 0,
      failed: 0,
    },

    tasks: [],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@me.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem(
    "employees",
    JSON.stringify(employees)
  );

  localStorage.setItem(
    "admin",
    JSON.stringify(admin)
  );
};

export const getLocalStorage = () => {
  let employees = JSON.parse(
    localStorage.getItem("employees")
  );

  let admin = JSON.parse(
    localStorage.getItem("admin")
  );

  if (!employees || !admin) {
    setLocalStorage();

    employees = JSON.parse(
      localStorage.getItem("employees")
    );

    admin = JSON.parse(
      localStorage.getItem("admin")
    );
  }

  return {
    employees,
    admin,
  };
};