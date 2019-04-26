const babel = require('rollup-plugin-babel');
const { terser } = require('rollup-plugin-terser');

const isBrowserOutput = String(process.env.NODE_ENV).includes('browser');

module.exports = {
	input: 'src/index.js',
	output: isBrowserOutput
		? { file: 'browser.js', format: 'cjs', strict: false }
	: [
		{ file: 'index.js', format: 'cjs', strict: false },
		{ file: 'index.mjs', format: 'cjs', strict: false }
	],
	plugins: [
		babel()
	].concat(isBrowserOutput
		? [
			terser({
				compress: {
					unsafe: true
				}
			}),
			compressIIFE()
		]
	: [])
};

function compressIIFE () {
	return {
		name: 'compress-iife',
		renderChunk (code, chunk, options) {
			if (options.format === 'iife') {
				const xRegExp = new RegExp(`^(?:var ${options.name}=function\\(\\){return function)(\\([\\W\\w]+})(?:}\\(\\);)$`);

				if (xRegExp.test(code)) {
					const [, body] = code.match(xRegExp);

					const newCode = `function ${options.name}${body}`;

					return newCode;
				}
			}

			return null;
		}
	};
}
