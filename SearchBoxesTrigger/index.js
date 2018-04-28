const https = require('https');

module.exports = function (context, req) {
    const urlTemplate = 'https://swisspost.opendatasoft.com/api/records/1.0/search/?dataset=zugangspunkte-post&facet=address_kantoncode&facet=address_zip&facet=poityp_de&facet=service_de&refine.poityp_de=Briefeinwurf';
    context.log('searching for ' + req.query.city);

    https.get(urlTemplate + '&q=' + req.query.city, (resp) => {
	let data = '';

	resp.on('data', (chunk) => {
	    data += chunk;
	});
	
	resp.on('end', () => {
	    let boxesResult = JSON.parse(data);

	    context.log('at end');
	    context.log('got ' + boxesResult.records.length + ' results');

	    context.res = {
		body: boxesResult.records
	    };
	    context.done();
	});
    }).on('error', (err) => {
	context.res = {
	    status: 500,
	    body: err.message
	};
	context.done();
    });
};
