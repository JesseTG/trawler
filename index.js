const defaultFilters = {
	phpFiles: /\.php\/?$/i,
	phpIni: /php\.ini\/?$/i,
	phpMyAdmin: /phpmyadmin(\/.*)?$/i,
	aspFiles: /\.aspx?\/?$/i,
	hnap: /\/HNAP1\/?$/i,
	git: /\.git(\/.*)?$/i,
	jsp: /\.jspa?\/?$/i,
	cfm: /\.cfm\/?$/i,
	cfide: /\/CFIDE(\/.*)?$/i,
	action: /\.action\/?$/i,
	cgi: /\/cgi(-bin)?(\/.*)?$/i,
};

module.exports = function(target, filters) {
	target = target || 'http://www.youtube.com/watch?v=oHg5SJYRHA0';
	filters = filters || defaultFilters;

	return function(req, res, next) {
		var key;
		var filter;
		var path = req.path;

		for(key in filters) {
			filter = filters[key];

			if(filter.test(path)) {
				return res.redirect(301, target);
			}
		}

		next();
	};
};

module.exports.defaultFilters = filters;
