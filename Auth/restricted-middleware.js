module.exports = function restriction(req, res, next) {
    res.status(401).json({message: "You shall not pass!" });
};