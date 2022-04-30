# 프론트엔드개발

###  목차

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