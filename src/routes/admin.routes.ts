import express from 'express';

const adminRouter = express.Router();

adminRouter.get('/', (req, res) => {
    res.send('This is an admin route!');
});

adminRouter
    .route('/users')
    .get((req, res) => {
        res.send('Get ALL users');
    })
    .post((req, res) => {
        res.send('Create a user');
    });

adminRouter.put('/users/:id', (req, res) => {
    res.send('Update a user');
});

adminRouter.get('/voucher-requests', (req, res) => {
    res.send('Get ALL vouchers');
});

adminRouter.put('/voucher-requests', (req, res) => {
    res.send('Update a voucher');
});

export default adminRouter;
