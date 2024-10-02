import express from 'express';
import { getRepositories } from '../controller/github.js';

const router = express.Router();

router.get('/repositories', getRepositories);

export default router;
