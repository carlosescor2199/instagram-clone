import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const auth = {
    checkHeaders: (req, res, next) => {
        const token = req.headers['x-token']
        if(token){
            try {
                const {user} = jwt.verify(token, process.env.SECRET);
            } catch (e) {
                
            }
        }
    },

    getToken: ({_id}, SECRET) => {
        const token =  jwt.sign({user: _id}, SECRET, { expiresIn: '5d' })
        const resfreshToken = jwt.sign({user: _id}, SECRET, { expiresIn: '10m' })


        return {token, resfreshToken};
    },

    login: async (username, password, User, SECRET) => {

        const user = await User.findOne({username})
        if(!user){
            return {
                success: false,
                errors: [{path: 'username', message: 'El nombre de usuario no existe'}]
            }
        }
        const validPassword = await bcrypt.compare(password, user.password)
        if(!validPassword){
            return {
                success: false,
                errors: [{path: 'password', message: 'La contraseña es incorrecta'}]
            }
        }

        const {token, resfreshToken} = auth.getToken(user, SECRET)
        return {
            success: true,
            token,
            errors: []
        }
    }
}

export default auth;