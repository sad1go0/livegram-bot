start:
	deno run --allow-all ./src/index.ts

dev:
	deno run --watch --allow-all ./src/index.ts

lint:
	deno lint

fmt:
	deno fmt