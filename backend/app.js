import express from 'express'
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename= fileURLToPath(import.meta.url);
const __dirname= path.dirname (__filename);

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../frontend')));
app.use('/users', userRoutes);
app.listen(3000, () => {
console.log('Servidor en http://localhost:3000');
});
