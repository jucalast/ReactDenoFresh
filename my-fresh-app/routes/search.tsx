import { Handlers, PageProps } from "$fresh/server.ts";

const NAMES = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank"];

interface Data {
  results: string[]; // Nomes filtrados
  query: string; // Termo de busca
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url); // Extrai a URL da requisição
    const query = url.searchParams.get("q") || ""; // Obtém o valor do parâmetro 'q'
    const results = NAMES.filter((name) => name.includes(query)); // Filtra os nomes
    return ctx.render({ results, query }); // Renderiza a página
  },
};

export default function Page({ data }: PageProps<Data>) {
  const { results, query } = data;
  return (
    <div>
      <form>
        <input type="text" name="q" value={query} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
