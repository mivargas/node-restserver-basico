
const { request, response } = require('express');

class Users {

    constructor() {

    }


    usersGet() {
        return (req= request, res = response) => {
            const params = req.query;

            res.status(200).json({
                msj: 'GET - controller',
                params
            });
        }
    }

    usersPost() {

        return (req, res = response) => {
            //const body = req.body;
            const {nombre, edad} = req.body;
            res.status(201).json({
                msj: 'POST - controller',
                nombre,
                edad
            });
        }
    }


    usersPut() {
        
        return (req, res = response) => {
            const { id } = req.params
            res.json({
                msj: 'PUT - controller'
            });
        }
    }


    usersDelete() {
        
        return (req, res = response) => {
            res.json({
                msj: 'DELETE - controller'
            });
        }
    }

    usersPatch() {
        
        return (req, res = response) => {
            res.json({
                msj: 'PATCH - controller'
            });
        }
    }


}



module.exports = Users;