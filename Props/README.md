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

### React Memo

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
