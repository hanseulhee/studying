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
