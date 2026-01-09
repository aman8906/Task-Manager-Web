const day = 24 * 60 * 60 * 1000;

export const defaultTasks = [
  {
    title: "Welcome to Task Manager",
    description: "Explore dashboard layout and features.",
    priority: "Low",
    status: "Pending",
    dueDate: new Date(Date.now() + day * 1),
    todoChecklist: [
      { text: "Open dashboard", completed: false },
      { text: "View statistics cards", completed: false },
    ],
  },
  {
    title: "Complete Your Profile",
    description: "Update profile information and profile image.",
    priority: "High",
    status: "Pending",
    dueDate: new Date(Date.now() + day * 2),
    todoChecklist: [
      { text: "Upload profile photo", completed: false },
      { text: "Verify email", completed: false },
    ],
  },
  {
    title: "Read Platform Guidelines",
    description: "Understand rules and workflow of task management.",
    priority: "Medium",
    status: "Pending",
    dueDate: new Date(Date.now() + day * 3),
    todoChecklist: [
      { text: "Read documentation", completed: false },
    ],
  },
  {
    title: "Check Notification Settings",
    description: "Enable system alerts and reminders.",
    priority: "Low",
    status: "Pending",
    dueDate: new Date(Date.now() + day * 3),
    todoChecklist: [
      { text: "Enable notifications", completed: false },
    ],
  },
  {
    title: "Create Your First Task",
    description: "Practice creating and editing a task.",
    priority: "Medium",
    status: "Pending",
    dueDate: new Date(Date.now() + day * 4),
    todoChecklist: [
      { text: "Create demo task", completed: false },
    ],
  },
  {
    title: "Update Password Security",
    description: "Ensure your password is strong and secure.",
    priority: "High",
    status: "Pending",
    dueDate: new Date(Date.now() + day * 5),
    todoChecklist: [
      { text: "Change password", completed: false },
    ],
  },
  {
    title: "Review Task Filters",
    description: "Learn how to filter and search tasks.",
    priority: "Low",
    status: "Pending",
    dueDate: new Date(Date.now() + day * 6),
    todoChecklist: [
      { text: "Test filters", completed: false },
    ],
  },
  {
    title: "Understand Priority Levels",
    description: "Learn how priority impacts task workflow.",
    priority: "Low",
    status: "Pending",
    dueDate: new Date(Date.now() + day * 6),
    todoChecklist: [
      { text: "Read priority guide", completed: false },
    ],
  },
  {
    title: "Organize Daily Tasks",
    description: "Plan your daily activities using tasks.",
    priority: "Medium",
    status: "Pending",
    dueDate: new Date(Date.now() + day * 7),
    todoChecklist: [
      { text: "Create daily task plan", completed: false },
    ],
  },
  {
    title: "Mark a Task as Completed",
    description: "Practice closing a completed task.",
    priority: "Low",
    status: "Pending",
    dueDate: new Date(Date.now() + day * 7),
    todoChecklist: [
      { text: "Complete any task", completed: false },
    ],
  },

  // ---------- Next 10 ----------
  {
    title: "Explore Reports Section",
    description: "View progress and analytics.",
    priority: "Low",
    status: "Pending",
    dueDate: new Date(Date.now() + day * 8),
    todoChecklist: [
      { text: "Open reports page", completed: false },
    ],
  },
  {
    title: "Review Overdue Tasks",
    description: "Learn how overdue tracking works.",
    priority: "Medium",
    status: "Pending",
    dueDate: new Date(Date.now() + day * 9),
    todoChecklist: [
      { text: "View overdue list", completed: false },
    ],
  },
  {
    title: "Understand Task Progress",
    description: "Update progress percentage of a task.",
    priority: "Low",
    status: "Pending",
    dueDate: new Date(Date.now() + day * 9),
    todoChecklist: [
      { text: "Update progress", completed: false },
    ],
  },
  {
    title: "Explore Attachments",
    description: "Upload and manage task attachments.",
    priority: "Low",
    status: "Pending",
    dueDate: new Date(Date.now() + day * 10),
    todoChecklist: [
      { text: "Upload sample file", completed: false },
    ],
  },
  {
    title: "Collaborate with Team",
    description: "Assign or share a task with another user.",
    priority: "Medium",
    status: "Pending",
    dueDate: new Date(Date.now() + day * 11),
    todoChecklist: [
      { text: "Assign a task", completed: false },
    ],
  },
  {
    title: "Use Search Feature",
    description: "Search tasks using keywords.",
    priority: "Low",
    status: "Pending",
    dueDate: new Date(Date.now() + day * 12),
    todoChecklist: [
      { text: "Search a task", completed: false },
    ],
  },
  {
    title: "Manage Completed Tasks",
    description: "Archive or review completed tasks.",
    priority: "Low",
    status: "Pending",
    dueDate: new Date(Date.now() + day * 13),
    todoChecklist: [
      { text: "Open completed tasks", completed: false },
    ],
  },
  {
    title: "Review Weekly Performance",
    description: "Analyze your weekly productivity.",
    priority: "Medium",
    status: "Pending",
    dueDate: new Date(Date.now() + day * 14),
    todoChecklist: [
      { text: "Check weekly report", completed: false },
    ],
  },
  {
    title: "Set Personal Goals",
    description: "Create goals using tasks.",
    priority: "High",
    status: "Pending",
    dueDate: new Date(Date.now() + day * 15),
    todoChecklist: [
      { text: "Create personal goal task", completed: false },
    ],
  },
  {
    title: "Optimize Workflow",
    description: "Improve efficiency using task features.",
    priority: "Medium",
    status: "Pending",
    dueDate: new Date(Date.now() + day * 16),
    todoChecklist: [
      { text: "Review workflow settings", completed: false },
    ],
  },
];
