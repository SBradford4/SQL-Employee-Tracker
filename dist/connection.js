import pg from 'pg';
const { Pool } = pg;
import 'dotenv/config';
const pool = new Pool({
    host: process.env.PG_HOST,
    port: 5432,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
const connectionToDB = async () => {
    try {
        await pool.connect();
        const res = await pool.query('SELECT $1::text as connected', ['Connection to postgres successful!']);
        console.log(res.rows[0].connected);
    }
    catch (error) {
        await pool.end();
    }
};
export { pool, connectionToDB };
