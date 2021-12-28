const  Router  = require('express').Router();
const path = require('path')
const sql = require(path.join(__dirname,'../database/sql'))

const bodyParser = require('body-parser')
Router.use(bodyParser.json())
// insert a messages
Router.post('/contact', (req, res) => {
    const { name, description, phone, email, is_student } = req.body
    sql(
        'INSERT INTO contact_us (name,description,phone,email,is_student) values ($1,$2,$3,$4,$5) RETURNING *',
        [name, description, phone, email, is_student]
    )
        .then((result) => {
            res.status(200).json(result.rows[0])
        })
        .catch((err) => {
            res.status(501).json(err.message)
        })
})


//delete a messages//
Router.delete('/contact/:id', (req, res) => {
    const { id } = req.params
    if (id === undefined) {
        console.log('srhsfhnsf')
        sql('DELETE FROM contact_us RETURNING *', [id])
            .then((result) => {
                res.status(200).json(result.rows[0])
            })
            .catch((err) => {
                res.status(501).json(err.message)
            })
    } else {
        sql('DELETE FROM contact_us WHERE id=$1 RETURNING *', [id])
            .then((result) => {
                res.status(200).json(result.rows)
            })
            .catch((err) => {
                res.status(501).json(err.message)
            })
    }
})

//get all messages
Router.get('/contact', (req, res) => {
    sql('select * from contact_us;')
        .then((result) => {
            res.status(200).json(result.rows)
        })
        .catch((err) => {
            res.status(501).json(err.message)
        })
})

module.exports = Router;