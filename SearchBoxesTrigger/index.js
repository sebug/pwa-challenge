module.exports = function (context, req) {
    context.log('searching for ' + req.query.city);
    context.res = {
	body: [
	    { description_en: "Postbox 1" }
	]
    };
    context.done();
};
