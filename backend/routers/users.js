import express  from 'express';
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js';
const router = express.Router()
import { verifyAdmin, verifyUser } from '../controllers/utils/verifyToken.js';
//update User moi
router.put('/:id',verifyUser, updateUser);
//xoa User 
router.delete('/:id',verifyUser,deleteUser);
//get single User
router.get('/:id',verifyUser,getSingleUser);
//get all User
router.get('/',getAllUser);



export default router