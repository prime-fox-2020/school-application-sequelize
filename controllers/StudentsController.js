const Student = require('../models').Student;

class StudentsController {
    static showList(req, res) {
        const msg = req.query.msg;
        Student.findAll()
        .then(list => res.render('students', {list, msg}))
        .catch(err => res.render('error', {msg: err}));
    }
    static searchByEmail(req, res) {
        const msg = req.query.msg;
        Student.findAll({where:{email:req.params.email}})
        .then(list => {
            if (list.length > 0) res.render('students', {list, msg});
            else res.render('students', {list, msg: `Student with email: ${req.params.email} not found!`});
        })
        .catch(err => res.render('error', {msg: err}));
    }

    static addGet(req, res) {
        const msg = req.query.msg;
        res.render('add_student', {msg, command:'add', list:null});
    }
    static addPost(req, res) {
        if (req.body.first_name && req.body.last_name && req.body.email && req.body.gender && req.body.birth_date) {
            Student.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,  
                email: req.body.email,
                gender: req.body.gender,
                birth_date: req.body.birth_date
            })
            .then(() => res.redirect('/students?msg=Student data successfully added to the list'))
            .catch(err => res.render('error', {msg:err}));
        } else {
            res.redirect('/students/add?msg=All information must be filled');
        }
    }

    static editGet(req, res) {
        const msg = req.query.msg;
        Student.findByPk(req.params.id)
        .then(list => res.render('edit_student', {list, command:'edit', msg}))
        .catch(err => res.render('error', {msg: err}));
    }
    static editPost(req, res) {
        if (req.body.first_name && req.body.last_name && req.body.email && req.body.gender && req.body.birth_date) {
            Student.update({
                first_name: req.body.first_name,
                last_name: req.body.last_name,  
                email: req.body.email,
                gender: req.body.gender,
                birth_date: req.body.birth_date
            }, {where:{id:req.params.id}})
            .then(() => res.redirect(`/students?msg=Successfully update student data with id ${req.params.id}`))
            .catch(() => res.render('error', {msg:err}));
        } else {
            res.redirect(`/students/edit/${req.params.id}?msg=All information must be filled`);
        }
    }

    static deleteGet(req, res) {
        Student.destroy({where:{id:req.params.id}})
        .then(() => res.redirect(`/students?msg=Delete student with id ${req.params.id} successful`))
        .catch(() => res.redirect(`/students?msg=Delete student with id ${req.params.id} failed`));
    }
}

module.exports = StudentsController;