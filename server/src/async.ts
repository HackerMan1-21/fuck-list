// プロミスとは何か
function hoge (t:number):Promise<number> {
	return new Promise(
		(resolve,reject) => {
			setTimeout(()=>{
				if( t !== 3) {
					resolve(10);
				}
				else {
					reject("error");
				}
			},t * 500);
		}
	);
}

(async () => {
	const aaaa = await hoge(5);
	console.log(aaaa);
	console.log("end");
})();


// aaaa.then((value)=>{
// 	console.log(value);
// }).catch((reason) => {
// 	console.error(reason);
// })




