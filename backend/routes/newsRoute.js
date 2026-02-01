import express from 'express';
import { getbusiness, getSports, getTopHeadline } from '../controllers/newController.js';

const router=express.Router();

router.get('/top-headlines',getTopHeadline);
router.get('/sports',getSports);
router.get('/business',getbusiness);

export default router;