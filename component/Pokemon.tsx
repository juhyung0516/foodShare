import React, { useEffect, useState } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import { getPoke } from "../pages/api/index";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Pokemon = () => {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    "poke",
    ({ pageParam = "" }) => getPoke(pageParam),
    {
      getNextPageParam: (lastPage) => {
        const lastOffset =
          lastPage.results[lastPage.results.length - 1].url.split("/")[6];
        if (lastOffset > 1118) {
          return undefined;
        }
        return lastOffset;
      },
      staleTime: 3000,
    }
  );

  const loadMoreButtonRef = React.useRef();

  useIntersectionObserver({
    root: null,
    target: loadMoreButtonRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });

  return (
    <>
      <ul>
        {data.pages.map((page) =>
          page.results.map((poke) => (
            <li key={poke.name} style={{ padding: "20px", fontWeight: "bold" }}>
              {poke.name}
            </li>
          ))
        )}
      </ul>
      <button onClick={() => fetchNextPage()}>Load More</button>
      <div ref={loadMoreButtonRef} />
    </>
  );
};

export default Pokemon;
