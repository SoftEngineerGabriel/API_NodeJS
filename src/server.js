const express = require("express");

const app = express();


/* usando route  params*/
app.get("/product/:id/:user", (request, response) => {
    const {id, user} = request.params;
    
    response.send(`
        Mensagem Id: ${id}.
        Para o user: ${user}.
    `);    
})
/*usando query params*/
app.get("/users", (request, response)=> {
    const { page, limit} = request.query;

    response.send(`Página: ${page}. Mostrar: ${limit}`)
})

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`)
)

