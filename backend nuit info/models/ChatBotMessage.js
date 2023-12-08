const te=require("../databaseConfig");
class ChatBotMessage{

    static createTable(){
        const createTableQuery=`
        create table if not exists ChatBotMessage(
        id int auto_increment primary key,
        message varchar(255),
        isBotMessage boolean,
        date Date
    )
    `;
    te.query(createTableQuery,(error)=>{
        if (error){
            console.error("error" + error);
            return ;
        }
        console.log("success");

    });
}

    static insertChatBotMessage(id,message,isBotMessage,date,callback){
        const insertChatBotMessageQuery = `insert into ChatBotMessage (
            id ,
        message,
        isBotMessage,
        date Date
        ) values (?,?,?,?)`;
        te.query(insertChatBotMessageQuery, [id,message,isBotMessage,date], (error, result) => {
            if (error) {
                console.error("error" + error);
                callback(error, null);
                return;
            }
            console.log("success");
            callback(null, result);
        });
    }
    static getAllChatBotMessage() {
        return new Promise((resolve, reject) => {
          const getAllChatBotMessageQuery = "select * from ChatBotMessage";
          te.query(getAllChatBotMessageQuery, (error, result) => {
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
      static updateChatBotMessage(id,message,isBotMessage,date, callback) {
        const updateChatBotMessageQuery = `update ChatBotMessage set 
                produitVendu=?,
                id=? ,
                message=?,
                isBotMessage=?,
                date Date=?
                where id=?
            `;
        te.query(
          updateChatBotMessageQuery,
          [id,message,isBotMessage,date,id],
          (error, result) => {
            if (error) {
              console.error("error" + error);
              callback(error, null);
              return;
            }
            if (result.affectedRows === 0) {
              console.log("no product");
              callback(null, null);
              return;
            }
            console.log("success");
            callback(null, result);
          }
        );
      }
      static deleteChatBotMessage(id, callback) {
        const deleteChatBotMessageQuery= `delete from  ChatBotMessage
                where id=?
            `;
        te.query(deleteChatBotMessageQuery, [id], (error, result) => {
          if (error) {
            console.error("error" + error);
            callback(error, null);
            return;
          }
          if (result.affectedRows === 0) {
            console.log("sorry");
            callback(null, null);
            return;
          }
          console.log("success");
          callback(null, result);
        });
      }
}
module.exports=ChatBotMessage;
