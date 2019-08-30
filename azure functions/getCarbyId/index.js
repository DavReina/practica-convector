var urlencode = require('urlencode');
var rp = require('request-promise-native');
module.exports = function (context, req) {
    const id = urlencode(req.query.id, 'gbk');
    const puerto = process.env.conv_rest_server + 'car/get';
    if (!id) {
        context.res = {
            status: 400,
            body: "Porfavor ingrese un ID en el query string d ela URL o en el body"
        };
    }
    var url = puerto +'/'+ id;
    rp(url)
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