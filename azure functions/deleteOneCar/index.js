var rp = require('request-promise-native');
module.exports = function (context, req) {
    if (!req.body) {
        context.res = {
            status: 400,
            body: "Porfavor ingrese info en el body"
        };
    }
    const puerto = process.env.conv_rest_server + 'car/delete';
    const item = req.body;

    var options = {
        method: 'DELETE',
        uri: puerto,
        body: item,
        json: true
    };

    rp(options)
        .then(function(){
            context.res = {
                body: "Carro eliminado"
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