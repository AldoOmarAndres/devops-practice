import { Request, Response } from 'express';
import pg from 'pg';

export const pool = new pg.Pool({
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    host: process.env.DB_HOST || 'database',
    port: Number(process.env.DB_PORT) || 5432,
    database: process.env.DB_NAME || 'tododb',
});

export const getTasks = async (req:Request, res:Response) => {
    try {
        const result = await pool.query('SELECT * FROM tasks ORDER BY id ASC');
        res.json(result.rows);
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

export const createTask = async (req:Request, res:Response) => {
    const { description } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO tasks (description) VALUES ($1) RETURNING *',
            [description]
        );
        res.json(result.rows[0]);
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

export const updateTaskStatus = async (req:Request, res:Response) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
        const result = await pool.query(
            'UPDATE tasks SET status = $1 WHERE id = $2 RETURNING *',
            [status, id]
        );
        res.json(result.rows[0]);
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};