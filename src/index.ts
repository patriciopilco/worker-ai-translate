/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
import { Ai } from '@cloudflare/ai'

interface Env {
	AI: string;
}

export default {
  async fetch(request : Request, env:Env) {
    const ai = new Ai(env.AI);
    const input = { prompt: "What's the origin of the phrase 'Hello, World'" };
    const output = await ai.run('@cf/meta/llama-2-7b-chat-int8', input );
    return new Response(JSON.stringify(output));
  },
};
