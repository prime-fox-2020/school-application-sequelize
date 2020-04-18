const students = require('../models').Student;

class StudentController {
	static show(req, res) {
		students
			.findAll()
			.then((students) => {
				res.render('students.ejs', { students });
			})
			.catch((err) => {
				res.send(err);
			});
	}

	static cek(body) {
		let kotak = [];
		if (!body.first_name) {
			kotak.push('Nama depan harus Diisi');
		}
		if (!body.last_name) {
			kotak.push('Nama belakang harus diisi');
    }
     
    if(!body.email){
      kotak.push('email tidak boleh kosong ya')
    }
    
		if (body.email.indexOf('@') == -1 ) {
			kotak.push('Isi dengan email yang benar');
		}
		if (body.gender === '') {
			kotak.push('Kamu Cewek apa Cowok?');
		}
    
    if (
			body.birth_date[4] !== '-' ||
			body.birth_date[7] !== '-' ||
			(body.birth_date[5] == 1 && body.birth_date[6] == 3) ||
			(body.birth_date[8] == 3 && body.birth_date[9] == 2) ||
			body.birth_date.length !== 10 ||
			body.birth_date[5] > 1 ||
			body.birth_date[8] > 3
		) {
			kotak.push('Format nya harus YYY-MM-DD');
		}
		return kotak;
	}

	static getById(req, res) {
		students
			.findByPk(req.params.id)
			.then((students) => {
				console.log(students.dataValues);
				res.render('students.ejs', { students: [ students.dataValues ] });
			})
			.catch((err) => {
				res.send(err);
			});
	}

	static addGet(req, res) {
		const error = req.query.error;
		res.render('studentsAdd.ejs', { error });
	}

	static addPost(req, res) {
		const kotak = StudentController.cek(req.body);
		if (kotak.length > 0) {
			res.redirect(`/students/add?error=${kotak.join(',')}`);
		}

		students
			.create({
				first_name: req.body.first_name,
				last_name: req.body.last_name,
				email: req.body.email,
				gender: req.body.gender,
				birth_date: req.body.birth_date
			})
			.then((students) => {
				res.redirect('/students');
			})
			.catch((err) => {
				res.send(err);
			});
	}

	static editGet(req, res) {
		const error = req.query.error;
		students
			.findByPk(req.params.id)
			.then((students) => {
				res.render('studentsEdit.ejs', { students: students.dataValues, error });
			})
			.catch((err) => {
				res.send(err);
			});
	}

	static editPost(req, res) {
		const kotak = StudentController.cek(req.body);

		if (kotak.length > 0) {
			res.redirect(`/students/${req.params.id}/edit/?error=${kotak.join(',')}`);
		}

		students
			.update(
				{
					first_name: req.body.first_name,
					last_name: req.body.last_name,
					email: req.body.email,
					gender: req.body.gender,
					birth_date: req.body.birth_date
				},
				{
					where: {
						id: req.params.id
					}
				}
			)
			.then((students) => {
				res.redirect('/students');
			})
			.catch((err) => {
				res.send(err);
			});
	}
	static delete(req, res) {
		students
			.destroy({
				where: {
					id: req.params.id
				}
			})
			.then((students) => {
				res.redirect('/students');
			})
			.catch((err) => {
				res.send(err);
			});
  }
  

  static getByEmail(req,res){
    students.findAll({where:{
      email: req.params.email
    }})
   
    .then(students=>{
     console.log(students[0].dataValues)
      res.render('students.ejs', {students : [students[0].dataValues]})
    })
    .catch(err=>{
      res.send(err)
    })
  }
}

module.exports = StudentController;
