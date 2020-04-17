const students = (require('./students.json'))
for (let i = 0; i < students.length; i++) {
  students[i].createdAt = new Date()
  students[i].updatedAt = new Date()
}
console.log(students)