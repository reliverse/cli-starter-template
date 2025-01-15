#!/usr/bin/env node

import { defineCommand, errorHandler, runMain } from "@reliverse/prompts";
import { relinka } from "@reliverse/relinka";

const main = defineCommand({
	meta: {
		name: "reliverse",
		version: "1.4.27",
		description: "https://docs.reliverse.org",
	},
	subCommands: {
		cli: () => import("~/app/app-mod.js").then((r) => r.default),
	},
});

await runMain(main).catch((error: unknown) => {
	relinka("error", "Aborting...");
	errorHandler(
		error instanceof Error ? error : new Error(String(error)),
		"Errors can be reported at https://github.com/reliverse/cli",
	);
});
