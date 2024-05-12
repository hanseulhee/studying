> 해당 문서는 **`next.js에서 styled-components 사용하기`** 에 관한 내용을 담고 있습니다.

# styled-components 사용 이유

next.js에서 styled-components를 사용하는 이유는 다음과 같습니다.

- 일반 CSS는 애니메이션 등 다양한 스타일링을 주는 데에 한계가 있다고 느껴집니다. 이에 다양한 애니메이션과 조건부 렌더링, props를 통한 다양한 동적 스타일링이 가능한 기술이 필요합니다.
- 공통 컴포넌트를 우선으로 개발한다면 상속을 받는 등 유지보수와 코드 관리에 용이한 기술이 필요합니다.
- emotion 또한 적합한 기술이나 아래와 같이 styled-components에 비해 낮은 다운로드 수를 볼 수 있습니다.

<img width="50%" alt="스크린샷 2024-05-05 오전 2 40 47" src="https://github.com/primus-teoSprint/primus_FE/assets/63100352/a35555eb-54df-4f57-8a8a-297ce09a70dd">

이러한 이유로 가장 적합한 styled-components를 사용합니다.

# Next.js 환경에서 CSS in JS?

Next.js의 Pre-Rendering 때문에 Next.js 환경에서의 CSS in JS는 렌더링이 될때마다 스타일링이 한 박자 늦게 보여지는 이슈가 있습니다.
즉, Next.js는 모든 페이지를 각 페이지에 대한 HTML을 미리 생성(Pre-Rendering)하고 이후에 js 파일을 로드 하기 때문에 스타일이 늦게 적용되는 문제가 발생합니다.

이와 관련해서 [Next.js 공식문서](https://nextjs.org/docs/app/building-your-application/styling/css-in-js#styled-components)에서는 다음과 같이 설명합니다.

> styled-components API를 사용하여 렌더링 중 사용되는 모든 CSS rule을 모아놓을 global registry 컴포넌트를 만들고 useServerInsertedHTML함수를 사용해서 해당 style을 root의 layout 파일의 head 태그 안에 주입하도록 해야 한다.

아래와 같이 설정함으로써 head 태그에 CSS-in-JS 형식으로 작성된 스타일 요소들을 주입시켜 스타일이 한박자 늦게 적용되는 문제를 해결할 수 있습니다. (해당 부분은 버전에 따라 적용 방법의 차이가 있습니다)

```tsx
"use client";

import { theme } from "@/styles/theme";
import { useServerInsertedHTML } from "next/navigation";
import React, { useState } from "react";
import styled, { ServerStyleSheet, StyleSheetManager } from "styled-components";

const LayoutRegistry = ({ children }: { children: React.ReactNode }) => {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();

    return <>{styles}</>;
  });

  if (typeof window !== "undefined")
    return <StyledWrapper>{children}</StyledWrapper>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <StyledWrapper>{children}</StyledWrapper>
    </StyleSheetManager>
  );
};

export default LayoutRegistry;
```

Next.js는 첫 화면 로딩 시에는 SSR로 동작하기 때문에 오류가 발생하지 않지만 그 이후부터는 CSR 렌더링을 하면서 SSR로 생성된 컴포넌트와 CSR로 생성된 컴포넌트의 클래스 명이 다르게 생성되어 오류가 발생합니다.

해당 오류는 babel 혹은 SWC로 해결이 가능하면 저희 프로젝트는 SWC로 해결하였습니다. (Next.js 12 버전부터 기본적으로 SWC가 바벨을 대체하도록 설정되어 있습니다)

Next.js 12 버전부터 정식으로 도입된 Rust 언어로 제작된 [SWC](https://swc.rs)를 사용하여 컴파일하도록 변경할 수 있습니다. 아래와 같이 next.config.js에서 nextConfig에 styledComponent를 설정하면 문제를 해결할 수 있습니다.

```tsx
/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
```

# Theme, Global style

추가적으로 아래와 같이 자주 사용되는 사항들로 theme을 정리합니다.

```tsx
export const theme = {
  color: {
    purple100: '#f3f4ff',
    ...
  },
  fontWeight: {
    light: 300,
    ...
  },
} as const

export type Theme = typeof theme
```

아래와 같이 theme의 타입을 정의함으로써 theme 요소의 이름이 기억이 나지 않을 때 자동완성을 경험할 수 있습니다.

```tsx
import { Theme } from "@/styles/theme";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
```

아래와 같이 global 스타일을 정의합니다.
공통으로 적용되어야 할 스타일을 정의함으로써 코드의 효율성을 향상시킵니다.

```tsx
import { theme } from "@/styles/theme";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'NanumSquare', sans-serif;
  }
  ...
`;

export default GlobalStyle;
```

# 마무리

styled-components로 작성된 파일은 'use client'를 사용하고 서버 컴포넌트에서 해당 파일들을 import해서 사용하는 방법이 최선이지 않을까 생각합니다.

next.js에서 styled-components 사용하는 것은 비교적 초기 설정이 더 필요하지만 이를 잘 해결한다면 styled-components의 장점을 즐길 수 있을 거라 생각합니다.

설명하는 과정에서 혹시나 잘못된 부분이 있을 시 피드백 부탁드립니다.

감사합니다.

**참고링크**

https://dev.to/rashidshamloo/using-styled-components-with-nextjs-v13-typescript-2l6m
