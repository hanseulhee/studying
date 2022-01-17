# TypeScript

```js
$ mkdir ts-practice
$ cd ts-practice
```

```js
npm install -g typescript
```

```js
tsc --init
```

```js
npm install --save typescript
```

### TypeScript란?

타입스크립트는 자바스크립트의 확장된 언어로 자바스크립트에 "타입"을 부여한 언어다. 
타입스크립트는 자바스크립트와 달리 브라우저에서 실행하려면 파일을 한번 변환해주어야 한다. (=컴파일)


[TypeScript Handbook 한글 문서](https://typescript-kr.github.io/)


### 왜 TypeScript?

타입스크립트는 특정 변수 또는 상수의 타입을 지정할 수 있고 사전에 지정한 타입이 아닌 값이 설정될 때 에러가 발생한다. 따라서 에러를 사전에 방지할 수 있다. 


### TypeScript 기본 타입

Boolean, Number, String, Object, Array, Tuple, Enum, Any, Void, Null, Undefined, Never


#### Boolean

참과 거짓

```ts
let isLoggedIn: boolean = false;
```


#### Number

```ts
let num: number = 10;
```


#### String

```ts
let str: string = 'hi';
```

#### Array

```ts
let arr: number[] = [1, 2, 3]
```

```ts
let arr: Array<number> = [1, 2, 3];
```

#### Tuple

배열의 길이가 고정되고 각각의 요소가 타입이 지정되어 있는 배열

```ts
let arr: [string, number] = ["hi", 10];
```


#### Enum

특정 값(상수)들의 집합을 의미한다.

```ts
enum Avengers {IronMan, Thor}
let hero: Avengers = Avengers.Capt;
```


#### Any

모든 타입에 대해 허용한다는 의미를 갖는다.

```ts
let str: any = "hi";
```


#### Void

변수에는 undefined와 null만 할당하고 함수에는 반환 값을 설정할 수 없는 타입이다.

```ts
let unuseful: void = undefined;
function notuse(): void {
  console.log('sth');
}
```


#### Never

함수의 끝에 절대 도달하지 않는다는 의미를 지닌 타입이다.

```ts
function neverEnd(): never {
  while (true) {}
}
```