// lib/db.ts
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost', // データベースのホスト名
  user: 'root', // ユーザー名
  password: 'pino0202', // パスワード
  database: 'minecraft_wiki', // データベース名
});

export default pool;
