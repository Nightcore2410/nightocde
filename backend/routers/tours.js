
import express from 'express'
import { createTour,deleteTour,getAllTour,getFeaturedTour,getSingleTour,getTourBySearch,getTourCount,updateTour } from '../controllers/tourController.js';
import { verifyAdmin } from '../controllers/utils/verifyToken.js';
const router = express.Router();
//tao tour moi
router.post('/',verifyAdmin,createTour);
//update tour moi
router.put('/:id',verifyAdmin, updateTour);
//xoa tour 
router.delete('/:id',verifyAdmin,deleteTour);
//get single tour
router.get('/:id',getSingleTour);
//get all tour
router.get('/',getAllTour);
//nhận tour du lịch bằng cách tìm kiếm
router.get("/search/getTourBySearch",getTourBySearch);
// tour du lịch nổi bật
router.get("/search/getFeaturedTour",getFeaturedTour);
//nhận số lượng tour du lịch
router.get("/search/getTourCount", getTourCount);
export default router;
