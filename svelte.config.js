const preprocess = require("svelte-preprocess");
import image from "svelte-image";

module.exports = {
	preprocess: preprocess({
		postcss: true,
		...image(),
	}),
};