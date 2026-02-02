import express from 'express';
import { getbusiness, getSports, gettechnology, getTopHeadline } from '../controllers/newController.js';

const router=express.Router();

router.get('/top-headlines',getTopHeadline);
router.get('/sports',getSports);
router.get('/business',getbusiness);
router.get('/technology',gettechnology);

export default router;