import dotenv from 'dotenv';
dotenv.config();
// const mysql = require('mysql2');
import pg from 'pg';
const { Pool } = pg;
const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    // host: process.env.PG_HOST,
    host: 'localhost',
    database: process.env.DB_NAME,
    port: 5432
});
const connectionToDB = async () => {
    try {
        await pool.connect();
        // const res = await pool.query('SELECT $1::text as connected', ['Connection to postgres successful!']);
        //console.log(res.rows[0].connected);
        console.log('Connect to the database');
    }
    catch (error) {
        // await pool.end();
        console.error('Error connecting to the database');
        process.exit(1);
    }
};
export { pool, connectionToDB };
