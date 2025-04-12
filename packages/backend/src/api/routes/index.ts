import { Router } from 'express';
import referenceDataRoutes from './reference-data.routes';

const router = Router();

// Mount route groups
router.use('/reference', referenceDataRoutes);

// Health check route
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API is up and running',
    timestamp: new Date().toISOString()
  });
});

export default router;