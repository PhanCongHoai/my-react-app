// login.js
const express = require('express');
const sql = require('mssql');
require('dotenv').config();

const router = express.Router();

// Config DB
const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options: {
        encrypt: process.env.DB_ENCRYPT === 'true',
        trustServerCertificate: true
    }
};

// Route login
router.post('/', async (req, res) => {
    const { username, password } = req.body;
    try {
        const pool = await sql.connect(config);
        const result = await pool.request()
            .input('username', sql.NVarChar, username)
            .input('password', sql.NVarChar, password)
            .query('SELECT * FROM Users WHERE Username = @username AND Password = @password');

        if (result.recordset.length > 0) {
            res.json({ success: true, user: result.recordset[0] });
        } else {
            res.status(401).json({ success: false, message: 'Sai tài khoản hoặc mật khẩu' });
        }

    } catch (err) {
        res.status(500).json({ success: false, error: 'Lỗi server' });
    }
});

module.exports = router; // ✅ Cực kỳ quan trọng
