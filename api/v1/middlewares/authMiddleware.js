const Joi = require("joi");
const crypto=require("./../helpers/crypto")

const register=Joi.object({
    email:Joi.string().required(),
    password:Joi.string().required(),
    name:Joi.string().required()
})
const login=Joi.object({
    email:Joi.string().required(),
    password:Joi.string().required()
})
const token=Joi.object({
    token:Joi.string().required()
})
module.exports={
    validRegister:(req,res, next)=>{
        const value=register.validate(req.body)
        if(value.error){
            res.json({
                success:false,
                error:value.error.details[0].message
            })
        }else{
            let password =  crypto.encode(req.body.password,  process.env.PASSWORDKEY)
            delete req.body.password
            req.body.pwd=password
            next();
        }
        
    },
    verifyUser:(req,res, next)=>{
        const value=token.validate({token:req.headers.token})
        if(value.error){
            res.json({
                success:false,
                error:"User not authorized"
            })
        }else{
            let usersData =  JSON.parse(crypto.decode(req.headers.token,  process.env.TOKEN))
            if(usersData.error==1){
                res.json({
                    success:false,
                    error:"User not authorizedd"
                })
            }else{
                req.body.userInfo=JSON.parse(usersData.data)
                next();
            }
        }
    },
    login:(req,res, next)=>{
        const value=login.validate(req.body)
        if(value.error){
            res.json({
                success:false,
                error:value.error.details[0].message,
            })
        }else{
            let password =  crypto.encode(req.body.password,  process.env.PASSWORDKEY)
            delete req.body.password
            req.body.pwd=password
            next();
        }
    }
}