const { Router } = require('express');
const StudentController = require('../controllers/students');
const studentsRouter = Router();

studentsRouter.get('/', StudentController.list);
studentsRouter.get('/add', StudentController.addForm);
studentsRouter.post('/add', StudentController.add);
studentsRouter.get('/:email', StudentController.getByEmail);
studentsRouter.get('/edit/:id', StudentController.editForm);
studentsRouter.post('/edit/:id', StudentController.edit);
studentsRouter.get('/delete/:id', StudentController.delete);

module.exports = studentsRouter;