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
    batch TEXT NOT NULL 
    );




CREATE TABLE IF NOT EXISTS members (
    id SERIAL NOT NULL PRIMARY KEY, 
    name VARCHAR(50) NOT NULL, 
    department VARCHAR(100) NOT NULL,
    batch VARCHAR(4) NOT NULL,
    current_job TEXT , 
    phone VARCHAR(10), 
    email VARCHAR(50), 
    facebook VARCHAR(50),
    linkedin VARCHAR(50),
    twitter VARCHAR(50),
    instagram VARCHAR(50),
    );



CREATE TABLE IF NOT EXISTS post_bearers (
    id SERIAL NOT NULL PRIMARY KEY, 
    name VARCHAR(50) NOT NULL, 
    post VARCHAR(100) NOT NULL,
    year VARCHAR(4) NOT NULL,
    );



CREATE TABLE IF NOT EXISTS induction_round1_2021 (
    id SERIAL NOT NULL PRIMARY KEY, 
    name VARCHAR(50) NOT NULL, 
    phone VARCHAR(10), 
    email VARCHAR(50), 
    description TEXT NOT NULL,
    time TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
