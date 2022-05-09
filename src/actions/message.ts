import { bot } from '../core/bot.ts';
import { message } from '../controller/index.ts';

bot.on('message', message);