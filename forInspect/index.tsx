/*무한스크롤 구현용으로 react-query를 사용
react-query는 데이터 패칭 라이브러리이지만, Devtools, 캐싱, 서버 상태 동기화 및 업데이트 등 많은 기능을 지원
react-query는 SSR을 initialData를 주는 방법과 Hydration을 하는 방법 중 전자가 모든 컴포넌트에 값을 넘겨주는 문제가
있으므로 hydration을 사용*/

import React from "react";

/* 캐시와 상호작용하기 위해 QueryClient를, APP에 이를 제공하기 위해 QueryClientProvider를 사용*/
import { QueryClient, QueryClientProvider } from "react-query";

// 앱을 커스텀하면서 타입을 넘겨주기 위해 next컴포넌트 타입을 사용
import { NextComponentType } from "next";

/*타입스크립트를 사용하기 때문에 arguments(함수와 매개변수의 입력값을 넘겨줘야 한다.)
내 앱은 Component, pageProps 객체를 인수로 받고 있다. 이때, AppProps는 이러한 타입의 일종이다.*/
import { AppContext, AppInitialProps, AppProps } from "next/app";

//SSR을 위해 Hydrate을 사용
import { Hydrate } from "react-query/hydration";

// 디버깅 시간을 아끼기 위해 devtools를 사용
import { ReactQueryDevtools } from "react-query/devtools";

/* 타입스크립트에 맞춰 MyApp을 만들고, 타입을 NextComponentType으로 넘겨주되, 이때, 3가지 타입을 인수로 넘겨준다.
함수의 인수로 Component와 pageProps를 넘겨준다.*/
const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  // query 클라이언트 참조를 만든다. 이는 리액트로 QueryClient라는 DOM을 선택해 이뤄진다.
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
};

MyApp.getInitialProps = async ({
  Component,
  ctx,
}: AppContext): Promise<AppInitialProps> => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default MyApp;
