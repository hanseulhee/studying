# 프론트엔드개발

### 목차

[Vue.js 시작하기](#1)

[Vue.js 기초 1](#2)

[Vue.js 기초 2](#3)

[목록 출력](#4)

[값 변경과 화면 갱신](#5)

[modifier.docx](#6)

<div id = "1">

### Vue.js

<b>{{ 속성명 }}</b>

앱의 속성값이 출력된다.

앱의 속성값이 변경되면 즉시 다시 출력된다.

<b>v-model="속성명"</b>

v-model 지시자는 입력 태그와 앱의 속성을 양방향으로 연결한다.

입력 태그에 입력된 값이 수정되면, 연결된 앱의 속성에 그 값이 즉시 대입된다.

연결된 앱의 속성값이 바뀌면, 입력 태그의 값도 즉시 바뀐다.

EX) [hello.html](../%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C%EA%B0%9C%EB%B0%9C/PJ/frontend/hello/hello.html)

title 속성에 연결된 input 태그가 두개일 때 두 input 태그 중 하나에 값을 입력하면, 입력된 값이 앱의 title 속성에 즉시 대입된다.

앱의 title 속성의 값이 변경되면 변경된 값이 title 속성과 연결된 input 태그들에 즉시 채워지고. {{title}} 부분에도 출력된다.

EX) [hello2.html](../%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C%EA%B0%9C%EB%B0%9C/PJ/frontend/hello/hello2.html)

```html
   <div id="app">
      <h1>checkbox</h1>
      <p>{{ value }}</p>
      <hr />
      <input type="checkbox" v-model="value" />
    </div>
    <script type="text/javascript">
      let app = {
        data() {
          return { value: false };
        },
      };
```

체크박스는 앱의 value 속성에 양방향으로 연결된다.
이 체크박스의 체크 상태가 바뀌면 체크 상태 true/false 값이 앱의 value 속성에 즉시 대입된다.

체크박스가 체크되면 앱의 value 속성에 true 값이 대입되고 체크가 꺼지면 앱의 value 속성에 false 값이 대입된다.

EX) [checkbox1.html](../%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C%EA%B0%9C%EB%B0%9C/PJ/frontend/hello/checkbox1.html)

v-model 지시자는 양방향 연결이다.

두개의 체크박스가 있다면 두 체크박스 중의 하나가 체크 상태가 바뀌면 체크 상태 true/false 값이 앱의 value 속성에 즉시 대입되고 앱의 value 속성 값이 바뀌면 나머지 체크 박스의 체크 상태도 따라서 바뀐다.

EX) [checkbox2.html](../%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C%EA%B0%9C%EB%B0%9C/PJ/frontend/hello/checkbox2.html)

```html
<select v-model="choice">
  <option>yellow</option>
  <option>green</option>
  <option>blue</option>
  <option>red</option>
</select>
```

select 태그는 앱의 choice 속성에 양방향으로 연결된다. select 태그에서 <b>선택된 항목이 바뀌면 선택된 항목이 앱의 choice 속성에 대입된다.</b>

앱의 choice 속성 값이 바뀌면 그 값에 따라 select 태그에서 선택된 항목이 즉시 바뀐다.

EX) [select1.html](../%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C%EA%B0%9C%EB%B0%9C/PJ/frontend/hello/select1.html)

```html
<input type="text" v-model="choice" />
<select v-model="choice">
  <option>yellow</option>
  <option>green</option>
  <option>blue</option>
  <option>red</option>
</select>
```

input 태그와 select 태그 둘 다 choice 속성에 양방향으로 연결되어 있다. select 태그에서 선택 항목을 변경하면, 그 값이 즉시 input 태그에도 채워진다. input 태그에 값을 입력하면 그 값이 앱의 choice 속성에 즉시 대입된다.

input 태그에 값을 입력하면 그 값과 일치하는 select 항목이 즉시 선택되고 일치하는 select 항목이 없는 경우 select 태그는 아무것도 선택되지 않은 상태가 된다.

EX) [select2.html](../%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C%EA%B0%9C%EB%B0%9C/PJ/frontend/hello/select2.html)

```html
<select v-model="choice">
  <option>yellow</option>
  <option>green</option>
  <option>blue</option>
  <option>red</option>
</select>
<div>
  <label> <input type="radio" value="yellow" v-model="choice" />yellow </label>
  <label> <input type="radio" value="green" v-model="choice" />green </label>
  <label> <input type="radio" value="blue" v-model="choice" />blue </label>
  <label> <input type="radio" value="red" v-model="choice" />red </label>
</div>
```

select 태그와 input type = "radio" 태그들이 모두 속성에 양방향으로 연결되어 있다. select 태그에서 선택 항목을 변경하면 그 값에 해당하는 radio 태그가 즉시 선택된 상태가 된다.

radio 태그들 중 하나를 선택하면, 그 radio 태그의 value 값이 앱의 choice 속성에 즉시 대입된다.

그리고 앱의 choice 속성과 일치하는 select 항목이 즉시 선택된다.

EX) [radio1.html](../%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C%EA%B0%9C%EB%B0%9C/PJ/frontend/hello/radio1.html)

### 요약

<b>{{ 속성명 }}</b>

앱의 속성 값이 출력된다. 앱의 속성 값이 변경되면 즉시 다시 출력된다.

<b>v-model = "속성명"</b>

v-model 지시자는 입력 태그와 앱의 속성을 양방향으로 연결한다.

입력 태그에 입력된 값이 수정되면 연결된 앱의 속성에 그 값이 즉시 대입된다. 연결된 앱의 속성 값이 바뀌면 입력 태그의 값도 즉시 바뀐다.

[연습 문제](../%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C%EA%B0%9C%EB%B0%9C/PJ/frontend/hello/form1.html)

<div id = "2">

### v-show, v-if

```html
<div id="hello" v-show="value">Hello Vue.js</div>
```

이 div 태그는 앱의 value 속성 값이 true 이면 보이는 상태가 되고, false 이면 보이지 않는 상태가 된다.

체크 박스를 끄면, 앱의 value 속성 값이 false 가 되고, 이 div 태그는 보이지 않는 상태가 된다.

체크 박스를 켜면, 앱의 value 속성 값이 true 가 되고, 이 div 태그는 보이는 상태가 된다.

EX) [checkbox3.html](../%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C%EA%B0%9C%EB%B0%9C/PJ/frontend/hello/checkbox3.html)

```html
<div id="hello" v-if="value">Hello Vue.js</div>
```

이 div 태그는 앱의 value 속성 값이 false면 제거되고 true면 다시 생성된다.

<b>v-show 지시자는 태그의 보이는 상태만 변경</b>하고 <b>v-if 지시자는 태그를 제거하고 다시 생성</b>한다.

따라서 보이고 보이지 않는 상태가 <b>빈번하다면 v-show 지시자</b>를 사용하는 것이 좋다.

보이고 보이지 않는 상태 변경이 아주 드물다면 <b>화면에 보이지 않을 때 태그가 제거되어 메모리를 차지하지 않는 v-if</b>지시자가 좋다.

EX) [checkbox4.html](../%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C%EA%B0%9C%EB%B0%9C/PJ/frontend/hello/checkbox4.html)

### 요약

<b>v-show</b> 지시자의 값이 true에 해당하는 값이면 그 태그는 보이는 상태가 되고 false에 해당하는 값이면 그 태그는 보이지 않는 상태가 된다.

보이고 보이지 않는 상태 변경이 <b>빈번하다면 v-show 지시자를 사용하는 것이 좋다.</b>

<b>v-if</b> 지시자의 값이 true에 해당하는 값이면 그 태그는 다시 생성되어 보이는 상태가 되고 false에 해당하는 값이면 그 태그는 메모리에서 제거되어 보이지 않는 상태가 된다.

보이고 보이지 않는 상태 변경이 <b>아주 드물다면 화면에 보이지 않을 때 태그가 제거되어 메모리를 차지하지 않는 v-if 지시자를 사용하는 것이 좋다.</b>

### v-bind

```html
<div id="app">
  <h1>radio</h1>
  <p>{{ visible }}</p>
  <hr />
  <label> <input type="radio" value="true" v-model="visible" /></label>
  <label> <input type="radio" value="false" v-model="visible" /></label>
  <div id="hello" v-if="visible">Hi</div>
</div>
<script type="text/javascript">
  let app = {
    data() {
      return { visible: false };
    },
  };
  Vue.createApp(app).mount("#app");
</script>
```

위와 같은 코드는 다시 false 라디오 버튼을 선택해도, 녹색 div 버튼의 상태가 변경되지 않는다.

-> 처음엔 visible 앱 속성의 값이 false이기 때문에 안보이는 것이다.

```html
<label> <input type="radio" value="true" v-model="visible" /></label>
```

이 라디오 버튼을 클릭했을 때 앱의 visible 속성에 대입되는 값은 "true" 문자열이다. HTML tag 애트리뷰트의 값은 자바스크립트 표현식으로 해석되지 않고 문자열로 해석된다.

앱의 visible 속성의 값이 "true" 문자열이면 v-if="visible" 이 부분의 조건식은 true로 해석된다.

```html
<label> <input type="radio" value="false" v-model="visible" /></label>
```

이 라디오 버튼을 클릭했을 때 앱의 visible 속성에 대입되는 값은 "false" 문자열이다.
앱의 visible 속성의 값이 "false" 문자열이면 v-if="visible" 이 부분의 조건식은 true로 해석된다.

왜냐하면 자바스크립트 조건식에서 null, undefined, NaN, 0, ""이 아닌 값은 true로 해석되기 때문이다.

그래서 녹색 div 태그가 보이는 상태가 된다.

```html
<label> <input type="radio" v-bind:value="true" v-model="visible" /></label>
<label> <input type="radio" v-bind:value="false" v-model="visible" /></label>
```

HTML 애트리뷰트의 값은 문자열로 해석된다. 그런데, HTML 애트리뷰트 앞에 <b>v-bind: 지시자</b>를 붙이면 그 애트리뷰트의 값은 자바스크립트 표현식으로 해석된다.

<b>value="true"</b>에서 value는 HTML 애트리뷰트이므로 이 애트리뷰트의 값은 "true" <b>문자열로 해석</b>된다.

<b>v-bind:value="true"</b>는 v-bind: 지시자가 붙어있으므로 이 애트리뷰트 값은 javascript 코드에서 true로 해석된다.
즉 이 애트리뷰트의 값은 <b>boolean 타입의 true이다.</b>

### 요약

Vue 지시자의 이름은 v- 으로 시작한다.

HTML tag 애트리뷰트는 v-로 시작하지 않는다.

HTML 애트리뷰트의 값은 javascript 표현식으로 해석되지 않고 문자열로 해석된다.

HTML 애트리뷰트 이름에 <b>v-bind:</b> 지시자를 붙여주면 그 애트리뷰트 값은 javascript 표현식으로 해석된다.

v-bind:value="true" value 값은 boolean 타입 true 이다.

v-bind:value='true' value 값은 boolean 타입 true 이다.

v-bind:value="'true'" value 값은 문자열 타입 'true' 이다.

v-bind: 대신 : 만 붙여도 된다.

v-bind:value="true"

:value="true"

### v-on:click

```html
<label> <button type="radio" v-on:click="show">보이기</button></label>
<label> <button type="radio" v-on:click="hide">감추기</button></label>
<script type="text/javascript">
  let app = {
    data() {
      return { visible: false };
    },
    methods: {
      show() {
        this.visible = true;
      },
      hide() {
        this.visible = false;
      },
    },
  };
  Vue.createApp(app).mount("#app");
</script>
```

<button type="button" v-on:click="show">보이기</button>

이 버튼이 클릭되면 show 메소드가 호출된다.

<button type="button" v-on:click="hide">감추기</button>

이 버튼이 클릭되면 hide 메소드가 호출된다.


v-on:click="show"

@click="show"

v-on: 대신 @ 문자를 사용해도 된다.


EX) [button1.html](../%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C%EA%B0%9C%EB%B0%9C/PJ/frontend/hello/button1.html)




<button type="button" v-on:click="hide" v-show="visible">감추기</button>

앱의 visible 속성 값이 true 일 때만 이 버튼이 화면에 보인다.

<button type="button" v-on:click="show" v-show="!visible">보이기</button>

앱의 visible 속성 값이 false 일 때만 이 버튼이 화면에 보인다.

느낌표 문자는 javascript의 not 연산자이다.


보이지 않는 상태에서 감추기 버튼은 불필요하고, 보이는 상태에서 보이기 버튼은 불필요하다.

불필요한 버튼이 화면에 보이지 않는 것이 좋다.


EX) [button2.html](../%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C%EA%B0%9C%EB%B0%9C/PJ/frontend/hello/button2.html)


### v-bind:disabled

<button type="button" v-on:click="show" v-bind:disabled="visible">보이기</button>

앱의 visible 속성 값이 true 일 때 이 버튼은 비활성화 상태가 된다.

<button type="button" v-on:click="hide" v-bind:disabled="!visible">감추기</button>

앱의 visible 속성 값이 false 일 때 이 버튼은 비활성화 상태가 된다.

disabled 는 표준 HTML 애트리뷰트이다.

표준 HTML 애트리뷰트 앞에 v-bind: 접두어를 붙여야, 그 값이 javascript 표현식으로 인식된다.

v-bind: 접두어를 붙이지 않으면, 그 값은 평범한 문자열로 인식된다.


### 요약

v-show="조건식"

조건식이 true 이면 이 태그가 보이고, false 이면 보이지 않는다.

보이고 보이지 않는 상태 변경이 빈번하다면, v-show 지시자를 사용하는 것이 좋다.

v-show="i >= 3"

i 값이 3 이상일 때만 이 태그가 보인다.

v-if="조건식"

조건식이 false 이면 이 태그가 메모리에서 제거되고, true 이면 다시 생성된다.

보이고 보이지 않는 상태 변경이 아주 드물다면,

화면에 보이지 않을 때 태그가 제거되어 메모리를 차지하지 않는 v-if 지시자가 좋다.

v-if="role == 'admin'"

role 속성 값이 'admin' 문자열 일 때만 이 태그가 생성된다.

v-bind:애트리뷰트="값"

HTML 애트리뷰트의 값은 문자열로 해석된다.

그런데, HTML 애트리뷰트 앞에 v-bind: 접두어를 붙이면, 그 값은 javascript 표현식으로 해석된다.

v-bind: 대신 : 만 붙여도 된다.

value="3"

value 값은 "3" 문자열이다.

v-bind:value="3"

value 값은 숫자 3 이다.

:value="3"

value 값은 숫자 3 이다.

value="3 + 2"

value 값은 "3 + 2" 문자열이다.

v-bind:value="3 + 2"

value 값은 숫자 5 이다.

value="title"

value 값은 "title" 문자열이다.

v-bind:value="title"

value 값은 title 속성의 값 이다.

disabled="visible"

disabled 값은 "visible" 문자열이다.

v-bind:disabled="visible"

disabled 값은 visible 속성의 값 이다.


v-bind:disabled="조건식"

조건식의 값이 true 이면, 이 태그는 비활성화된 상태가 되고,

false 이면, 이 태그는 활성화된 상태가 된다.

메소드 정의

methods: {

메소드이름(파라미터목록) {

메소드 본문

},

메소드이름(파라미터목록) {

메소드 본문

}

}

v-on:click="메소드이름"

이 태그가 클릭되면 메소드가 호출된다.

v-on:click="메소드이름(파라미터값)"

이 태그가 클릭되면 메소드가 호출되고, 이때 파라미터 값이 전달된다.

v-on:click="메소드이름" 대신 @click="메소드이름" 해도 된다.



[연습문제](../%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C%EA%B0%9C%EB%B0%9C/PJ/frontend/hello/empty1.html)

