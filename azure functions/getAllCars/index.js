var rp = require('request-promise-native');
module.exports = function (context) {
    const puerto = process.env.conv_rest_server + 'car/getAll';
    
    rp(puerto)
        .then(function(cuerpo){
            context.res = {
                body: cuerpo
            };
            context.done();
        })
        .catch(function(error){
            context.res = {
                status: 400,
                body: error
            };
            context.done();
        });
};