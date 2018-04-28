{
    baseUrl: "lib",
    name: "main",
    include: ['city/select'],
    out: "dist.js",
    paths: {
	knockout: "empty:",
	jquery: "empty:",
	text: '../node_modules/text/text'
    },
    inlineText: true,
    stubModules: ['text']
}
