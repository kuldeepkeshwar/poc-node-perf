const cassandra = require('cassandra-driver');
const distance = cassandra.types.distance;
const options = {
   contactPoints: ['127.0.0.1'],keyspace: 'poc'//,
  //  pooling: {
  //     coreConnectionsPerHost: {
  //       [distance.local] : 100000,
  //       [distance.remote] : 100000
  //     }
  //  }
};
const client = new cassandra.Client(options);
client.connect((err,result)=>(err)?console.log(err):console.log('connected to db'));
module.exports=client;