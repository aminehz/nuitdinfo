const ve=require("../models/ChatBotMessage");
class ChatBotMessageController{
    constructor(){
      
    }
    createChatBotMessage(req,res){
        const {
            id ,
            message,
            isBotMessage,
            date
            
        }=req.body;
        ve.insertChatBotMessage(id,message,isBotMessage,date, (error,result)=>{ 
            if(error){
                res.status(500).json({error:"error"});
                return;
            }
            res.status(201).json({message:"felicitation",result});
        });
    }
    async getAllChatBotMessage(req, res) {
        try {
            const ChatBotMessage = await ve.getAllChatBotMessage();
            res.status(200).json(ChatBotMessage);
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    updateChatBotMessage(req,res){
        const id=req.params.id;
        const {
            message,
            isBotMessage,
            date
            
        }=req.body;
        ve.updateChatBotMessage(id,message, isBotMessage, date,(error,result)=>{
            if(error){
                res.status(500).json({error:"error"});
                return;
            }
            res.status(200).json({message:"felicitation",result});//201 created 200 ok
        });
    }
    deleteChatBotMessage(req,res){
        const id=req.params.id;
        
        ve.deleteChatBotMessage(id, (error,result)=>{
            if(error){
                res.status(500).json({error:"error"});
                return;
            }
            res.status(200).json({message:"felicitation",result});//201 created 200 ok
        });
    }
}
module.exports=ChatBotMessageController;