const todoService =require("./../services/todoService");

module.exports={
    getTodo:async (req,res)=>{
        const userId=req.body.userInfo.id;
        const projects=await todoService.getTodo(userId);
        res.send({error:0, projects:projects})
    },
    addTodo:async(req,res)=>{
        const user_id=req.body.userInfo.id;
        const projects=await todoService.addTodo({user_id, name:req.body.name});
        res.send({error:0, projects:projects})
    },
    updateTodo:async (req, res)=>{
        const user_id=req.body.userInfo.id;
        const projects=await todoService.updateTodo({user_id, name:req.body.name,id:req.body.id});
        res.send({error:0, projects:projects===true?"Updated":'not Updateed'})
    },
    deleteTodo:async(req, res)=>{
        const user_id=req.body.userInfo.id;
        const projects=await todoService.deleteTodo({user_id, id:req.body.id});
        res.send({error:0, projects:projects===true?"Deleted":'not Deleted'})
    }
}