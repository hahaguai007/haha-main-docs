let students = [
    {name: 'Alice', age: 11},
    {name: 'Bob', age: 11},
    {name: 'Charlie', age: 12},
    {name: 'Dave', age: 12}
];

// 使用 reduce 方法根据 age 属性进行分组
const groupedStudents = students.reduce((groups, student) => {
    const age = student.age;
    if (!groups[age]) {
        groups[age] = [];
    }
    groups[age].push(student);
    return groups;
}, {});

console.log(groupedStudents);
students = [
    { name: 'Alice', age: 11 },
    { name: 'Bob', age: 12 },
    { name: 'Charlie', age: 13 },
    { name: 'Dave', age: 14 }
];
// 查询年龄为11和12岁的学生
const filteredStudents = students.filter(student => student.age === 11 || student.age === 12);
console.log(filteredStudents);

