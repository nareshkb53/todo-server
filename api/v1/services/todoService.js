const db=require("@models/sqllite")

module.exports={
    addTodo:async (data)=>{       
        return new Promise((resolve, reject) => {
            db.serialize(() => {                
                db.all('INSERT INTO todos(project_id, task, status, finish_date) VALUES(?,?, ?, ?)', [data.name,data.user_id], (err) => {
                    if (err)resolve(err);
                    resolve(true);
                });
            });
        });
    },
    getTodo:async (userId)=>{
        return new Promise((resolve, reject) => {
            db.serialize(() => {                
                db.all('SELECT * FROM todos WHERE project_id in ('+userId.join(", ")+')', [], (err,rows) => {
                    if (err){
                        resolve(err)
                    }
                    resolve(rows);
                });
            });
        });
    },
    updateTodo:async (data)=>{
        return new Promise((resolve, reject) => {
            db.serialize(() => {                
                db.all('UPDATE todos SET task="'+data.task+'", status="'+data.status+'" WHERE id='+data.id+ ' and project_id='+data.project_id, [], (err,rows) => {
                    if (err){
                        resolve(err)
                    }
                    resolve(true);
                });
            });
        });
    },
    deleteTodo:async (data)=>{
        return new Promise((resolve, reject) => {
            db.serialize(() => {                
                db.all('DELETE FROM todos WHERE id='+data.id+ ' and project_id='+data.project_id, [], (err,rows) => {
                    if (err){
                        resolve(err)
                    }
                    resolve(true);
                });
            });
        });
    }
}