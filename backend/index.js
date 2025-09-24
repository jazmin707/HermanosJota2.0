const http=require("http");
const { faker } = require("@faker-js/faker");
const server= http.createServer((req,res )=>{
    const randomName=faker.person.fullName()+"<";
    const randomEmail=faker.internet.email();

    res.writeHead(200, { "Content-Type":"application/json"});
    res.end(JSON.stringify({name:randomName,email:randomEmail}));
});

const PORT=3000;
server.listen(PORT, ()=>{
    console.log(`servidor escuchando en http://localhost:${PORT}`);
});