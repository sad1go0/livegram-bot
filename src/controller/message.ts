import { Context } from '../packages/index.ts';
import "https://deno.land/x/dotenv@v3.2.0/load.ts";

const ADMIN_ID = parseInt(Deno.env.get("ADMIN_ID")!.toString());

async function message(ctx: Context) {
  if (ctx.from!.id !== ADMIN_ID)
    return await ctx.forwardMessage(ADMIN_ID);

  if (!ctx.message!.reply_to_message)
    return await ctx.reply('With reply');

  if (ctx.message!.text) return await ctx.api.sendMessage(ctx.message!.reply_to_message.forward_from!.id, ctx.message!.text);
  if (ctx.message!.photo) return await ctx.api.sendPhoto(ctx.message!.reply_to_message.forward_from!.id, ctx.message!.photo[1].file_id);
  if (ctx.message!.video) return await ctx.api.sendVideo(ctx.message!.reply_to_message.forward_from!.id, ctx.message!.video.file_id);
  if (ctx.message!.animation) return await ctx.api.sendAnimation(ctx.message!.reply_to_message.forward_from!.id, ctx.message!.animation.file_id);
  if (ctx.message!.audio) return await ctx.api.sendAudio(ctx.message!.reply_to_message.forward_from!.id, ctx.message!.audio.file_id);
  if (ctx.message!.document) return await ctx.api.sendAudio(ctx.message!.reply_to_message.forward_from!.id, ctx.message!.document.file_id);
  if (ctx.message!.sticker) return await ctx.api.sendSticker(ctx.message!.reply_to_message.forward_from!.id, ctx.message!.sticker.file_id);
  if (ctx.message!.video_note) return await ctx.api.sendVideoNote(ctx.message!.reply_to_message.forward_from!.id, ctx.message!.video_note.file_id);
  if (ctx.message!.voice) return await ctx.api.sendVoice(ctx.message!.reply_to_message.forward_from!.id, ctx.message!.voice.file_id);
  if (ctx.message!.location) return await ctx.api.sendLocation(ctx.message!.reply_to_message.forward_from!.id, ctx.message!.location.latitude, ctx.message!.location.longitude);
  if (ctx.message!.venue) return await ctx.api.sendVenue(ctx.message!.reply_to_message.forward_from!.id, ctx.message!.venue.location.latitude, ctx.message!.venue.location.longitude, ctx.message!.venue.title, ctx.message!.venue.address);
  if (ctx.message!.contact) return await ctx.api.sendContact(ctx.message!.reply_to_message.forward_from!.id, ctx.message!.contact.phone_number, ctx.message!.contact.first_name);
  if (ctx.message!.dice) return await ctx.api.sendDice(ctx.message!.reply_to_message.forward_from!.id, ctx.message!.dice.emoji);
  // if (ctx.message!.invoice) return await ctx.api.sendInvoice(ctx.message!.reply_to_message.forward_from!.id, ctx.message!.invoice.title, ctx.message!.invoice.description, ctx.message!.invoice.);
  if (ctx.message!.game) return await ctx.api.sendGame(ctx.message!.reply_to_message.forward_from!.id, ctx.message!.game.title);
}

export { message };