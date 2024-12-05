import { Handlers  } from "$fresh/server.ts";

export const handler: Handlers = {
    async GET(_req, ctx) {
        const resp = await ctx.render();//renderiza o componente na pagina
        resp.headers.set("X-custon-header", "hello"); //adiciona um cabeçalho pernonalizado
        return resp;//retorna a resposta 
    },
}

export default function AboutPage() {
   return (
    <main>
        <h1>About</h1>
        <p>This is the about page</p>
    </main>
   );
}