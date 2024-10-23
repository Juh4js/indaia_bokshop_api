//Insere a conexão com o banco de dados dentro do modelo
const conexao = require('../database/connection');

//Cria uma função assíncrona para modelo
//Função de autenticação requer usuário e senha
async function autenticaUsuario(usuario,senha){
    //Utiliza estrutura de decisão try..catch para tentar
    //A conexão com o banco de dados e execução da query
    try{

        //Executa a query e armazena a resposta em uma constante
        const [exec] = await conexao.query(`
                select 
                    id_usuario
                from tb_usuario
                where login = ? and senha = ?
            `,[usuario,senha])
        //retorna a resposta
        return exec;

    }catch(erro){
        //Caso haja algum erro, coloca dentro da variável erro
        //e usa a função return para retornar para o usuário
        return erro;
    }

}

module.exports = {
    autenticaUsuario
}