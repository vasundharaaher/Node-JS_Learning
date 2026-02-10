const Logger = (req,res, next) =>{
    // incoming request
    console.log('The URL from Logger :',req.url);
    next();
};

module.exports = Logger;