# Next.js Layout

[layout](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts#per-page-layouts)

스타일이 대부분 겹치고 코드의 반복이 일어날 때 공통 layout을 분리할 수 있다.

---

# Props

props는 부모 컴포넌트로부터 자식 컴포넌트에 데이터를 보낼 수 있게 해준다.

```js
function Btn(props) {
  return <button>{props.text}</button>;
}
```

```js
function Btn({ text }) {
  return <button>{text}</button>;
}
```

아래 코드는 property를 오브젝트로부터 꺼낸 코드다. props는 오브젝트이기 때문에 props 안에 text가 있다는 것을 알고 위와 같이 쓸 수 있다.

```js
function Btn({ text, big }) {
  return (
    <button
      style={{
        fontSize: big ? 18 : 16,
      }}
    >
      {text}
    </button>
  );
}
function App() {
  return (
    <div>
      <Btn text="Save Changes" big={true} />
      <Btn text="Continue" big={false} />
    </div>
  );
}
```

두 Btn은 같은 개수의 인자를 갖고 있지만 내용은 다르다. props를 기반으로 style안에서 if else를 사용할 수 있다.

```js
function Btn({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}
function App() {
  const [value, setValue] = React.useState("Save Changes");
  const changeValue = () => setValue("Revert Changes");
  return (
    <div>
      <Btn text={value} onClick={changeValue} />
      <Btn text="Continue" />
    </div>
  );
}
```

onClick을 커스텀 컴포넌트에 넣는다면 이것은 단지 하나의 prop일 뿐 이벤트 리스너가 아니다. 여기서 onClick은 단순히 props의 이름이다. prop들은 자동적으로 return문 안으로 들어가지 않고 직접 prop들을 넣어줘야 한다.

<div id="4"></div>

### React Memo

React Memo는 컴포넌트의 props가 바뀌지 않았다면 리렌더링을 방지하여 컴포넌트의 리렌더링 성능 최적화를 해줄 수 있게 하는 함수이다. 즉 필요한 상황에서만 리렌더링을 하도록 설정한다.

React.memo()안에 컴포넌트(여기서는 함수)를 인자로 넣는다.

```js
function Btn({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}
const MemorizedBtn = React.memo(Btn);
function App() {
  const [value, setValue] = React.useState("Save Changes");
  const changeValue = () => setValue("Revert Changes");
  return (
    <div>
      <MemorizedBtn text={value} onClick={changeValue} />
      <MemorizedBtn text="Continue" />
    </div>
  );
}
```

MemorizedBtn은 memorized version의 Btn이다.
만약 부모 컴포넌트가 어떠한 state의 변경이 있다면 모든 자식들은 다시 re-render된다. 이 점이 추후에 어플리케이션이 느려지는 원인이 될 수 있다.

MemorizedBtn을 이용해 props가 변경되지 않는다면 다시 그릴 필요가 없다고 전해주었다.
따라서 위 코드를 실행하면 Save Changes를 클릭했을 때 단 한 번만 re-render된다.

<div id="2"></div>

### Prop Types

PropType은 어떤 타입의 prop을 받고 있는지를 체크해준다. 각기 다른 타입들을 검사하는 것도 가능하다.

[Prop Types 공식문서](https://ko.reactjs.org/docs/typechecking-with-proptypes.html)를 보면 array, boolean, function, number, object 등 이외의 것들도 테스트할 수 있다고 나와있다. 컴포넌트 클래스의 instanve인지도 확인 가능하다.

```js
Btn.propTypes = {
  text: PropTypes.string,
  fontSize: PropTypes.number,
};

function App() {
  return (
    <div>
      <Btn text="Save Changes" fontSize={18} />
      <Btn text={14} fontSize={"Continue"} /> // 잘못된 부분
    </div>
  );
}
```

위 코드를 실행하면 유효한 코드이기 때문에 ReactJS는 ui에서 에러를 보여주지 않는다. 그러나 propTypes를 지정해줌으로써 prop들의 type이 어떻게 되는지 React에게 말해주는 것이다.

```js
Btn.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
};
```

isRequired은 언제든 누군가가 Btn 컴포넌트를 render한다면 text와 fontSize는 반드시 존재한다는 것을 의미한다.
만약 둘 중 하나라도 없다면 "required(필수)라고 표시되어 있지만 실제 값은 undefined다."라고 콘솔에 경고가 뜨게 된다.

```js
function Btn({ text, fontSize = 16 }) {
  return (
    <button
      style={{
        backgroundColor: "tomato",
        color: "white",
        padding: "10px 20px",
        border: 0,
        borderRadius: 10,
        fontSize,
      }}
    >
      {text}
    </button>
  );
  Btn.propTypes = {
    text: PropTypes.string.isRequired,
    fontSize: PropTypes.number,
  };

  function App() {
    return (
      <div>
        <Btn text="Save Changes" fontSize={18} />
        <Btn text={"Continue"} />
      </div>
    );
  }
}
```

만약 fontSize가 존재하지 않는다면(undefined) 값을 줄 수 있다. fontSize의 default값을 16으로 지정해주었다. 이것은 fontSize가 prop으로서 설정되지 않은 두 번째 Btn에만 해당된다.
즉 정의되지 않은 변수에 관한 기본값을 줄 수 있다. (Javascript 문법)

### 총정리

어떤 prop들을 받을 수 있는 Btn 컴포넌트를 만들어 복붙할 필요가 없다.
prop들은 렌더링되고 있는 Btn 컴포넌트의 부모로부터 전달되고 있다. text와 fontSize 두 prop을 받고 있고 이 Btn 컴포넌트의 이 prop들에 접근할 수 있는 방법은 Btn 컴포넌트 함수의 첫 번째 인자 안에서 가능하다. 첫 번째 인자 안에서 전달된 모든 prop들을 하나의 오브젝트로서 받는다.
