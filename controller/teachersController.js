const express = require('express')
const {Teacher} = require('../models')

class ControllerTeacher {
    static getAll(request,respond){
        Teacher.findAll()
        .then(teachers => {
            // console.log(teacher)
            respond.render('teachers', {data:teachers})
        })
        .catch(err=>{
            respond.render('error',{error : err})
        })
    }
    static getId(request,respond){
        Teacher.findAll({where : {id : request.params.id}})
        .then(find =>{
            console.log(find)
            respond.render('teachers', {data:find})
        })
        .catch(err=>{
            respond.render('error',{error : err})
        })
    }
}

module.exports = ControllerTeacher