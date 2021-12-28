const { Pool } = require('pg')
let credentials={}
if (process.env.NODE_ENV === 'development') {
    credentials = {
        connectionString: process.env.LOCAL_DATABASE_URL,
    }
} else {
    credentials = {
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false },
    }
}

const sql = new Pool(credentials)

module.exports = (text, params) => sql.query(text, params)
