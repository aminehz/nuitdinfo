

//importation dbconfig
const cnx = require("../databaseConfig");
class Solution {
  constructor() {
    //this.produitModel=new Produit();
  }
  static createTable() {
    const createTableQuery = `
        create table if not exists solution(
            id int auto_increment primary key,
            name varchar(255),
            description  varchar(255),
            Impact varchar(255)
        )
        `;
    cnx.query(createTableQuery, (error) => {
      if (error) {
        console.error("error" + error);
        return;
      }
      console.log("success");
    });
  }
  static insertSolution(id,name,description , Impact, callback) {
    const insertSolutionQuery = `insert into solution (
        id,
            name,
            description,
            Impact
        ) values (?,?,?,?)`;

    cnx.query(
      insertSolutionQuery,
      [id,name,description , Impact],
      (error, result) => {
        if (error) {
          console.error("error" + error);
          callback(error, null);
          return;
        }
        console.log("success");
        callback(null, result);
      }
    );
  }
  static getAllSolution() {
    return new Promise((resolve, reject) => {
      const getAllSolutionQuery = "select * from solution";
      cnx.query(getAllSolutionQuery, (error, result) => {
        if (error) {
          console.error("error" + error);
          reject(error);
          return;
        }
        console.log("success get solution");
        resolve(result);
      });
    });
  }
  static updateSolution(id,name,description , Impact, callback) {
    const updateSolutionQuery = `update solution set 
            name=?,
            description=?,
            Impact=?
            where id=?
        `;
    cnx.query(
      updateSolutionQuery,
      [name,description , Impact,id],
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
  static deleteSolution(id, callback) {
    const deleteSolutionQuery = `delete from solution  
            where id=?
        `;
    cnx.query(deleteSolutionQuery, [id], (error, result) => {
      if (error) {
        console.error("error" + error);
        callback(error, null);
        return;
      }
      if (result.affectedRows === 0) {
        console.log("no solution ");
        callback(null, null);
        return;
      }
      console.log("success");
      callback(null, result);
    });
  }
}

module.exports = Solution;
