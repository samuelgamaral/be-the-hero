const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * GET: Buscas/listar uma informação no back-end
 * POST: Criar informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros
  * 
  * Query params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  * Route params: Parâmetros utilizados para identificar recursos
  * Request body: Corpo da requisição, utilizado para criar ou alterar recursos
  * 
  */

 /**
  * Database
  * Drive: Select * from users
  * Query builder: table('users').select('*').where()
  */

app.listen(3333);