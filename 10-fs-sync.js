const  {readFileSync,writeFileSync}= require('fs');

console.log("start")
const first =readFileSync('./content/first.txt','utf8')
const second =readFileSync('./content/second.txt','utf8')

writeFileSync(
    './content/result-sunc.txt',
    `Here is the result : ${first},${second}`,
    {flag :'a'}
)
console.log("Done the Task")
console.log("Starting the next task")
