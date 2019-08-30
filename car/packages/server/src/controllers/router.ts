import * as express from 'express';
import { 
    CarController_create_post,
    CarController_get_get,
    CarController_getAll_get,
    CarController_update_put,
    CarController_delete_delete } from './controllers'
export default express.Router()
.post('/car/create', CarController_create_post)
.get('/car/get/:id', CarController_get_get)
.get('/car/getAll', CarController_getAll_get)
.put('/car/update', CarController_update_put)
.delete('/car/delete', CarController_delete_delete)
