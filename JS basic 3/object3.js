const course={
    courseName:"JS course",
    price:999,
    teacher:"hitesh"
};
console.log(course.price);//way1 

// way2
// destructure uuse in react
const {courseName:n}=course;
console.log(n);


//JSON
// {//not object
//     //string: string
//     "courseName":"js learn with hitesg",
//     "price":"999",
//     "teacher":"hitesh"
// }
//array type json
// [
//     {},
//     {},
//     {},
//     {},
// ]