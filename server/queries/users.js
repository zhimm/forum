const Joi = require('@hapi/joi');
const db = require('../db/index')
 
const schema = Joi.object().keys({
    display_name: Joi.string().required(),
    email: Joi.string().email(),
    google_id: Joi.string().required(),
    img_url: Joi.string().uri({
        scheme:[
            /https/
        ]
    }),
    role_id: Joi.number().integer()
}).with('username', 'birthyear').without('password', 'access_token');
 

 
Joi.validate({ username: 'abc', birthyear: 1994 }, schema, function (err, value) { });  // err === null -> valid



module.exports = {
    findByEmail(email){
        return db('users').where('email', email).first()
    },
    update(id, user){
        return db('users').where('id', id).update(user)
    },
    insert(user){
        const result = Joi.validate(user , schema);
        if (result.error === null){
            return db('users').insert(user)
        }else{ 
            return Promise.reject(result.error)
        }


    }

}
