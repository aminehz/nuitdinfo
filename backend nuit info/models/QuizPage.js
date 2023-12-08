const db=require("../databaseConfig");
class QuizPage{

    static createTable(){
        const createTableQuery=`
        create table if not exists quiz(
        id int auto_increment primary key,
       title varchar(255),
       description varchar(255),
       question varchar(255)
    )
    `;
    db.query(createTableQuery,(error)=>{
        if (error){
            console.error("error" + error);
            return ;
        }
        console.log("success");

    });
}

    static insertQuizPage(id,title,description,question,callback){
        const insertQuizPageQuery = `insert into quiz (
            id,
            title ,
            description ,
            question 
        ) values (?,?,?,?)`;
        db.query(insertQuizPageQuery, [id,title,description,question], (error, result) => {
            if (error) {
                console.error("error" + error);
                callback(error, null);
                return;
            }
            console.log("success");
            callback(null, result);
        });
    }
    static getAllQuizPageQuery() {
        return new Promise((resolve, reject) => {
          const getAllQuizPageQuery = "select * from quiz";
          db.query(getAllQuizPageQuery, (error, result) => {
            if (error) {
              console.error("error" + error);
              reject(error);
              return;
            }
            console.log("success ");
            resolve(result);
          });
        });
      }
      static updateQuizPage(id,title,description,question, callback) {
        const updateQuizPageQuery = `update quiz set 
        title ,
        description ,
        question 
                where id=?
            `;
        db.query(
          updateQuizPageQuery,
          [title,description,question,id],
          (error, result) => {
            if (error) {
              console.error("error" + error);
              callback(error, null);
              return;
            }
            if (result.affectedRows === 0) {
              console.log("no quiz");
              callback(null, null);
              return;
            }
            console.log("success");
            callback(null, result);
          }
        );
      }
      static deleteQuizPage(id, callback) {
        const deleteQuizPageQuery= `delete from quiz 
                where id=?
            `;
        db.query(deleteQuizPageQuery, [id], (error, result) => {
          if (error) {
            console.error("error" + error);
            callback(error, null);
            return;
          }
          if (result.affectedRows === 0) {
            console.log("quiz");
            callback(null, null);
            return;
          }
          console.log("success");
          callback(null, result);
        });
      }
}
module.exports=QuizPage;
