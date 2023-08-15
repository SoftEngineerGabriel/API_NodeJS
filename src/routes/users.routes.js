const {Router} = require ("express"); //importando o Router diretamente do Express.

const usersRoutes = Router(); //inicializando o Router já importado na primeira linha.


usersRoutes.post("/", (request, response) => {
    const {name, email , password} = request.body;

    response.json({name, email, password});
});

module.exports = usersRoutes; //exportando para qualquer arquivo que precise.