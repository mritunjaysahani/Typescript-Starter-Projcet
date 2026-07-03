import express from 'express';
import { serverconfig as serverConfig} from './config/config';
import v1Router from './routes/v1/index.router';
import v2Router from './routes/v2/index.router';
import { appErrorHandler, genericErrorHandler } from './middleware/error.middleware';
import logger from './config/logger.config';
import { attachCorrelationIdMiddleware } from './middleware/corelation.middleware';
const app = express();

app.use(express.json());

/**
 * Registering all the routers and their corresponding routes with out app server object.
 */

app.use(attachCorrelationIdMiddleware);
app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router); 


/**
 * Add the error handler middleware
 */

app.use(appErrorHandler);
app.use(genericErrorHandler);


app.listen(serverConfig.PORT, () => {
    logger.info(`Server is running on http://localhost:${serverConfig.PORT}`);
    logger.info(`Press Ctrl+C to stop the server.`);
});