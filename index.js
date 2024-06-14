const express = require('express');

const app = express();
require('dotenv').config();

const authRoutes = require('./route/authRoute')

app.use(express.json());

const port = process.env.APP_PORT || 4000;

// app.get('/', (req, res) => {
//     res.status(200).json({
//         status: 'success',
//         message: 'API is working properly'
//     });
// });




app.use('*', (req,res,next) => {
    res.status(404).json({
        status: 'Fail',
        message: 'route not found',
    });
});

app.use('/api/v1/auth', authRoutes);

app.listen(port, ()=>{
    console.log(`server listening on port ${process.env.APP_PORT}`);
});