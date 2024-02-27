const app= require('express')();

const  PORT = 8080;

app.listen( 
    PORT,
    () => console.log(`server is running on ${PORT}`)
);

app.get('/getRequest', (req,res)=>{
    res.send("Conexión exitosa")
});

app.post('/postRequest', (req,res)=>{
    res.send("Karen Melina Cardona Arriozola, 20971, 5A")
});