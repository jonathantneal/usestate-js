module.exports = {
	presets: [
		['@babel/preset-env', {
			corejs: 3,
			loose: true,
			modules: false,
			targets: { node: 6 },
			useBuiltIns: 'entry'
		}]
	]
};
