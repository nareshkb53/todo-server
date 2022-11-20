const projectService =require("./../services/projectService");

module.exports={
    getProjects:async (req,res)=>{
        const userId=req.body.userInfo.id;
        const projects=await projectService.getProject(userId);
        res.send({error:0, projects:projects})
    },
    addProjects:async(req,res)=>{
        const user_id=req.body.userInfo.id;
        const projects=await projectService.addProject({user_id, name:req.body.name});
        res.send({error:0, projects:projects})
    },
    updateProjects:async (req, res)=>{
        const user_id=req.body.userInfo.id;
        const projects=await projectService.updateProject({user_id, name:req.body.name,id:req.body.id});
        res.send({error:0, projects:projects===true?"Updated":'not Updateed'})
    },
    deleteProjects:async(req, res)=>{
        const user_id=req.body.userInfo.id;
        const projects=await projectService.deleteProject({user_id, id:req.body.id});
        res.send({error:0, projects:projects===true?"Deleted":'not Deleted'})
    }
}