import { Router } from 'express';
import UserRouter from './Users';
import ReportRouter from './Reports';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users', UserRouter);
router.use('/reports', ReportRouter)

// Export the base-router
export default router;
