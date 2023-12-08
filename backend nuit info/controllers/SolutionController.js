const prd=require("../models/Solution");
class SolutionController{
    constructor(){
       
    }
    createSolution(req,res){
        const {
            id,
            name,
            description,
            Impact
            
        }=req.body;
        prd.insertSolution(id, name, description, Impact, (error,result)=>{
            if(error){
                res.status(500).json({error:"error"});
                return;
            }
            res.status(201).json({message:"felicitation",result});
        });
    }
    async getAllSolution(req, res) {
        try {
            const solution = await prd.getAllSolution();
            res.status(200).json(solution);
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    updateSolution(req, res) {
        const id = req.params.id;
        const { name, description, Impact } = req.body;
    
        // Check if 'id' is a valid integer
        if (!Number.isInteger(id)) {
            return res.status(400).json({ error: "Invalid ID" });
        }
    
        prd.updateSolution(id, name, description, Impact, (error, result) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: "Internal Server Error" });
                return;
            }
    
            // Check if the 'id' exists in the database
            if (result.affectedRows === 0) {
                res.status(404).json({ error: "Solution not found" });
                return;
            }
    
            res.status(200).json({ message: "Update successful", result });
        });
    }
    
    deleteSolution(req,res){
        const id=req.params.id;
        
        prd.deleteSolution(id, (error,result)=>{
            if(error){
                res.status(500).json({error:"error"});
                return;
            }
            res.status(200).json({message:"felicitation",result});//201 created 200 ok
        });
    }

}
module.exports=SolutionController;