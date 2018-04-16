const router = require('express').Router();
const path = require('path');
class HomePageRouteHandler {
    static getRouter() {
        router.get('/', (req, res) => {
            res.sendFile('index.html', { root: path.join(__dirname, '../../public/views') });
        });
        return router;
    }
};
module.exports = HomePageRouteHandler;