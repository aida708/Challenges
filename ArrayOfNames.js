//write code to get array of names from given array of users.4

const users = [
    {
        id:111,
        name: 'FATOS',
        IsActive:true,
    },
    {
        id:1,
        name: 'eldaS',
        IsActive:false,
    },
    {
        id:11,
        name: 'aida',
        IsActive:true,
    }

]
const names  = users.map(user => user.name);   //mapping through every single item
console.log(names);

/*
method 2
const names = []; create an array
for(let i =0 ; i< users.length; i++) {
    names.push(users[i].name);    //push into the empty array

    console.log(names);
}
*/

/* 
method 3 
const names = []
users.forEach((user => {
    names.push(user.name);
})
*/

