import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export default function PaginationPage(props) {
  const { data } = useQuery(
    "pokemons",
    async () =>
      await fetch(`https://pokeapi.co/api/v2/pokemon/`).then((result) =>
        result.json()
      )
  );
  return (
    <div>
      <h1>Pokemon with React Query and Pagination</h1>
      <div className="grid-container">
        {data?.results?.map((pokemon) => (
          <article key={pokemon.id}>
            <img
              src={pokemon.sprite}
              alt={pokemon.name}
              height={200}
              loading="lazy"
              width={200}
            />
            <div className="text">
              <p>Name: {pokemon.name}</p>
              <p>types: {pokemon.types}</p>
              <p>Species: {pokemon.species}</p>
              <i>Id: {pokemon.id} </i>
            </div>
          </article>
        ))}
      </div>
      <ReactQueryDevtools />
    </div>
  );
}
