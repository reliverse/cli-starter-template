import { defineCommand, startPrompt } from "@reliverse/prompts";
import { relinka } from "@reliverse/relinka";

export default defineCommand({
	meta: {
		name: "cli",
		description: "Runs the @acme/cli",
	},
	args: {
		dev: {
			type: "boolean",
			description: "Runs the CLI in dev mode",
		},
	},
	run: async ({ args }) => {
		const isDev = args.dev;
		await startPrompt({ isDev });
		relinka("success", "Welcome! Happy, Reliversing! 🎉");
		process.exit(0);
	},
});
