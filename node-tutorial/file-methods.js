const { readFileSync, readFile, writeFileSync, writeFile } = require("fs")


// 1. Sync Approach
//read a file
const first = readFileSync("./content/hello.txt", 'utf8');
console.log(first)
//write a file
writeFileSync("./content/subfolder/hello.txt", `Here is the text written : ${first}`)
//Append to a file
writeFileSync("./content/subfolder/hello.txt", `Here is the text written : ${first}`, {flag: 'a'})


// 2. Async Approach
readFile('./content/first.txt', 'utf8', (err, result)=>{
	if (err) {
		console.log(err)
		return
	}
	const text = result;
	readFile('./content/first.txt', 'utf8', (err, result)=>{
		if(err){
			console.log(err)
			return  
		}
		const second = result;
		writeFile("./content/new.txt", `New Text: ${second}`)
	})
})