let user = {};

user.name = 'John';
user.surname = 'Smith';

// 1
console.log(user);

user.name = 'Pete';

// 2
console.log(user);

delete user.name;

// 3
console.log(user);
