const client= require('./cassandra-client');
const request= require('./http-client');

let count=1;
const writeToDB=(result)=> client.execute("INSERT into test (id, result) VALUES(" + count++ + ",'" + result + "')");
const url='http://localhost:3004/count';
const errorHandler=(res)=>res.statusCode=500 && res.end();

module.exports=(req,res)=>request({url: url}, (e, resp)=> (e)? errorHandler(res):writeToDB(resp.body).then(()=>res.end('ok')).catch((err)=>  errorHandler(res)));
