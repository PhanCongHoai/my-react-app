const sql = require('mssql');

// Thông tin kết nối
const config = {
    user: 'sa',
    password: '123',
    server: 'LAPTOP-UJN3LQH8', // hoặc IP hoặc tên máy chủ SQL
    database: 'Login',
    options: {
        encrypt: true, // Dùng nếu kết nối đến Azure
        trustServerCertificate: true // Cho local dev
    }
};

// Kết nối đến SQL Server
sql.connect(config)
    .then(pool => {
        console.log('✅ Kết nối SQL Server thành công!');
        return pool.request().query('SELECT TOP 5 * FROM Users'); // ví dụ
    })
    .then(result => {
        console.table(result.recordset); // Hiển thị kết quả
    })
    .catch(err => {
        console.error('❌ Lỗi kết nối:', err);
    });

module.exports = sql;
