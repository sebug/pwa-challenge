module.exports = function (context, req) {
    context.log('searching for ' + req.query.city);
    context.res = {
	body: []
    };
    context.done();
};
