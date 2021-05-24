import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.send({ result: 'this will contain current weather' }));

export default router;
