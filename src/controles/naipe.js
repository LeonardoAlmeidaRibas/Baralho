const db = [];

const nextID = 1;

const modelo = (body, id = nextID++) => {
    if(body.cor != "" && body.nome != "" && body.cor != "" && body.nome != ""){
        return {
            id,
            nome: body.nome,
            cor: body.cor
        }
    }
};

const store = (body) => {
    const novo = model(body);

    if(novo) {
        db.push(novo);

        return 201;
    }
    return 400;
};

const index = () => db;

const show = (id) => db.find((el) => el.id == id)

const update = (id, body) => {
    
}
