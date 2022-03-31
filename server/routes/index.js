import * as express from 'express';
import chirpsRouter from './chirps';

const router = express.Router();


// localhost:3000/api/chirps/
router.use("/chirps", chirpsRouter);

export default router;