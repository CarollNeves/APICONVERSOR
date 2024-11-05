import express from 'express';
import cors from 'cors';
import converterRoutes from './routes/converterRoutes.js';

const app = express();

const corsOptions = {
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(converterRoutes);

const port = process.env.PORT || 5051;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});