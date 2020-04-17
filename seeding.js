let pool = require('./connection')
let fs = require('fs')
let teachers = JSON.parse(fs.readFileSync('./teacher.json', 'utf8'))
let students = JSON.parse(fs.readFileSync('./students.json', 'utf8'))
let subjects = JSON.parse(fs.readFileSync('./subjects.json', 'utf8'))


let query = `INSERT INTO teachers (first_name, last_name, email, gender) VALUES`
for(let a = 0; a < teachers.length; a++){
    query += ` ('${teachers[a].first_name}', '${teachers[a].last_name}', '${teachers[a].email}', '${teachers[a].gender}')${a < teachers.length-1 ? ',' : ''}`
}

pool.query(query, (err, res)=>{

})

for(let a = 0; a < students.length; a++){
    pool.query(`INSERT INTO students (first_name, last_name, email, gender, birthdate)
    VALUES ('${students[a].first_name}', '${students[a].last_name}', '${students[a].email}', '${students[a].gender}', '${students[a].birthdate}')`,(err, res)=>{
        if(err) console.log(err)

        console.log('success2')
    })
}

for(let a = 0; a < subjects.length; a++){
    pool.query(`INSERT INTO subjects (subject_name)
    VALUES ('${subjects[a].subject_name}')`,(err, res)=>{
        if(err) console.log(err)

        console.log('success3')
    })
}
