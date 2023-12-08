const mysql=require("mysql2");
// connexion base de donnees
const connexion=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"climats"
});
//gestion d'erreur
connexion.connect((error)=>{
    if (error){
        console.error("connexion error"+ error.stack);
        return;
    }
    console.log("success");
});
module.exports=connexion;