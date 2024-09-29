import express from 'express'
import { add_address_controller, get_addresses_controller } from '../controllers/addressController.js';

const addressRouter = express.Router();

addressRouter.post('/add_address', add_address_controller)
addressRouter.get('/get_addresses/:userId', get_addresses_controller);

export default addressRouter