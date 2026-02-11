import { db } from '../config/db.js';
export const createUser = async (name) => {
const sql = 'INSERT INTO users (name) VALUES (?)';
const [result] = await db.execute(sql, [name]);
return result;

};