> 해당 문서는 **[type-challenges](https://github.com/type-challenges/type-challenges/blob/main/README.ko.md)** 에 관련한 내용을 담고 있습니다.

# easy

[14](#14번)

[18](#18번)

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

## 18번

문제: 배열(튜플)을 받아 길이를 반환하는 제네릭 `Length<T>`를 구현하세요.

답안:

```tsx
type Length<T extends readonly any[]> = T["length"];
```

배열을 받아야 하기에 `<T extends any[]>` 가 필요합니다.

여기서 `readonly`(읽기 전용)를 사용하지 않으면 TypeScript는 배열이 변경될 수 있기 때문에 해당 배열 길이에 대해 추론을 할 수 없게 되며 이에 에러가 발생합니다.
`<T extends readonly any[]>`로 변경함으로써 해당 배열은 더 이상 변경될 수 없는 배열이므로 해당 배열의 길이를 정확하게 추론할 수 있게 됩니다.

이후 `T["length"]`를 통해 해당 배열의 길이를 반환합니다.

아래는 풀지 않은 18번 문제입니다.

```tsx
/* _____________ 여기에 코드 입력 _____________ */

type Length<T> = any;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

const tesla = ["tesla", "model 3", "model X", "model Y"] as const;
const spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT",
] as const;

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<"hello world">
];
```
