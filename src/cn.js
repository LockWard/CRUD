import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'companydb',
    port: 3306
})