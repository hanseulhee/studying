# 비동기

## fetch

대표적인 비동기 요청방식 중 하나인 Ajax의 방식 중 하나로 promise 객체를 리턴한다.

## promise

pending, fulfiled, rejected 중에 하나의 상태를 가짐

fetch에 대한 상태

fetch 함수가 request를 보내고 response를 정상적으로 받았을 때 fulfiled 상태가 된다.

작업 성공결과는 콜백의 파라미터로 넘어옴

**then은 pending 상태에서 fulfiled가 될 때 실행할 콜백을 등록하는 메소드**다. (또다른 promise 객체를 리턴함)

1. promise 객체를 리턴하는 경우

동일한 작업 결과를 갖게됌 (rejected? rejected, fulfiled? fulfiled)

2. promise 객체가 아닌 값을 리턴하는 경우

Promise 객체 이외에 숫자나 문자열, 일반 객체 등을 리턴하는 경우에는 fulfilled 상태이며 리턴된 값을 작업 성공 결과로 가진 Promise 객체를 리턴한다.

### rejected 상태

rejected 상태가 되면 then 메소드 두번째 파라미터에 쓰면 됌
