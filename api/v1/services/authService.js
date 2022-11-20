const db=require("@models/sqllite")

module.exports={
    registerUser:async (data)=>{       
        return new Promise((resolve, reject) => {
            db.serialize(() => {
                
                db.all('INSERT INTO users(name,email,pwd) VALUES(?,?,?)', [data.name,data.email,data.pwd], (err,rows) => {
                    if (err)resolve(err);
                    resolve(true);
                });
            });
        });
    },
    login:async (data)=>{
        return new Promise((resolve, reject) => {
            db.serialize(() => {                
                db.get('SELECT * FROM users WHERE email="'+data.email+'" and pwd="'+data.pwd+'"', [], (err,rows) => {
                    if (err){
                        resolve(err)
                    }
                    resolve(rows);
                });
            });
        });
    }
}