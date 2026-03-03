import express from 'express';
// import z from 'zod';
import notfound from '#middlewares/notFound.middleware';
import requestLogger from '#middlewares/request-logger.middleware';
import { numberSchema } from '#validation/common.validation';
import PI from '#constants/constant';
import errorHandlerMiddleware from '#middlewares/error-handler.middleware';
import authRouter from '#routers/auth.route';
import blogRouter from '#routers/blog.route';
// console.log(PI);

const app = express();

// let abcd = 'test';

app.use(notfound);
app.use(errorHandlerMiddleware);

app.use(express.json());
app.use(requestLogger);
// app.use(authRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/app', blogRouter);

const PORT = process.env.PORT;

// parsing port from that schema
// const portNumber =  numberSchema.parse(PORT);
// error not show
const portNumber = numberSchema.safeParse(PORT);

if (portNumber.error) {
        console.log('Server has not been started due to port issue');
        process.exit(1);
}

// listening port locally
app.listen(PORT, () => {
        console.log(`Server started at http://localhost:${portNumber.data}`);
});
