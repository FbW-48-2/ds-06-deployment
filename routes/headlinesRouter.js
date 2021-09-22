import express from "express";
const router = express.Router();

import {
  getData
} from '../controllers/headlinesControler.js';

router.route('/').get(getData)

export default router; // the router object is shared
