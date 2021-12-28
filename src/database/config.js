const path = require('path')
const sql = require(path.join(__dirname, './sql'))
;(settingcheck = async () => {
    if (!process.env.DATABASE_URL && !process.env.LOCAL_DATABASE_URL) {
        console.log(
            'You are running locally on your pc so you must provide a database url. See the setup guide.'
        )

        process.exit(1)
    }
    try {
        await sql('select * from contact_us')
    } catch (error) {
        await sql(
            `CREATE TABLE IF NOT EXISTS contact_us (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    phone VARCHAR(10) NOT NULL,
    email VARCHAR(50),
    is_student BOOL NOT NULL,
    time TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    case_closed BOOL DEFAULT FALSE
    );`
        )
    }

    try {
        await sql('select * from blog')
    } catch (error) {
        await sql(
            `CREATE TABLE IF NOT EXISTS blog (
    id SERIAL NOT NULL PRIMARY KEY, 
    title TEXT NOT NULL, 
    content TEXT NOT NULL, 
    author VARCHAR(50) NOT NULL, 
    time TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );`
        )
    }

    try {
        await sql('select * from alumni')
    } catch (error) {
        await sql(
            `CREATE TABLE IF NOT EXISTS alumni (
    id SERIAL NOT NULL PRIMARY KEY, 
    name VARCHAR(50) NOT NULL, 
    current_job TEXT , 
    phone VARCHAR(10), 
    email VARCHAR(50), 
    passing_year TEXT NOT NULL 
    );`
        )
    }
})()
