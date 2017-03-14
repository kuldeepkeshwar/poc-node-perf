const request= require('request');
module.exports=request.defaults({
    forever: true,
    pool: {maxSockets: 1650000}
});