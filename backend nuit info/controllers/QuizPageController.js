const vte=require("../models/QuizPage");
class QuizPageController{
    constructor(){
      
    }
    createQuizPage(req,res){
        const {
            id,
            title ,
        description ,
        question 
            
        }=req.body;
        vte.insertQuizPage(id,title,description,question, (error,result)=>{ 
            if(error){
                res.status(500).json({error:"error"});
                return;
            }
            res.status(201).json({message:"felicitation",result});
        });
    }
    async getAllQuizPage(req, res) {
        try {
            const vente = await vte.getAllQuizPage();
            res.status(200).json(vente);
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    updateQuizPage(req,res){
        const id=req.params.id;
        const {
            title ,
        description ,
        question 
            
        }=req.body;
        vte.updateQuizPage(id,title, description, question,(error,result)=>{
            if(error){
                res.status(500).json({error:"error"});
                return;
            }
            res.status(200).json({message:"felicitation",result});//201 created 200 ok
        });
    }
    deleteQuizPage(req,res){
        const id=req.params.id;
        
        vte.deleteQuizPage(id, (error,result)=>{
            if(error){
                res.status(500).json({error:"error"});
                return;
            }
            res.status(200).json({message:"felicitation",result});//201 created 200 ok
        });
    }
}
module.exports=QuizPageController;