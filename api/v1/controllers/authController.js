const authService =require("./../services/authService")
const crypto=require("./../helpers/crypto")

module.exports={ 
    getData:(req,res)=>{
        console.log("data")
        res.send(req.body);
    },
    register: async (req,res)=>{
        const data= await authService.registerUser(req.body);
        if(data===true){
            res.send({error:0, message:'User Created'})
        }else{
            res.send({...data, message:'user alreday exists'})
        }
    },
    login:async (req,res)=>{
        const data= await authService.login(req.body);
        if(data){
            res.send({error:0, message:'Authorized', token:crypto.encode(JSON.stringify(data),  process.env.TOKEN),data})
        }else{
            res.send({error:1, message:'Not Authorized', ...req.body})
        }
    }
}