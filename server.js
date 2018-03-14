import config from './config';
import express from 'express';
import apiRouter from './api';

const server = express();  

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('index', {
        content: 'Yo <em>M</em>'
    });
})

server.use(express.static('public'));
server.use('/api', apiRouter);

server.listen(config.port, () => {
    console.log('Express is on port: ', config.port);
});
