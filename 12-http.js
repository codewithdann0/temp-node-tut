const http =require('http');



const server = http.createServer((req,res)=>{

  if(req.url === '/'){
    res.end('My home page')
}
  else if(req.url === '/about'){

    res.end('The About page')
  }
else{
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
}

})
    
    //res.write()
    



server.listen(5004)