# API 연동

```js
$ npx create-react-app api-integrate
```

```js
$ npm install axios
```

**API**
[JSONPlaceholder](https://jsonplaceholder.typicode.com/users)

### axios

POST(데이터 등록) GET(데이터 조회) PUT(데이터 수정) DELETE(데이터 삭제)등의 메서드를 이용하여 데이터 관리한다.

```js
import axios from "axios";

axios.get("/users/1"); // 여기
```

get이 위치한 자리에 메소드 이름을 소문자로 넣으면 된다.

```js
axios.post("/users/1");
```

새로운 데이터를 등록하고 싶다면 이렇게 사용한다. 데이터를 등록할 때에는 두 번째 파라미터에 등록하고자 하는 정보를 넣을 수 있다.

```js
axios.post("/users", {
  username: "seulhee",
  name: "seulhee",
});
```

### try...catch

[try...catch](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/try...catch)는 예외를 처리하기 위한 구문이다.

```js
const fetchUsers = async () => {
  try {
    setError(null);
    setUsers(null);
    setLoading(true);
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(response.data);
  } catch (e) {
    setError(e);
  }
  setLoading(false);
};
```

try 안은 실행될 선언들이고 catch 안은 try 블록에서 예외가 발생하였을 때 실행될 선언들이다.