import express from 'express';
import taskRoutes from './routes/todoRoutes';
import cors from 'cors';

const app = express();

// Middlewares
app.use(cors())
app.use(express.json());

app.use('/api', taskRoutes);

app.listen(4000);
console.log('Server is listening on port', 4000);

export default app;