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
const names  =users.map(user => user.name);
console.log(names);