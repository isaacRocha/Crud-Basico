const router = require('express').Router();
const client = require('./config/conexao');


router.get('/', (req, res) => {
    let sql = 'select * from usuario';
    client.query(sql, (err, rows) => {
        if (err) {
            res.status(422).json(err)
        } else {
            res.status(200).json(rows.rows);
        }
    });

})

router.get('/:id', (req, res) => {
    let sql = `select * from usuario where idUsuario = ${req.params.id}`
    client.query(sql, (err, rows) => {
        if (err) {
            res.status(422).json(err)
        } else {
            res.status(200).json(rows.rows);
        }
    })

});


router.post('/', (req, res) => {
    const user = req.body;

    let sql = `insert into usuario(idusuario, nome, email, senha )
                    values( ${user.idusuario}, '${user.nome}', '${user.email}', '${user.senha}')`;
    client.query(sql, (err, rows) => {
        if (err) {
            res.status(422).json(err);
        } else {
            res.status(200).json({ status: 'cadastro feito' })
        }
    })

});

router.delete('/:id', (req, res) => {
    let sql = `delete from usuario where idusuario = ${req.params.id}`;
    client.query(sql, (err, rows) => {
        if (err) {
            res.status(422).json(err);
        } else {
            res.status(200).json({ status: 'usuario deletado' })
        }
    })
});


router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {nome, email, senha} = req.body;

    let sql = `update usuario set
            nome = '${nome}',
            email = '${email}',
            senha = '${senha}'
            where idusuario = '${id}'`

    client.query(sql, (err, rows) => {
        if (err) {
            res.status(422).json({
                messege : `${nome},${email},${senha},${id} `
            });
        } else {
            res.status(200).json({ status: 'usuario alterado' })
        }
    })
});
client.connect();

module.exports = router;