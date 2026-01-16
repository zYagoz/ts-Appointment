import express from 'express';

export const router = express.Router();


// Rotas
router.get('/appointments',); //Listar suas consultas
router.post('/appointments',); //Marcar consulta
router.delete('/appointments/:id',); //Desmarcar (cancelar) consulta
router.put('/appointments/:id',); //Remarcar consulta