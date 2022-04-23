import { getRestaurant } from "pages/api/test";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";

const Poke = () => {
  return null;
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery("poke", () => getRestaurant(), {
    staleTime: 1000,
  });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}

export default Poke;
