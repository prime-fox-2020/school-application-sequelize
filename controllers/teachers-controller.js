const {Teacher} = require('../models')

class TeachersController {
    // Menampilkan seluruh data dari database
    static showTeachers(req, res) {
        Teacher.findAll()
        .then(data => {
            let pesan = req.query.pesan
            let id = req.params.id
            res.render("teachers.ejs", {data, pesan, id})
        })
        .catch(err => {
            res.send(err)
        })
    }

    // Routing / Menampilkan form add new teacher
    static getAddForm(req, res) {
        let error = req.query.error
        res.render("add-teachers.ejs", {error})
    }

    // Mengolah input user dari form add new teacher untuk kemudian 
    // ditambilkan kembali pada halaman utama teachers data
    static postAdd(req, res) {
        let fn = false
        let ln = false
        let eml = false

        // Check & Validasi First Name
        if (req.body.first_name === '' || req.body.first_name === undefined) {
            res.redirect('/teachers/add?error=First Name harus diisi')
        } else {
            fn = true
        }   
        
        // Check & Validasi Last Name
        if (req.body.last_name === '' || req.body.last_name === undefined) {
            res.redirect('/teachers/add?error=Last Name harus diisi')
        } else {
            ln = true
        } 
        
        // Check & Validasi email
        if (req.body.email === '' || req.body.email === undefined) {
            res.redirect('/teachers/add?error=Email harus diisi')
        } else if (req.body.email) {
            if (req.body.email.includes('@')) {
                eml = true;
            } else {
                res.redirect('/teachers/add?error=Email harus ada character @')
            }
        }

        // Check All validations
        if (fn && ln && eml) {
            let queryBody = req.body
            Teacher.create({
                "first_name": queryBody.first_name,
                "last_name": queryBody.last_name,
                "email": queryBody.email,
                "gender": queryBody.gender
            })
            .then(data => {
                res.redirect(`/teachers?pesan=berhasil menambah data teacher dengan nama ${queryBody.first_name} ${queryBody.last_name}`)
            })
            .catch(err => {
                res.send(err)
            })
        }    
    }

    // Routing atau menampilkan form edit teacher
    static getEditForm(req, res) {
        let id = req.params.id
        Teacher.findByPk(id)
        .then(data => {
            let dataTeachers = data.dataValues
            let error = req.query.error
            res.render("edit-teachers.ejs", {id, dataTeachers, error})
        })
        .catch(err => {
            res.render(err)
        })
    }

    // Mengolah input user dari form edit teachers untuk kemudian 
    // ditambilkan kembali pada halaman utama teachers data dengan data yang telah
    // terupdate
    static postEdit(req, res) {
        let fn = false
        let ln = false
        let eml = false

        // Check & validasi first name
        if (req.body.first_name === '' || req.body.first_name === undefined) {
            res.redirect(`/students/edit/${req.params.id}?error=First Name harus diisi`)
        } else {
            fn = true
        }    

        // Check & validasi last name
        if (req.body.last_name === '' || req.body.last_name === undefined) {
            res.redirect(`/students/edit/${req.params.id}?error=Last Name harus diisi`)
        } else {
            ln = true
        }   

        // check & validasi email
        if (req.body.email === '' || req.body.email === undefined) {
            res.redirect(`/students/edit/${req.params.id}?error=Email harus diisi`)
        } else if (req.body.email) {
            if (req.body.email.includes('@')) {
                eml = true;
            } else {
                res.redirect(`/students/edit/${req.params.id}?error=Email harus ada character @`)
            }
        }

        if (fn && ln && eml) {
            let queryBody = req.body
            let id = req.params.id
            Teacher.update({
                "first_name": queryBody.first_name,
                "last_name": queryBody.last_name,
                "email": queryBody.email,
                "gender": queryBody.gender
            }, {returning: true, where: {id}})
            .then(data => {
                res.redirect(`/teachers?pesan=berhasil edit data teacher dengan id ${id}`)
            })
            .catch(err => {
                res.send(err)
            })
        }
    }

    // Delete data sesuai dengan id yang dipilih
    static delete(req, res) {
        let id = req.params.id
        Teacher.destroy({where: {id}})
        .then(data => {
            res.redirect(`/teachers?pesan=berhasil delete data teacher dengan id ${id}`)
        })
        .catch(err => {
            res.send(err)
        })
    }


    // Filter teacher berdasarkan email-nya
    static searchTeacherByEmail(req, res) {
        Teacher.findAll()
        .then(data => {
            let dataByEmail = []
            let queryBody = req.body.teacher_by_email
            let pesan = null
            let check = false
            for (let i in data) {
                if (data[i].id == queryBody) {
                    dataByEmail.push(data[i])
                    check = true
                }
            }

            if (check == false) {
                pesan = "Maaf data teachers dengan email " + queryBody + " tidak ada dalam database"
                res.render("teacher-by-email.ejs", {dataByEmail, queryBody, pesan})
            } else {
                pesan = ''
                res.render("teacher-by-email.ejs", {dataByEmail, queryBody, pesan})
            }
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = TeachersController