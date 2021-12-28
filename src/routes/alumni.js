const Router = require('express').Router()
const path = require('path')
const sql = require(path.join(__dirname, '../database/sql'))

const bodyParser = require('body-parser')
Router.use(bodyParser.json())

Router.get('/alumni', (req, res) => {
    sql('select * from alumni;')
        .then((result) => {
            res.status(200).json(result.rows)
        })
        .catch((err) => {
            res.status(501).json(err.message)
        })
})

//add
Router.post('/alumni', (req, res) => {
    const { name, current_job, phone, email, passing_year } = req.body
    sql(
        'INSERT INTO alumni (name, current_job, phone, email, passing_year) values ($1,$2,$3,$4,$5) RETURNING *',
        [name, current_job, phone, email, passing_year]
    )
        .then((result) => {
            res.status(200).json(result.rows[0])
        })
        .catch((err) => {
            res.status(501).json(err.message)
        })
})

//edit
Router.put('/alumni/:id', (req, res) => {
    const { id } = req.params

    const { name, current_job, phone, email, passing_year } = req.body
    sql(
        'UPDATE alumni name = $1, current_job=$2, phone=$3, email=$4, passing_year=$5 WHERE id =$6 RETURNING *',
        [name, current_job, phone, email, passing_year, id]
    )
        .then((result) => {
            res.status(200).json(result.rows[0])
        })
        .catch((err) => {
            res.status(501).json(err.message)
        })
})

//delete

Router.delete('/alumni/:id', (req, res) => {
    const { id } = req.params
    sql('DELETE FROM alumni WHERE id=$1 RETURNING *', [id])
        .then((result) => {
            res.status(200).json(result.rows[0])
        })
        .catch((err) => {
            res.status(501).json(err.message)
        })
})

module.exports = Router
