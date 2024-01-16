import { DefaultsInstance } from "vuetify/lib/framework.mjs";

/**
 * A few defaults that I like
 */
export const defaults: DefaultsInstance = {
	VAppBar: {
		elevation: 0,
	},
	VBtn: {
		variant: "flat",
		height: 38,
		size: "small",
		ripple: false
	},
	VTextField: {
		color: "#E90089",
		variant: "solo",
		density: "comfortable",
	},
};
