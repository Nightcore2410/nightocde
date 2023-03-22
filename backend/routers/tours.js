
import express from 'express'
import { createTour,deleteTour,getAllTour,getSingleTour,updateTour } from '../controllers/tourController.js';
const router = express.Router();
//tao tour moi
router.post('/',createTour);
//update tour moi
router.put('/:id', updateTour);
//xoa tour 
router.delete('/:id',deleteTour);
//get single tour
router.get('/:id',getSingleTour);
//tao tour moi
router.get('/',getAllTour);

export default router;