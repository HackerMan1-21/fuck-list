import { Database } from "sqlite3";

const db = new Database("data.db");
const st = db.prepare(`SELECT * FROM types_mst`);
st.all([],(err,res)=>{
	console.log(res);
});