Arry of names challenge
# Extract Array of Names from Users

## Explanation

This code snippet demonstrates how to extract an array of names from an array of user objects in JavaScript.

1. **Defining the Array of Users (`users`)**:
   - We define an array called `users` that contains three objects. Each object represents a user and contains three properties: `id`, `name`, and `IsActive`.

2. **Using `map()` to Extract Names**:
   - We use the `map()` function to iterate over each user object in the `users` array and create a new array containing only the names of the users.

3. **Outputting the Result**:
   - Finally, we log the `names` array to the console, which contains the extracted names of the users.

## Code

```javascript
const users = [
    {
        id: 111,
        name: 'FATOS',
        IsActive: true,
    },
    {
        id: 1,
        name: 'eldaS',
        IsActive: false,
    },
    {
        id: 11,
        name: 'aida',
        IsActive: true,
    }
];

const names = users.map(user => user.name);

console.log(names); // Output: ["FATOS", "eldaS", "aida"]
const names  = users.map(user => user.name);   //mapping through every single item
console.log(names);

method 2: 
const names = []; create an array
for(let i =0 ; i< users.length; i++) {
    names.push(users[i].name);    //push into the empty array

    console.log(names);
}
*/


method 3 
const names = []
users.forEach((user => {
    names.push(user.name);
})


