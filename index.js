const { format } = require("util");

function codes() {}

codes.black = [30, 39];
codes.red = [31, 39];
codes.green = [32, 39];
codes.yellow = [33, 39];
codes.blue = [34, 39];
codes.magenta = [35, 39];
codes.cyan = [36, 39];
codes.white = [37, 39];
codes.grey = [90, 39];
codes.gray = codes.grey;
codes.bgBlack = [40, 49];
codes.bgRed = [41, 49];
codes.bgGreen = [42, 49];
codes.bgYellow = [43, 49];
codes.bgBlue = [44, 49];
codes.bgMagenta = [45, 49];
codes.bgCyan = [46, 49];
codes.bgWhite = [47, 49];
codes.reset = [0, 22];
codes.bright = [1, 22];
codes.bold = [1, 22];
codes.dim = [2, 22];
codes.italic = [3, 23];
codes.underline = [4, 24];
codes.blink = [5, 25];
codes.inverse = [7, 27];
codes.reverse = [7, 27];

function createProxy(logCodes) {
	return new Proxy(codes, {
		get(target, prop, receiver) {
			if (Reflect.has(target, prop)) logCodes.push(Reflect.get(target, prop));
			return receiver;
		},
		apply(target, context, args) {
			let text = args.map((a) => format(a)).join(" ");
			for (const code of logCodes) text = `\u001b[${code[0]}m${text}\u001b[${code[1]}m`;
			return text;
		}
	});
}

const initialHandler = {
	get(target, prop) {
		return Reflect.has(target, prop) ? createProxy([Reflect.get(target, prop)]) : createProxy([]);
	},
	apply(target, context, args) {
		return args.map(a => format(a)).join(" ");
	}
};

const styler = new Proxy(codes, initialHandler);

module.exports = styler;
module.exports.codes = codes;