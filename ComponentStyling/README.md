# React component styling

- [Sass(SCSS)](#8)
- [CSS Module](#9)
- [styled-components](#10)

<div id="8"></div>

### Sass(SCSS)

[Sass(SCSS)](https://sass-lang.com/)의 궁극적인 목적은 코드의 재활용성을 올리고, 가독성을 올리는 등 CSS에서 보이던 단점을 보완하는 것이다.

```scss
$color: #F2F2F2;

.navbar {
  display: flex;
  flex-direction: row;
  &__logo {
    width: 200px;
  }
```

SCSS는 셀렉터 중첩기능이 가장 큰 장점이다. 또한 변수를 지정해 놓고 사용이 가능하다.

Sass와 SCSS는 기능은 동일하나 {}(중괄호)와 ;(세미콜론)의 유무다.

<div id="9"></div>

### CSS Module

CSS Module은 CSS 클래스가 중첩되는 것을 완벽히 방지할 수 있다. CSS Module을 사용하기 위해선 파일이름.module.css 형태로 만들어야 한다.
CSS 클래스를 중복되지 않게 작성하기 위하여 CSS 클래스 네이밍 규칙을 만들기 귀찮을 때 사용하면 좋다.

```js
import styles from "./Box.module.css";

function Box() {
  return <div className={styles.Box}>{styles.Box}</div>;
}
```

```scss
.Box {
  background: black;
}
```

className을 설정할 때에 위와 같이 import로 불러온 styles 객체 안에 있는 값을 참조해야 한다.

```scss
:global {
  .my-global-name {
  }
}
```

충격적인 것은 node-sass를 설치한다면 CSS Module은 Sass에서도 사용할 수 있다. 확장자를 .module.scss로 바꿔주면 된다.

<div id="10"></div>

### styled-components

[styled-components](https://styled-components.com/)는 현존하는 CSS in JS 관련 리액트 라이브러리 중에서 가장 인기 있는 라이브러리다.

```js
npm install --save styled-components
```

```js
import styled from "styled-components";

const Circle = styled.div`
  background: black;
  border-radius: 50%;
`;

function App() {
  return <Circle />;
}
```

styled-components를 사용하면 위와 같이 스타일을 입력함과 동시에 해당 스타일을 가진 컴포넌트를 만들 수 있다. 만약 div를 스타일링 하고 싶으면 styled.div, input을 스타일링 하고 싶으면 styled.input처럼 사용하면 된다.
