const db=require("@models/sqllite")

module.exports={
    addProject:async (data)=>{       
        return new Promise((resolve, reject) => {
            db.serialize(() => {                
                db.all('INSERT INTO project(name,user_id) VALUES(?,?)', [data.name,data.user_id], (err,rows) => {
                    if (err)resolve(err);
                    resolve(true);
                });
            });
        });
    },
    getProject:async (userId)=>{
        return new Promise((resolve, reject) => {
            db.serialize(() => {                
                db.all('SELECT * FROM project WHERE user_id='+userId, [], (err,rows) => {
                    if (err){
                        resolve(err)
                    }
                    resolve(rows);
                });
            });
        });
    },
    updateProject:async (data)=>{
        return new Promise((resolve, reject) => {
            db.serialize(() => {                
                db.all('UPDATE project SET name="'+data.name+'"WHERE id='+data.id, [], (err,rows) => {
                    if (err){
                        resolve(err)
                    }
                    resolve(true);
                });
            });
        });
    },
    deleteProject:async (data)=>{
        return new Promise((resolve, reject) => {
            db.serialize(() => {                
                db.all('DELETE FROM project WHERE id='+data.id +' and user_id='+data.user_id, [], (err,rows) => {
                    if (err){
                        resolve(err)
                    }
                    resolve(true);
                });
            });
        });
    }
}