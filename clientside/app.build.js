{
    baseUrl: "lib",
    name: "main",
    include: ['city/select', 'postbox/list', 'postbox/view'],
    out: "dist.js",
    paths: {
	knockout: "empty:",
	jquery: "empty:",
	text: '../node_modules/text/text'
    },
    inlineText: true,
    stubModules: ['text']
}
