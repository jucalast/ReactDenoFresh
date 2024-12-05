import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(_req) {
    const uuid = crypto.randomUUID(); // Gera um UUID aleatório
    return new Response(JSON.stringify(uuid), {
      headers: { "Content-Type": "application/json" }, // Define o tipo de resposta como JSON
    });
  },
};
