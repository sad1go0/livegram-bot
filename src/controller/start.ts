import { Context, NextFunction } from '../packages/index.ts';

async function start(ctx: Context, next: NextFunction) {
  await ctx.reply('Hello, world!');
  next();
}

export { start };