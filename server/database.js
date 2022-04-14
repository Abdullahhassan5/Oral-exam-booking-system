var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('DataBase Connected')
        console.log('Session table.')
        db.run(`CREATE TABLE session (
            se_id INTEGER PRIMARY KEY AUTOINCREMENT, 
            e_id Integer,
            time Integer,
            date Text ,
            duration Integer
            )`,

        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                // var insert = 'INSERT INTO  session (se_id, e_id, time , date , duration) VALUES (?,?,?,?,?)'
                // db.run(insert, ['1',"1","2020-10-05T15:00:00.000Z" , "2020-10-05" ,"180"])
                // db.run(insert, ['2',"1","2020-10-05T15:00:00.000Z" ,  "2020-10-05" ,"180"])
                // db.run(insert, ['3',"2","2020-10-05T15:00:00.000Z", "2020-10-05" ,"180"])
            }
        });  
}
});
module.exports = db
