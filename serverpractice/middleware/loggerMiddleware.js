module.exports = function(req, res, next) {
    console.log("Middleware");
    //Passes control to next middleware/function
    //if not called nothing will happen
    next();
}