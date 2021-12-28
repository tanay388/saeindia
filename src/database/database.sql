CREATE DATABASE sae_db;



DROP TABLE contact_us;
DROP TABLE blog;
DROP TABLE alumni;



CREATE TABLE IF NOT EXISTS contact_us (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    phone VARCHAR(10) NOT NULL,
    email VARCHAR(50),
    is_student BOOL NOT NULL,
    time TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    case_closed BOOL DEFAULT FALSE
    );




CREATE TABLE IF NOT EXISTS blog (
    id SERIAL NOT NULL PRIMARY KEY, 
    title TEXT NOT NULL, 
    content TEXT NOT NULL, 
    author VARCHAR(50) NOT NULL, 
    time TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );




CREATE TABLE IF NOT EXISTS alumni (
    id SERIAL NOT NULL PRIMARY KEY, 
    name VARCHAR(50) NOT NULL, 
    current_job TEXT , 
    phone VARCHAR(10), 
    email VARCHAR(50), 
    passing_year TEXT NOT NULL 
    );


