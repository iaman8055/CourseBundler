import express from 'express';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import ErrorMiddleware from './middlewares/error.js';
import course from './Routes/courseRoutes.js';
import user from './Routes/userRoutes.js';
import payment from './Routes/paymentRoutes.js'
import other from './Routes/otherRoutes.js'
const app = express();
config({
    path: './config/config.env'
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/api/v1', course);
app.use('/api/v1', user);
app.use('/api/v1', payment);
app.use('api/v1',other)
// Error Middleware
app.use(ErrorMiddleware);

export default app;
