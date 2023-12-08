const dbcnx=require("../databaseConfig");
class User{
    
    static createTable(){
        const createTableQuery=`
    create table if not exists user(
        id int auto_increment primary key,
        name varchar(255),
        Email varchar(255),
        password varchar(255),
        role varchar(255)
       

    )
    `;
    dbcnx.query(createTableQuery,(error)=>{
        if (error){
            console.error("error" + error);
            return ;
        }
        console.log("success");
    });
}
static insertUser(id,name, Email,password, role,callback){
    const insertUserQuery=`insert into user(
        id,
        name,
        Email,
        password,
        role
    )values(?,?,?,?,?)`;

    dbcnx.query(insertUserQuery,[id,name, Email,password, role],(error,result)=>{
        if (error){
            console.error("error" + error);
                callback(error, null);
                return;
        }
        console.log("success");
            callback(null, result);
    });
}
static getAllUsers() {
    return new Promise((resolve, reject) => {
      const getAllUserQuery = "select * from user";
      dbcnx.query(getAllUserQuery, (error, result) => {
        if (error) {
          console.error("error" + error);
          reject(error);
          return;
        }
        console.log("success get users");
        resolve(result);
      });
    });
  }
  static updateUser(id,name, Email,password, role, callback) {
    const updateUserQuery = `update user set 
            name=?,
            Email=?,
            password=?,
            role
            where id=?
        `;
    dbcnx.query(
      updateUserQuery,
      [id,name, Email,password, role],
      (error, result) => {
        if (error) {
          console.error("error" + error);
          callback(error, null);
          return;
        }
        if (result.affectedRows === 0) {
          console.log("no user");
          callback(null, null);
          return;
        }
        console.log("success");
        callback(null, result);
      }
    );
  }
  static deleteUser(id, callback) {
    const deleteUserQuery = `delete from user 
            where id=?
        `;
    dbcnx.query(deleteUserQuery, [id], (error, result) => {
      if (error) {
        console.error("error" + error);
        callback(error, null);
        return;
      }
      if (result.affectedRows === 0) {
        console.log("no user");
        callback(null, null);
        return;
      }
      console.log("success");
      callback(null, result);
    });
  }
}
module.exports=User;