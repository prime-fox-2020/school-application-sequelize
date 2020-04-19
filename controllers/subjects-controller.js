const {Subject} = require('../models');

class SubjectsController {
    // Menampilkan seluruh data Subjects dari database
    static showSubjects(req, res) {
        Subject.findAll({order: [['id', 'ASC']]})
        .then(data => {
            let pesan = req.query.pesan
            let id = req.params.id
            res.render("subjects.ejs", {data, pesan, id})
        })
        .catch(err => {
            res.send(err)
        })
    }

    // Routing / Menampilkan form add new subjects
    static getAddForm(req, res) {
        let error = req.query.error
        res.render("add-subjects.ejs", {error})
    }


    // Mengolah input user dari form add new student untuk kemudian 
    // ditambilkan kembali pada halaman utama students data
    static postAdd(req, res) {
        let sn = false;
        let nm = false;

        // Check & Validasi Subject Name
        if (req.body.subject_name === '' || req.body.subject_name === undefined) {
            res.redirect('/subjects/add?error=Subject Name harus diisi')
        } else {
            sn = true
        }
        
        if (req.body.nilai_minimum === '' || req.body.nilai_minimum == undefined) {
            res.redirect('/subjects/add?error=Nilai Minimum harus diisi')
        } else if (req.body.nilai_minimum) {
            if (req.body.nilai_minimum < 11 && req.body.nilai_minimum > 0) {
                nm = true
            } else {
                res.redirect('/subjects/add?error=Nilai Minimum tidak valid')
            }
        }
        
        // Check All validations
        if (sn && nm) {
            let queryBody = req.body
            Subject.create({
                "subject_name": queryBody.subject_name,
                "nilai_minimum": req.body.nilai_minimum
            })
            .then(data => {
                res.redirect(`/subjects?pesan=berhasil menambah data subject dengan nama ${queryBody.subject_name}`)
            })
            .catch(err => {
                res.send(err)
            })
        } 
    }

    // Routing atau menampilkan form edit subject
    static getEditForm(req, res) {
        let id = req.params.id
        Subject.findByPk(id)
        .then(data => {
            let dataSubjects = data.dataValues
            let error = req.query.error                
            res.render('edit-subjects.ejs', {id, dataSubjects, error})
        })
        .catch(err => {
            res.send(err)
        })
    }

    // Mengolah input user dari form edit students untuk kemudian 
    // ditambilkan kembali pada halaman utama students data dengan data yang telah
    // terupdate
    static postEdit(req, res) {
        let sn = false;
        let nm = false;

        // Check & validasi subject name
        if (req.body.subject_name === '' || req.body.subject_name === undefined) {
            res.redirect(`/subjects/edit/${req.params.id}?error=Subject Name harus diisi`)
        } else {
            sn = true
        } 
        
        if (req.body.nilai_minimum === '' || req.body.nilai_minimum === undefined) {
            res.redirect(`/subjects/edit/${req.params.id}?error=Nilai Minimum harus diisi`)
        } else if (req.body.nilai_minimum) {
            if (req.body.nilai_minimum < 11 && req.body.nilai_minimum > 0) {
                nm = true
            } else {
                res.redirect(`/subjects/edit/${req.params.id}?error=Nilai Minimum tidak valid`)
            }
        }
        
        // Check All validations
        if (sn && nm) {
            let queryBody = req.body
            let id = req.params.id
            Subject.update({
                "subject_name": queryBody.subject_name,
                "nilai_minimum": req.body.nilai_minimum
            }, {returning: true, where: {id}})
            .then(data => {
                res.redirect(`/subjects?pesan=berhasil edit data subject dengan id ${id}`)
            })
            .catch(err => {
                res.send(err)
            })
        }
    }

    // Delete data sesuai dengan id yang dipilih
    static delete(req, res) {
        let id = req.params.id
        Subject.destroy({where: {id}})
        .then(data => {
            res.redirect(`/subjects?pesan=berhasil delete data subject dengan id ${id}`)
        })
        .catch(err => {
            res.send(err)
        })
    }

    // Filter student berdasarkan id
    static searchSubjectByName(req, res) {
        Subject.findAll()
        .then(data => {
            let dataByName = []
            let queryBody = req.body.subject_by_name
            let pesan = null
            let check = false
            for (let i in data) {
                if (data[i].subject_name == queryBody) {
                    dataByName.push(data[i])
                    check = true
                }
            }

            if (check == false) {
                pesan = "Maaf data subject dengan nama " + queryBody + " tidak ada dalam database"
                res.render("subject-by-name.ejs", {dataByName, queryBody, pesan})
            } else {
                pesan = ''
                res.render("subject-by-name.ejs", {dataByName, queryBody, pesan})
            }
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = SubjectsController