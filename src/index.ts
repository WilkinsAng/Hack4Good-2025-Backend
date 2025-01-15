import express from 'express';
import publicRouter from './routes/public.routes';
import privateRouter from './routes/user.routes';

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// app.use('/', auth_thing_here, privateRouter);
// app.use('/', auth_thing_here, adminRouter);
app.use('/', publicRouter);
