const client = require("../cache/connect")
const registrationschema = require("../db/schemas/registrationschema")
const connectionstatus = require("../globals/connections")


class Checker{

    async isemailalraedyexist (email){
        // check if key is already exist in redis
       let cacheison= connectionstatus.redis
       let isexist;
        if (cacheison){
            isexist=await  client.get(email)
        }
        else{
            isexist='error'
        }
        console.log(isexist)
       
        return new Promise((resolve,reject)=>{
            if(isexist==null || isexist=='error'){
                registrationschema.findOne({email:email},(err,data)=>{
                    if(err){
                        reject(err)
                    }else{
                        if(data){
                            resolve(true)
                        }else{
                            resolve(false)
                        }
                    }
                })
                
            }
            else{
                resolve(true,'from redis')
            }
          
        })
    }
}
let checker= new Checker()

module.exports = checker

/// e=>redis 