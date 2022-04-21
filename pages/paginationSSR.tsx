import { useQuery, dehydrate, QueryClient } from "react-query";
import Pagination from "@material-ui/lab/Pagination";
import {
  SetStateAction,
  ReactChild,
  ReactFragment,
  ReactPortal,
  useState,
} from "react";
import { useRouter } from "next/router";

export default function PaginationPage(props: any) {
  const router = useRouter();
  const [page, setPage] = useState(parseInt(router.query.page) || 1);
  const { data } = useQuery(
    ["characters", page],
    async () =>
      await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      ).then((result) => result.json()),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  //   console.log(data);
  function handlePaginationChange(e: any, value: SetStateAction<number>) {
    setPage(value);
    router.push(`pagination/?page=${value}`, undefined, { shallow: true });
  }
  return (
    <div>
      <h1>Rick and Morty with React Query and Pagination</h1>
      <Pagination
        count={data?.info.pages}
        variant="outlined"
        color="primary"
        className="pagination"
        page={page}
        onChange={handlePaginationChange}
      />
      <div className="grid-container">
        {data?.results?.map(
          (character: {
            id: {} | null | undefined;
            image: string | undefined;
            name: {} | null | undefined;
            location: {
              name:
                | boolean
                | ReactChild
                | ReactFragment
                | ReactPortal
                | null
                | undefined;
            };
            species:
              | boolean
              | ReactChild
              | ReactFragment
              | ReactPortal
              | null
              | undefined;
          }) => (
            <article key={character.id}>
              <img
                src={character.image}
                alt={character.name}
                height={200}
                loading="lazy"
                width={200}
              />
              <div className="text">
                <p>Name: {character.name}</p>
                <p>Lives in: {character.location.name}</p>
                <p>Species: {character.species}</p>
                <i>Id: {character.id} </i>
              </div>
            </article>
          )
        )}
      </div>
      <Pagination
        count={data?.info.pages}
        variant="outlined"
        color="primary"
        className="pagination"
        page={page}
        onChange={handlePaginationChange}
      />
    </div>
  );
}
export async function getServerSideProps(context: { query: { page: string } }) {
  let page = 1;
  if (context.query.page) {
    page = parseInt(context.query.page);
  }
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    ["characters", page],
    async () =>
      await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      ).then((result) => result.json())
  );
  return { props: { dehydratedState: dehydrate(queryClient) } };
}
