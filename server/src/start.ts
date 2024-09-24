import app from "./app";
import { BACKEND_PORT } from "./config";

async function start(){
	app.listen(BACKEND_PORT);
	console.log(`サーバー起動 ポート:${BACKEND_PORT}`);
}
start();
