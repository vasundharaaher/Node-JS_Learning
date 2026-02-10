const ErrorHandle = (err, req, res, next) => {
    console.log('err =',err.message)
    res.status(500).json({error: err?.message || 'Somthing went wrong'});
}

module.exports = ErrorHandle;