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
let str: string = "hi";
```

#### Array

```ts
let arr: number[] = [1, 2, 3];
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
enum Avengers {
  IronMan,
  Thor,
}
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
  console.log("sth");
}
```


#### Never

함수의 끝에 절대 도달하지 않는다는 의미를 지닌 타입이다.

```ts
function neverEnd(): never {
  while (true) {}
}
```

### 함수에서 타입 정의


타입스크립트를 사용할 때 배열의 내장함수를 사용할 때에도 타입 유추가 쉽다.
함수에서 아무것도 반환하지 않아야 한다면 반환 타입을 void로 설정하면 된다.


### Interface


interface는 클래스 또는 객체를 위한 타입을 지정할 때 사용된다.

특정 조건을 준수해야 함을 명시할 때 interface를 사용한다.
implements를 사용하여 해당 클래스가 특정 interface의 요구사항을 구현한다는 것을 명시한다.


### 일반 객체를 interface로 타입 설정하기


```ts
interface Person {
  name: string;
  age?: number;
}
interface Developer {
  name: string;
  age?: number;
  skills: string[];
}
```

Person과 Developer의 형태가 유사한 모습을 볼 수 있다.

```ts
interface Person {
  name: string;
  age?: number;
}
interface Developer extends Person {
  skills: string[];
}
```

이와 같이 extends해 상속 받을 수 있다.

물음표는 설정을 해도 되고 안해도 되는 값이라는 것을 의미한다.

### React.FC


[Don’t use FunctionComponent<P>/FC<P>](https://medium.com/@martin_hotell/10-typescript-pro-tips-patterns-with-or-without-react-5799488d6680#78b9)

```ts
type GreetingsProps = {
  name: string;
  children: React.ReactNode;
};
```


React.FC를 사용할 때 props 타입을 Generics로 넣어 사용한다.
props에 기본적으로 children이 들어가 있는데 children이 있어야 하는 경우 없어야 하는 경우가 있다면 이에 대한 처리를 Props 타입 안에 children을 명시해야한다.

```ts
const Greetings: React.FC<GreetingsProps> = ({ name, mark }) => (
  <div>
    Hello, {name} {mark}
  </div>
);

Greetings.defaultProps = {
  mark: "!",
};
```


mark를 defaultProps로 넣었지만 오류가 뜬다.


```ts
const Greetings = ({ name, mark }: GreetingsProps) => (
  <div>
    Hello, {name} {mark}
  </div>
);
```

React.FC를 사용하지 않는다면 잘 작동한다.

이와 같은 이유로 현재는 React.FC를 사용하지 않는 것을 권장한다.

### 컴포넌트에 생략 할 수 있는 props 설정하기


component의 props 중 생략해도 되는 값이 있다면 물음표(?)를 사용한다.


```ts
type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
};
```


### 컴포넌트에서 함수 타입의 props 받아오기


Greetings.tsx

```ts
type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void; // 아무것도 반환하지 않는 함수
};

function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
}
```


App.tsx

```ts
const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };
  return <Greetings name="Hello" onClick={onClick} />;
};
```
