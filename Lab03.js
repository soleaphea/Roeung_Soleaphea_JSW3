/**
 * ES6 ASSIGNMENT LAB 3: Advanced Data Manipulation
 *
 * This assignment combines object and array destructuring, rest & spread operators,
 * and array methods to perform more complex data manipulations on nested data structures.
 *
 * Concepts Covered:
 * - Object Destructuring with Aliases
 * - Array Destructuring
 * - Rest Operator with Arrays and Objects
 * - Spread Operator with Arrays and Objects
 * - Combining Array Methods (map, filter)
 */

console.log("\n--- LAB 3: Advanced Data Manipulation ---\n");

// Mock data representing a list of users, each with their own list of tasks
const userData = [
    {
        id: 1,
        name: 'Alice',
        role: 'Developer',
        tasks: [
            { taskId: 101, description: 'Fix login bug', completed: true },
            { taskId: 102, description: 'Implement new feature', completed: false }
        ],
        contact: {
            email: 'alice@example.com',
            phone: '123-456-7890'
        }
    },
    {
        id: 2,
        name: 'Bob',
        role: 'Manager',
        tasks: [
            { taskId: 201, description: 'Review Q3 report', completed: true },
            { taskId: 202, description: 'Plan team meeting', completed: true }
        ],
        contact: {
            email: 'bob@example.com',
            phone: '098-765-4321'
        }
    },
    {
        id: 3,
        name: 'Charlie',
        role: 'Designer',
        tasks: [
            { taskId: 301, description: 'Create wireframes', completed: false }
        ],
        contact: {
            email: 'charlie@example.com',
            phone: '111-222-3333'
        }
    }
];

/**
 * TASK 1: Extract User and First Task
 *
 * Use array destructuring to get the first user from the `userData` array.
 * Then, use nested object and array destructuring to get the user's `name`
 * and the `description` of their first task.
 *
 * Expected Output:
 * First User: Alice
 * First Task: Fix login bug
 */

// YOUR TASK 1 CODE HERE

const firstUser = userData.find(user => user.name == 'Alice');
if (firstUser) {
    console.log('First User: ' + firstUser.name);
    console.log('First Task: ', firstUser.tasks[0].description);
};

/**
 * TASK 2: Filter out a Specific User
 *
 * Use the `filter()` method to create a new array containing all users
 * except for the one named 'Bob'. Print the result.
 *
 * Expected Output:
 * Users other than Bob: [ { id: 1, ... }, { id: 3, ... } ]
 */

// YOUR TASK 2 CODE HERE

const usersNotBob = userData.filter(user => user.name != 'Bob');
console.log('Users other than Bob:', usersNotBob);

/**
 * TASK 3: Find Users with Incomplete Tasks
 *
 * Use a combination of `filter()` and `find()` to get a list of users who have
 * at least one task that is not yet completed (`completed: false`).
 * Then use forEach to print the expected output to console.
 *
 * Expected Output:
 * Users with incomplete tasks:
 * - Alice (1 incomplete task)
 * - Charlie (1 incomplete task)
 */

// YOUR TASK 3 CODE HERE

const userIncompleteTask = userData.filter(user => user.tasks.find( task => task.completed == false));
console.log('Users with incomplete tasks:');
userIncompleteTask.forEach(user => {
    let IncompleteTaskNum = user.tasks.filter(task => task.completed == false)
    console.log('- ' + user.name + '(' + IncompleteTaskNum.length + ' incomplete task' + ')');
})

/**
 * TASK 4: Update a User's Role and Add a New Task
 *
 * Create a new `updatedUserData` array. 
 * Use the `map()` method to find the user with `id: 2` (Bob).
 *
 * For this user:
 * 1. Use the spread operator to create a new user object.
 * 2. Change the `role` to 'Senior Manager'.
 * 3. Add a new task object to their `tasks` array using the spread operator.
 * The new task should be: `{ taskId: 203, description: 'Mentor junior staff', completed: false }`.
 *
 * All other users should remain unchanged.
 * Print the `updatedUserData` array to the console.
 * Note: The console might display nested objects as `[Object]` for brevity.
 * To view the full content, you can use console.log(Updated User Data:', JSON.stringify(updatedUserData, null, 2)).
 *
 * Expected Output:
 * Updated User Data: [
 * { id: 1, ... },
 * { id: 2, name: 'Bob', role: 'Senior Manager', tasks: [ ... , { ... }, { ... } ], contact: { ... } }, // Role updated and task added
 * { id: 3, ... }
 * ]
 */

// YOUR TASK 4 CODE HERE

userData.map(user => {
    if (user.id == 2){
        user.role = 'Senior Manager';
        user.tasks[user.tasks.length] = { taskId: 203, description: 'Mentor junior staff', completed: false };
    }
});

const updatedUserData = [...userData];
console.log('Updated User Data: ', updatedUserData);
