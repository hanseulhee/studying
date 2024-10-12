# 우아한 타입스크립트 with 리액트

[1장](#1)

[2장](#2)

[3장](#3)

[4장](#4)

---

<div id = "1">

## 1장

## 웹사이트와 웹 애플레케이션의 차이

웹사이트는 데이터를 표시하기 위한 정적인 웹이다. 단방향으로 정보를 제공하기 떄문에 사용자와 상호 작용하지 않으며, 동적으로 업데이트가 되지 않는다.

웹 애플리케이션은 사용자와 상호작용하는 쌍방향 소통의 웹이다. 검색, 댓글, 좋아요 기능 등 웹 페이지 내부에 수많은 애플리케이션이 동작하기 때문에 웹 애플리케이션이라 부른다.

<div id = "2">

## 2장

## 강타입과 약타입

개발자가 의도적으로 타입을 명시하거나 바꾸지 않았는데도 컴파일러 또는 엔진 등에 의해 런타임에 타입이 자동으로 변경되는 것을 암묵적 타입 변환이라 한다.

암묵적 타입 변환 여부에 따라 타입 시스템을 강타입, 약타입으로 분류한다.

```javascript
// 약타입
console.log("2", -1); // 1

// 강타입
console.log("2", -1); // '2' error
```

약타입 언어: 자바, 자바스크립트, 강타입 언어: 파이썬, 타입스크립트

## 구조적 타이핑

자바스크립트는 본질적으로 덕 타이핑을 기반으로 한다.

덕 타이핑이란 어떤 함수의 매개변숫값이 올바르게 주어진다면 그 값이 어떻게 만들어졌는지 신경 쓰지 않고 사용한다는 개념이다. (런타임에 타입 검사)

타입스크립트는 자바스크립트를 모델링한 언어이기 때문에 명목적 타이핑이 아닌 구조적 타이핑을 택하였다. (컴파일 시 타입 검사)

## 클래스와 enum

타입스크립트에서 클래스와 enum은 런타임에 객체로 변환되는 값이다. 즉, 자바스크립트의 값으로 사용되는 특징을 가지고 있다.

## null

```javascript
type Person1 = {
  name: string,
  job?: string, // job이라는 속성이 있을 수도 없을 수도
};

type Person2 = {
  name: string,
  job: string | null, // job이라는 속성은 사람마다 갖고 있지만 값이 비어있을 수도
};
```

## type과 interface

type을 쓰는 상황 ? 유니온 타입이나 교차 타입 등 type 정의에서만 쓸 수 있는 기능을 활용할 때, computed value를 써야할 때

interface를 쓰는 상황 ? 객체 지향적으로 코드를 짤 때, 상속하는 경우 (extends, implements)

공식 문서 - 전역적으로 사용할 때는 interface를, 작은 범위 내에서 한정적으로 사용한다면 type을 사용하는 것을 권장한다.

## function

```javascript
function add(a: number, b: number): number {
  return a + b;
}
```

a와 b의 타입은 number이며 반환 값의 타입도 number로 지정한 문법이다.

<div id = "3">

## 3장

## any

타입스크립트에서 any 타입을 어쩔 수 없이 사용해야 할 때

- 개발 단계에서 임시로 값을 지정해야 할 때
  (세부 스팩이 나오는 시점에 다른 타입으로 변경)

- 어떤 값을 받아올지 또는 넘겨줄지 정할 수 없을 때

- 값을 예측할 수 없을 때 암묵적으로 사용

## unknown

unknown 타입은 무엇이 할당될지 아직 모르는 상태의 타입을 말한다.

unknown 타입을 할당할 때는 컴파일러가 아무런 경고를 주지 않지만 실행 시에는 에러가 발생한다.

any를 사용하면 문제를 회피하거나 특정 타입 지정을 깜빡할 수 있기 때문에 버그가 발생할 가능성이 높아진다. 이를 보완하기 위해 unknown을 사용하면 타입 검사를 강제하고 타입이 식별된 후에 사용할 수 있어 any 타입보다 더 안전하다. (any 타입 대신 unknown 타입으로 대체해서 사용하는 방법이 권장)

## 타입 조합

교차 타입 (&)

: A & B -> A와 B의 타입을 모두 만족하는 경우

유니온 타입 (|)

: A | B -> A 또는 B 중 하나가 될 수 있는 경우

인덱스 시그니처 ([Key: K]: T)

: 특정 타입의 속성 이름은 알 수 없지만 속성 값의 타입을 알고 있을 때 사용하는 문법이다.

```javascript
interface IndexSignatureEx {
  [key: string]: number;
}
```

인덱스드 엑세스 타입

: 다른 타입의 특정 속성이 가지는 타입을 조회하기 위해 사용한다.

```javascript
type Example = {
  a: number;
  b: string;
  c: boolean;
}

type IndexedAccess = Example["a" | "b"] // number | string
type IndexedAccess2 = Example[keyof Example] // number | string | boolean
```

맵드 타입 (Mapped Types)

: 다른 타입을 기반으로 한 타입을 선언할 때 사용한다.

```javascript
type Example = {
  a: number;
  b: string;
  c: boolean;
}

type Subset<T> = {
  [K in keyof T]?: T[K];
}

const aExample: Subset<Example> = {a: 3};
const bExample: Subset<Example> = {b: "슬희"};
const acExample: Subset<Example> = {a: 4, c: true};
```

기존 타입에 존재하던 readonly나 ? 앞에 -를 붙이면 해당 수식어를 제거한 타입을 선언할 수도 있다.

제너릭

: 내부적으로 사용할 타입을 미리 정해두지 않고 타입 변수를 사용하여 해당 위치를 비워 둔 다음, 실제로 그 값을 사용할 때 외부에서 타입 변수 자리에 타입을 지정하여 사용하는 방식이다.

```javascript
type ExampleArrayType<T> = T[];

const array: ExampleArrayType<string> = ["슬희", "스리"];
```

any랑 다른 점은 제너릭은 아무 타입이나 무분별하게 받는 것이 아닌 배열 요소가 전부 동일한 타입이라고 보장할 수 있다.

<div id = "4">

## 4장

## 타입 확장

```javascript
// interface 키워드 사용
interface BaseMenuItem {
  itemName: string | null;
  itemImageUrl: string | null;
  itemDiscountAmount: number;
  stock: number | null;
}

interface BaseCartItem extends BaseMenuItem {
  quantity: number;
}

// type 키워드 사용
type BaseMenuItem = {
  itemName: string | null,
  itemImageUrl: string | null,
  itemDiscountAmount: number,
  stock: number | null,
};

type BaseCartItem = {
  quantity: number,
} & BaseMenuItem;
```

## 유니온 타입

```javascript
type MyUnion = A | B;
```

A 타입과 B 타입의 모든 값이 MyUnion 타입의 값이 된다.

유니온 타입으로 선언된 값은 유니온 타입에 포함된 **모든 타입이 공통으로 갖고 있는 속성에만 접근할 수 있다.**
