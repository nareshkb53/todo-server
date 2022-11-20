const Joi = require("joi");

const project=Joi.object({
    name:Joi.string().required(),
    userInfo:Joi.object().allow()
})
const projectUpdate=Joi.object({
    name:Joi.string().required(),
    id:Joi.number().required(),
    userInfo:Joi.object().allow()
})
const projectDelete=Joi.object({
    id:Joi.number().required(),
    userInfo:Joi.object().allow()
})
module.exports={
    insertProject:(req,res, next)=>{
        const value=project.validate(req.body)
        if(value.error){
            res.json({
                success:false,
                error:value.error.details[0].message
            })
        }else{
            next();
        }
        
    },
    updateProject:(req,res, next)=>{
        const value=projectUpdate.validate(req.body)
        if(value.error){
            res.json({
                success:false,
                error:value.error.details[0].message
            })
        }else{
            next();
        }
        
    },
    deleteProject:(req,res, next)=>{
        const value=projectDelete.validate(req.body)
        if(value.error){
            res.json({
                success:false,
                error:value.error.details[0].message
            })
        }else{
            next();
        }
        
    },
}