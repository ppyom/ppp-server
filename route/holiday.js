import express from 'express';
import {
  get24Divisions,
  getAnniversary,
  getHolidays,
  getRestDays,
  getSundryDays,
} from '../controller/holiday.js';

const router = express.Router();

// 국경일
router.get('/holiday', getHolidays);
// 공휴일
router.get('/rest', getRestDays);
// 기념일
router.get('/anniversary', getAnniversary);
// 24절기
router.get('/24-divisions', get24Divisions);
// 잡절
router.get('/sundry-day', getSundryDays);

export default router;
