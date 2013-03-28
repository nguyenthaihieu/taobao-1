var _ = require('underscore'),
	core = require('./lib/core'),
	user = require('./lib/user'),
	itemcats = require('./lib/itemcats');


module.exports = {
	config: function (config) {
		core.config(config);
	},

	updateSession: function(session) {
		core.config({
			session: session
		});
	},

	core: core
};

_.extend(module.exports, user, itemcats);