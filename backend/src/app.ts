import express from 'express';
import taskRoutes from './routes/todoRoutes';
import cors from 'cors';

const app = express();

// Middlewares
app.use(cors())
app.use(express.json());

app.use('/api', taskRoutes);

const PORT = Number(process.env.PORT) || 4000;
app.listen(PORT, () => {
  console.log('Server is listening on port', PORT);
});

export default app;