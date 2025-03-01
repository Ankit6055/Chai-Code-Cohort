// const tinderUser = new Object(); // Singleton Object
const tinderUser = {}; // Non-Singleton Object

// console.log(tinderUser); // {}

tinderUser.id = "123abc";
tinderUser.name = "Ankit";
tinderUser.isLoggedIn = false;

// console.log(tinderUser); // { id: '123abc', name: 'Ankit', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullName: {
            firstname: "Ankit",
            lastname: "Kumar"
        }
    }
}

// console.log(regularUser.fullname.userFullName.lastname); // Kumar
// console.log(regularUser.fullnamee?.userFullName.lastname); // undefined, if there is some issue

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a",4: "b"};

// const obj3 = { obj1, obj2 };
// console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1, obj2); // {} => acts as target, and others as source
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = { ...obj1, ...obj2 }; // Spread operator
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users = [
    {
        id: 1, 
        email: "h@gmail.com"
    },
    {
        id: 2, 
        email: "y@gmail.com"
    },
    {
        id: 3, 
        email: "t@gmail.com"
    },
]

// console.log(users[1].id); // 2

// console.log(tinderUser); // { id: '123abc', name: 'Ankit', isLoggedIn: false }

// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // [ '123abc', 'Ankit', false ]
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Ankit' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true
// console.log(tinderUser.hasOwnProperty('isLogged')); // false


const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "Ankit"
}

// course[courseInstructor]

// Object Destructuring

// const {courseInstructor} = course;
const {courseInstructor: instructor} = course;

// console.log(courseInstructor); // Ankit
// console.log(instructor); // Ankit

