import Pokemon from "../component/Pokemon";
import { getPoke } from "./api/index";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";

const Poke = () => {
  return <Pokemon />;
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery("poke", () => getPoke(), {
    staleTime: 1000,
  });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}

export default Poke;
