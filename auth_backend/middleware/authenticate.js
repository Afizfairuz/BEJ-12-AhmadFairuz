function authenticate(req, res, next) {
    const token = req.headers.authorization;
    if (token) {
        next();
    } else {
        req.status(401).send('Unathorized');
    }
}

module.exports = authenticate;