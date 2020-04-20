import bcrypt from 'bcrypt'
import auth from '../../auth'

const formatErrors = (error, otherErrors) => {
    const errors = error.errors;
    let objErrors = []

    if(errors){
        Object.entries(errors).map(error => {
            const {path, message} = error[1];
            objErrors.push({path, message});
        })
        objErrors = objErrors.concat(otherErrors);
        return objErrors;
    }else if(otherErrors.length){
        return otherErrors;
    }

    const uknownError = {}
    switch(error.code){
        case 11000:
            uknownError.path = 'username'
            uknownError.message = 'El nombre de usuario o el email ya existe'
        break;
        default: 
            uknownError.path = 'Desconocido'
            uknownError.message = error.message
    }
    return [uknownError]
}

const Mutation = {
    login: async (parent, {username, password}, {models:{User}, SECRET}) => auth.login(username, password, User, SECRET),

    createUser: async (parent, {password, ...args}, {models}) => {
        // return models.User.create(args)
        let otherErrors = []
        try {
            if(password.length<8 || password.length>16){
                otherErrors.push({path: 'password', message: 'La contraseña debe tener entre 8 y 16 carácteres'})
            }
            const hashPassword = await bcrypt.hash(password, 10)
            if(otherErrors.length){
                throw otherErrors;
            }
            const user = await models.User.create({...args, password: hashPassword})
            return {
                success: user && user._id ? true : false,
                errors: []
            }
        } catch (error) {
            return {
                success: false,
                errors: formatErrors(error, otherErrors)
                
            };
        }
    },

    createPost: async (parent, args, {models, user}) => await models.Post.create({...args.post, by: user})
    
}

export default Mutation;