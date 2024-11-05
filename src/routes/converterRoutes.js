import express from 'express';
import { Request,Response } from 'node-fetch'; 
import ConverterController from '../controller/converterController.js';

const converterController = new ConverterController();
const converterRoutes = express.Router();

converterRoutes.get('/converteDolarParaReal', (req, res) => converterController.converteParaReal(req, res));

export default converterRoutes;