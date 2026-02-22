/**
 * This script manages a task list using an array of objects, 
 * allowing for specific limits and filtering.
 */

// 1. Initial tasks array
const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description: "Gain practical experience and collaborate with others",
    status: "done",
  },
];

/**
 * 2. Logic to add up to THREE new tasks
 * We use a loop to manage exactly three new entries.
 */
for (let i = 0; i < 3; i++) {
  const newTitle = prompt(`Enter Title for New Task ${i + 1}:`);
  const newDesc = prompt(`Enter Description for New Task ${i + 1}:`);
  let newStatus = "";

  // Validation loop (Requirement from JSL02 Prerequisite)
  while (true) {
    let input = prompt("Enter Status (todo, doing, done):");
    if (input) {
      newStatus = input.toLowerCase();
    }

    if (newStatus === "todo" || newStatus === "doing" || newStatus === "done") {
      break; 
    } else {
      alert("Invalid status! Please enter 'todo', 'doing' or 'done'.");
    }
  }

  // 3. Unique Incremental ID Logic
  // We calculate the new ID based on the last task in the array.
  const lastId = initialTasks[initialTasks.length - 1].id;
  const newId = lastId + 1;

  // 4. Store as an object inside the array
  initialTasks.push({
    id: newId,
    title: newTitle,
    description: newDesc,
    status: newStatus,
  });
}

// 5. Alert user of task limit
alert("There are enough tasks on your board, please check them in the console.");

/**
 * 6. Console Logging & Filtering
 */
console.log("--- All Tasks ---");
console.log(initialTasks);

// Filter logic to display only "done" tasks
const completedTasks = initialTasks.filter(task => task.status === "done");

console.log("--- Completed Tasks ---");
console.log(completedTasks);