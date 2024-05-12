> 해당 문서는 **[type-challenges](https://github.com/type-challenges/type-challenges/blob/main/README.ko.md)** 에 관련한 내용을 담고 있습니다.

# easy

## 14번

문제: 배열(튜플) T를 받아 첫 원소의 타입을 반환하는 제네릭 First<T>를 구현하세요.

답안:

```tsx
type First<T extends any[]> = T extends [] ? never : T[0];
```

First라는 타입은 배열의 형태이거나 배열과 유사한 형태를 받을 제너릭 T를 받습니다.

삼항연산자를 이용해 T가 비었을 경우 never 타입이며 비어있지 않을 경우 **첫 원소의 타입**을 반환합니다.

혹은 아래와 같이 비슷한 로직으로 구성할 수 있습니다.

```tsx
type First<T extends any[]> = T extends { length: 0 } ? never : T[0];
```

아래는 풀지 않은 14번 문제입니다.

```tsx
/* _____________ 여기에 코드 입력 _____________ */

type First<T extends any[]> = any;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
];

type errors = [
  // @ts-expect-error
  First<"notArray">,
  // @ts-expect-error
  First<{ 0: "arrayLike" }>
];
```
