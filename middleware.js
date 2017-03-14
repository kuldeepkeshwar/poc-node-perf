const client= require('./cassandra-client');
const request= require('./http-client');
let count=1;
const writeToDB=(result)=> client.execute("INSERT into test (id, result) VALUES(" + count++ + ",'" + result + "')");
const url='https://thunderbolt-dev.paytm.com/thunderbolt/v1/bankServices';
const errorHandler=(res)=>res.statusCode=500 && res.end();
module.exports=(req,res)=>request({url: url}, (e, resp)=> (e)? errorHandler(res):writeToDB(resp.body).then(()=>res.end('ok')).catch((err)=>  errorHandler(res)));
