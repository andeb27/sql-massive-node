var massive = require('massive');
var connectionString = 'postgres://postgres:postgres@localhost/afternoon';
var massiveInstance = massive.connectSync({connectionString : connectionString})
module.exports = massiveInstance;