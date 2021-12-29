const Router = require('express').Router()
const path = require('path')
const sql = require(path.join(__dirname, '../database/sql'))

const bodyParser = require('body-parser')
Router.use(bodyParser.json())

Router.get('/post_bearer', (req, res) => {
    sql('select * from post_bearer;')
        .then((result) => {
            res.status(200).json(result.rows)
        })
        .catch((err) => {
            res.status(501).json(err.message)
        })
})

//add
Router.post('/post_bearer', (req, res) => {
    const { name, post, year } = req.body
    sql(
        'INSERT INTO post_bearer (name, post, year) values ($1,$2,$3) RETURNING *',
        [name, post, year]
    )
        .then((result) => {
            res.status(200).json(result.rows[0])
        })
        .catch((err) => {
            res.status(501).json(err.message)
        })
})

//edit
Router.put('/post_bearer/:id', (req, res) => {
    const { id } = req.params

    const { name, post, year } = req.body
    sql(
        'UPDATE post_bearer name = $1, post=$2, year=$3 WHERE id =$4 RETURNING *',
        [name, post, year, id]
    )
        .then((result) => {
            res.status(200).json(result.rows[0])
        })
        .catch((err) => {
            res.status(501).json(err.message)
        })
})

//delete

Router.delete('/post_bearer/:id', (req, res) => {
    const { id } = req.params
    sql('DELETE FROM post_bearer WHERE id=$1 RETURNING *', [id])
        .then((result) => {
            res.status(200).json(result.rows[0])
        })
        .catch((err) => {
            res.status(501).json(err.message)
        })
})

module.exports = Router

  