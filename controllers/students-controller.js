const {Student} = require('../models');

class StudentsController {
    static showStudents(req, res) {
        Student.findAll()
            .then(data => {
                let pesan = req.query.pesan
                let id = req.params.id
                res.render("students.ejs", {data, pesan, id})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static getAddForm(req, res) {
        let error = req.query.error
        res.render("add-students.ejs", {error})
    }

    static postAdd(req, res) {
        let fn = false;
        let ln = false;
        let eml = false;
        let bd = false;
        if (req.body.first_name === '' || req.body.first_name === undefined) {
            res.redirect('/students/add?error=First Name harus diisi')
        } else {
            fn = true
        }    
        
        if (req.body.last_name === '' || req.body.last_name === undefined) {
            res.redirect('/students/add?error=Last Name harus diisi')
        } else {
            ln = true
        }   
        
        if (req.body.email === '' || req.body.email === undefined) {
            res.redirect('/students/add?error=Email harus diisi')
        } else if (req.body.email) {
            if (req.body.email.includes('@')) {
                eml = true;
            } else {
                res.redirect('/students/add?error=Email harus ada character @')
            }
        }
    
        if (req.body.birth_date === '' || req.body.birth_date === undefined) {
            res.redirect('/students/add?error=Birth Date harus diisi')
        } else {
            bd = true
        } 

        if (fn && ln && eml && bd) {
            let queryBody = req.body
            Student.create({
                "first_name": queryBody.first_name,
                "last_name": queryBody.last_name,
                "email": queryBody.email,
                "gender": queryBody.gender,
                "birth_date": queryBody.birth_date
            })
            .then(data => {
                res.redirect(`/students?pesan=berhasil menambah data student dengan nama ${queryBody.first_name} ${queryBody.last_name}`)
            })
            .catch(err => {
                res.send(err)
            })
        }
        
    }

    static getEditForm(req, res) {
        let id = req.params.id
        Student.findByPk(id)
            .then(data => {
                let dataStudents = data.dataValues                
                res.render('edit-students.ejs', {id, dataStudents})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static postEdit(req, res) {
        let queryBody = req.body
        let id = req.params.id
        Student.update({
            "first_name": queryBody.first_name,
            "last_name": queryBody.last_name,
            "email": queryBody.email,
            "gender": queryBody.gender,
            "birth_date": queryBody.birth_date
        }, {returning: true, where: {id}})
        .then(data => {
            res.redirect(`/students?pesan=berhasil edit data student dengan id ${id}`)
        })
        .catch(err => {
            res.send()
        })
    }

    static delete(req, res) {
        let id = req.params.id
        Student.destroy({where: {id}})
            .then(data => {
                res.redirect(`/students?pesan=berhasil delete data student dengan id ${id}`)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static searchStudentsById(req, res) {
        Student.findAll()
            .then(data => {
                let dataById = []
                let queryBody = req.body.students_by_id
                let pesan = null
                let check = false
                for (let i in data) {
                    if (data[i].id == queryBody) {
                        dataById.push(data[i])
                        check = true
                    }
                }

                if (check == false) {
                    pesan = "Maaf data students dengan id " + queryBody + " tidak ada dalam database"
                    res.render("student-by-id.ejs", {dataById, queryBody, pesan})
                } else {
                    pesan = ''
                    res.render("student-by-id.ejs", {dataById, queryBody, pesan})
                }
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = StudentsController