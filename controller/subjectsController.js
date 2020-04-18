const express = require('express')
const {Subject} = require('../models')

class ControllerSubject {
    static getAll(request,respond){
        Subject.findAll()
        .then(subjects => {
            console.log(subjects)
            respond.render('subjects', {data:subjects})
        })
        .catch(err=>{
            respond.render('error',{error : err})
        })
    }
    static getId(request,respond){
        Subject.findAll({where : {id : request.params.id}})
        .then(find =>{
            console.log(find)
            respond.render('subjects', {data:find})
        })
        .catch(err=>{
            respond.render('error',{error : err})
        })
    }
}

module.exports = ControllerSubject