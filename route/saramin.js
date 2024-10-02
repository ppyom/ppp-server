import express from 'express';
import { getJobSearch } from '../controller/saramin.js';

const router = express.Router();

router.get('/', getJobSearch);

export default router;
