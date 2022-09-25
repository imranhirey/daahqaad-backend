const bcrypt = require('bcryptjs');

class Password{
    encryptPassword(password){
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    }
    comparePassword(password, hash){
        return bcrypt.compareSync(password, hash);
    }
}
let password= new Password()

module.exports = password;