# State

React JS는 데이터가 바뀔 때마다 component를 리렌더링하고 UI에서 바뀐 부분만 업데이트한다.

component나 JSX에 변수를 추가하고 싶을 땐 중괄호를 이용한다.

```html
<h3>Total clicks: {counter}</h3>
```

UI를 업데이트하고 싶다면 render 함수를 다시 호출한다.

```js
let counter = 0;
function countUp() {
  counter = counter + 1;
  render();
}

function render() {
  ReactDOM.render(<App />, root);
}

function App() {
  return (
    <div>
      <h3>Total clicks: {counter}</h3>
      <button onClick={countUp}>Click me</button>
    </div>
  );
}
render();
```

위와 같은 코드는 계속 호출을 해야되기 때문에 효율적인 코드는 아니다. (직접 리렌더링을 하였음)

### 리렌더링을 발생시킬 가장 좋은 방법

함수를 계속 불러줄 필요 없이 React JS 내에서 데이터를 보관하고 자동으로 리렌더링하기!

useState는 배열을 주는데 배열의 첫 번째 값은 초기값(data 값), 두 번째 요소는 그 값(data 값)을 바꾸는 함수다.

```js
const data = React.useState(0);
console.log(data); // (2)[(0, ƒ)];
```

어떤 값을 부여하던 modifier 함수는 그 값으로 업데이트하고 리렌더링을 일으킨다. modifier 함수를 가지고 state를 변경할 때 component가 재생성된다.

React.useState 함수는 counter 같은 데이터를 숫자형 데이터로 건네주고 그 데이터 값을 바꿀 함수도 준다. 해당 함수를 이용해 데이터를 바꿨을 때 데이터 값이 바뀌고 component도 동시에 리렌더링된다.
변수를 컴포넌트에 연결해서 변수에 데이터를 담고 해당 변수에 담긴 값을 바꿔준다.

```js
const root = document.getElementById("root");
function App() {
  const [counter, setCounter] = React.useState(0);
  const onClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h3>Total clicks: {counter}</h3>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}
ReactDOM.render(<App />, root);
```

### Vanila Js와 비교하자면

React JS는 HTML 요소를 생성하거나 찾지 않아도 되고 eventListener을 더하거나 UI를 업데이트해주지 않아도 된다.

### state를 바꾸는 2가지 방법

- 직접 값을 설정하기 : setState(state + 1)
- 함수를 전달하기: setState(state => state + 1) (함수의 첫번째 인자는 현재 값이다.)

현재 state랑 관련이 없는 값을 새로운 state로 하고 싶은 경우 직접 할당, 현재 state를 바탕으로 다음 state를 계산하고 싶다면 함수를 사용한다. 함수를 사용한다면 예상치 못한 업데이트가 어디선가 일어났다고 해도 혼동을 방지할 수 있다.


<div id="1">

### JSX


JSX는 JavaScript를 확장한 문법이다.

HTML과 비슷해 JSX로 React 요소를 만드는 것이 굉장히 편하다. JSX는 어플리케이션을 여러가지 작은 요소로 나누어 관리할 수 있다.


[@seulhyi_JSX](https://velog.io/@seulhyi/JSX)

```js
<div>
  <h1>Converter</h1>
  <label for="minutes">Minutes</label>
  <input id="minutes" placeholder="Minutes" type="number" />
  <label for="hours">Hours</label>
  <input id="hours" placeholder="Hours" type="number" />
</div>
```

JSX에선 위와 같이 하면 오류가 발생하는데 production.min.js를 사용했기 때문에 오류가 안났다.
JSX를 사용하기 위해 class는 className, for이 아닌 htmlFor을 써야한다.

JSX

```js
<div>
  <h1 className="hi">Converter</h1>
  <label htmlFor="minutes">Minutes</label>
  <input id="minutes" placeholder="Minutes" type="number" />
  <label htmlFor="hours">Hours</label>
  <input id="hours" placeholder="Hours" type="number" />
</div>
```

## React JS에서 form 다루기

```js
function App() {
  const [minutes, setMinutes] = React.useState();
  const onChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <h1 className="hi">Converter</h1>
      <label htmlFor="minutes">Minutes</label>
      <input
        value={minutes}
        id="minutes"
        placeholder="Minutes"
        type="number"
        onChange={onChange}
      />
      <label htmlFor="hours">Hours</label>
      <input id="hours" placeholder="Hours" type="number" />
    </div>
  );
}
```

input의 value를 state로 연결해준다. 이렇게 한다면 어디서든 input의 value를 수정해줄 수 있다.

사용자가 입력한 Input의 value를 바탕으로 component를 업데이트해준다.

### Unit converter (단위 변환)

Hours input의 value는 state에 있는 minutes 값이지만 minutes / 60를 해 분을 시간단위로 변환시켜주었다.
Math.round를 이용해 반올림을 하였다.

Hours input은 onChange event가 없기 때문에 아무 입력을 할 수 없다.

```js
<input value={minutes / 60} id="hours" placeholder="Hours" type="number" />
```

reset 버튼을 이용해 state를 리스닝하거나 연결한 모든 것들은 전부 0으로 돌려진다.

### flip function

단위 변환을 뒤집는 함수 (disabled <-> enabled)
Hours를 Minutes로 단위변환을 해준다.

```js
function App() {
  const [amount, setAmount] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const reset = () => setAmount(0);
  const onFlip = () => {
    reset();
    setFlipped((current) => !current);
  };
  return (
    <div>
      <h1 className="hi">Converter</h1>
      <label htmlFor="minutes">Minutes</label>
      <div>
        {" "}
        <input
          value={flipped ? amount * 60 : amount}
          id="minutes"
          placeholder="Minutes"
          type="number"
          onChange={onChange}
          disabled={flipped}
        />
      </div>

      <div>
        <label htmlFor="hours">Hours</label>
        <input
          value={flipped ? amount : Math.round(amount / 60)}
          id="hours"
          placeholder="Hours"
          type="number"
          onChange={onChange}
          disabled={!flipped}
        />
      </div>

      <button onClick={reset}>Reset</button>
      <button onClick={onFlip}>Flip</button>
      <h4>You want to convert {minutes}</h4>
    </div>
  );
}
```

true or false에 따라 disabled, enabled로 만든다.

flipped은 false를 초기값으로 가지고 시작한다. onFlip 함수는 flipped가 true라면 false, false라면 true로 바꾸어준다. flipped 상태에 따라 input을 disabled 또는 enabled로 바꾸어준다.

flipped이 true라는 것은 시에서 분으로 변환 중인 상태를 뜻한다. 따라서 flipped가 true라면 minutes input은 disabled가 된다.
Minutes, Hours input 둘 다 onChange 함수를 가지고 있다. onChange 함수는 input에 입력한 값을 state에 전달한다. 두 input 중 enabled 상태인 input에서 amount state를 수정할 수 있다.


### useState 연습

[practice.html](./practice.html)

#### divide(분할)

MinutesToHours, KmToMiles 두 컴포넌트를 렌더링하는 것이 아닌 원하는 단위 변환을 선택할 수 있도록 하기

state를 변화시킬 때 모든게 새로고침된다. React JS는 re-render가 필요한 것들을 re-render한다.

! 리렌더링 조건

1) props이 바뀔때 2) state가 바뀔때 3) 부모 컴포넌트가 리렌더링 될 때

#### KmToMiles

1km는 0.6214마일과 같다. 

**onClick vs onChange**

onClick는 말그대로 클릭했을 때 나오는 이벤트이고 onChange는 텍스트칸에 Value 값이 변경되는 등 변화할 때 나오는 이벤트다.