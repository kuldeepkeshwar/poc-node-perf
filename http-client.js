const request= require('request');
module.exports=request.defaults({
    forever: true,
    pool: {maxSockets: 65000}
});