const express = require('express')
const cors = require('cors');
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3200;
        this.userPath = '/api/users';

        //Middelewares
        this.middlewares();

        //rutas de aplicacion
        this.routes();


    }

    middlewares(){
        //CORS
        this.app.use( cors() );

        //Lectrua y parseo del body
        this.app.use( express.json() );

        //directorio publico
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use(this.userPath, require('../routes/user'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`escuchando en el puerto ${this.port}`)
        })
    }

}

module.exports = Server;
