import {
  useQuery,
  dehydrate,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import Pagination from "@material-ui/lab/Pagination";
import { useState } from "react";
// router 오브젝트에 접근하기 위해 사용한다.
import { useRouter } from "next/router";
// 관찰하기 위해 사용
import { ReactQueryDevtools } from "react-query/devtools";

export default function paginationSSR(props) {
  const router = useRouter();
  // 상태값을 page에 저장하고, 갱신할 변수로 setPage를 설정
  // 또 '쿼리 요청값의 페이지'라는 문자열 인자를 정수로 반환하거나, 1을 초기값으로 설정한다.
  const [page, setPage] = useState(parseInt(router.query.page) || 1);
  // 데이터를 만드는데, 이 과정에서 react-query의 useQuery를 사용한다. 이는 query에 대해
  // 다양한 처리를 돕는다.
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
  function handlePaginationChange(e, value) {
    setPage(value);
    router.push(`paginationSSR/?page=${value}`, undefined, { shallow: true });
  }
  return (
    <div>
      <h1>
        Rick and Morty with React Query and Pagination - Server Side rendered
      </h1>
      <Pagination
        count={data?.info.pages}
        variant="outlined"
        color="primary"
        className="pagination"
        page={page}
        onChange={handlePaginationChange}
      />
      <div className="grid-container">
        {data?.results?.map((character) => (
          <article key={character.id}>
            <img
              src={character.image}
              alt={character.name}
              height={250}
              loading="lazy"
              width={"100%"}
            />
            <div className="text">
              <p>Name: {character.name}</p>
              <p>Lives in: {character.location.name}</p>
              <p>Species: {character.species}</p>
              <i>Id: {character.id} </i>
            </div>
          </article>
        ))}
      </div>
      <Pagination
        count={data?.info.pages}
        variant="outlined"
        color="primary"
        className="pagination"
        page={page}
        onChange={handlePaginationChange}
      />
      <ReactQueryDevtools />
    </div>
  );
}

export async function getSerSideProps(context) {
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
