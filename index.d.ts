declare module "console-styles" {
	interface Styler {
		(...text: string[]): string;
		black: this;
		red: this;
		green: this;
		yellow: this;
		blue: this;
		magenta: this;
		cyan: this;
		white: this;
		bgBlack: this;
		bgRed: this;
		bgGreen: this;
		bgYellow: this; 
		bgBlue: this;
		bgMagenta: this;
		bgCyan: this;
		bgWhite: this;
		reset: this;
		bright: this;
		bold: this;
		dim: this;
		underline: this;
		italic: this;
		blink: this;
		reverse: this;
		inverse: this;
		upper: this;
		lower: this;
		trim: this;
	}

	const styler: Styler;
	export = styler;
}
