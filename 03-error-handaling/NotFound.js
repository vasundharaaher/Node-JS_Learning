const NotFound = (req, res) => {
    res.status(404).json('Not found from module');
};

module.exports = NotFound;