/**
 * ES6 ASSIGNMENT LAB 1: User Profile Destructuring & Updates
 *
 * This assignment uses Object Destructuring and the Spread Operator to manage
 * a user's profile data. The goal is to extract specific information and
 * to safely update the profile without modifying the original object.
 *
 * Concepts Covered:
 * - Object Destructuring
 * - Rest Operator
 * - Spread Operator
 */

console.log("\n--- LAB 1: User Profile Destructuring & Updates ---\n");

// Mock user profile data, including sensitive information
const userProfile = {
    id: 123,
    username: 'js_master',
    email: 'js_master@example.com',
    passwordHash: 'f4k3p455w0rdh45h',
    isOnline: true,
    lastLogin: '2025-08-18',
    address: {
        street: '123 Code Lane',
        city: 'Silicon Valley',
        zip: '10001'
    }
};

/**
 * TASK 1: Extract and Display User Info
 *
 * Use object destructuring to extract the `username`, `email`, and `isOnline`
 * from the `userProfile` object. Print them to the console.
 *
 * Expected Output:
 * Username: js_master
 * Email: js_master@example.com
 * Online Status: true
 */

// YOUR TASK 1 CODE HERE

const {username, email, isOnline} = userProfile;
console.log('Username: ' + username);
console.log('Email: ' + email);
console.log('Online Status: ' + isOnline);

/**
 * TASK 2: Extract Nested Property
 *
 * Use nested object destructuring to get the `city` from the `address`
 * object inside `userProfile` then print it to the console.
 *
 * Expected Output:
 * User lives in: Silicon Valley
 */

// YOUR TASK 2 CODE HERE

const {address: {city}} = userProfile;
console.log('User lives in: ' + city);

/**
 * TASK 3: Remove Sensitive Data using Rest Operator
 *
 * Use the rest operator to create a new `publicProfile` object that contains
 * all properties of `userProfile` except for `passwordHash` and `lastLogin`.
 *
 * Expected Output:
 * Public Profile: {
 * id: 123,
 * username: 'js_master',
 * email: 'js_master@example.com',
 * isOnline: true,
 * address: { ... }
 * }
 */

// YOUR TASK 3 CODE HERE

const {passwordHash, lastLogin, ...otherProfile} = userProfile;
console.log('Public Profile:', otherProfile);

/**
 * TASK 4: Update Profile with Spread Operator
 *
 * Create a `updatedProfile` object by using the spread operator on `userProfile`
 * and then changing the `isOnline` status to `false`.
 *
 * Expected Output:
 * Updated Profile is Online?: false
 */

// YOUR TASK 4 CODE HERE

const updatedProfile = {
    ...userProfile,
    isOnline: false
};

console.log('Updated Profile is Online?: ' + updatedProfile.isOnline);