const request= require('request');
module.exports=request.defaults({
    forever: true,
    pool: {maxSockets: 10000000}
});