const Router = require('express').Router()
const path = require('path')
const sql = require(path.join(__dirname, '../database/sql'))


const bodyParser = require('body-parser')
Router.use(bodyParser.json())


Router.post('/blog', (req, res) => {
    const { title, content, author } = req.body
    sql(
        'INSERT INTO blog (title,content,author) values ($1,$2,$3) RETURNING *',
        [title, content, author]
    )
        .then((result) => {
            res.status(200).json(result.rows[0])
        })
        .catch((err) => {
            res.status(501).json(err.message)
        })
})

// delete a blog

Router.delete('/blog/:id', (req, res) => {
    const { id } = req.params
    sql('DELETE FROM blog WHERE id=$1 RETURNING *', [id])
        .then((result) => {
            res.status(200).json(result.rows[0])
        })
        .catch((err) => {
            res.status(501).json(err.message)
        })
})

// update a blog
Router.put('/blog/:id', (req, res) => {
    const { id } = req.params
    const { title, content } = req.body
    sql('UPDATE blog SET title = $1 ,content = $2 WHERE id=$3 RETURNING *', [
        title,
        content,
        id,
    ])
        .then((result) => {
            res.status(200).json(result.rows[0])
        })
        .catch((err) => {
            res.status(501).json(err.message)
        })
})

// get all blogs

Router.get('/blog', (req, res) => {
    sql('select * from blog;')
        .then((result) => {
            res.status(200).json(result.rows)
        })
        .catch((err) => {
            res.status(501).json(err.message)
        })
})
module.exports = Router
