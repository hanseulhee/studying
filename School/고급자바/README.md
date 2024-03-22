# 고급 자바 프로그래밍

### 자바

제임스 고슬링

인터넷 환경에 적합하도록 오크를 새롭게 설계한 후 1995년 자바라는 이름으로 발표

구조 중립적, 객체 지향적, 이식성

**자바 8 - 함수형 프로그래밍, 람다식**

**함수형 프로그래밍이 자바 8부터 지원되었다.**

### 자바로 만들 수 있는 것

자바 애플리케이션

자바 애플릿
: 웹 브라우저 안에서 실행되는 작은 프로그램 (잘 안쓰임)

자바 서블릿

안드로이드 애플리케이션

가상 기계

> [hw1_1] Student 상속 과제

### 추상 메소드

무엇을 할지는 **선언**할 수 있지만 어떻게 할 지는 정의할 수 없음

선언만 함

```java
abstract 반환타입 메소드이름();
```

### 추상 클래스

상속을 위해서만 존재하는 클래스를 의미한다. 다른 애들한테 내려주기 위함

추상 메소드는 추상 클래스에 들어감 (포함은 되지만 없을 수도 있다.)

인스턴스 생성 불가함

일반 클래스랑 구조가 대부분 동일함 (but 추상 클래스는 abstract를 가지게 됌)

```java
abstract class 클래스이름 {
    // 필드
    // 생성자
    // 메소드
}
```

### 인터페이스

서로를 연결해주는 것

인터페이스가 맞아야 사용가능

인터페이스만 준수하면 통합에 신경 쓰지 않고 다양한 형태로 새로운 클래스를 개발할 수 있다.

코드 재사용에 좋음

다중 상속을 지원하지 않음. (왜냐면 같은 이름의 것들이 있을 수 있어서 모호성이 발생함)

but 다중상속과 비슷한 효과를 낼 수 있다.

무조건 public, abstract다. 그래서 생략도 가능함

만약 인터페이스에 추상 메소드가 추가된다면 자식들이 그것에 대한 구현을 해야함 -> 이에 default 메소드가 나오게 됌

```java
default 반환타입 디폴트메소드이름(){
    // 본체를 구성하는 코드
}
```

상속할 인터페이스가 여러개라면 쉼표로 연결한다.

```java
interface 자식인터페이스 extends 부모인터페이스1, 부모인터페이스2{}

class 자식클래스 implements 부모인터페이스1, 부모인터페이스2{}
```

### 인터페이스 응용

```java
public interface Controllable {
    default void repair() {
        show("장비를 수리한다.");
    }
    static void reset() {
        System.out.println("장비를 초기화한다.");
    }
    private void show(String s) {
        System.out.println(s);
    }
    void turnOn();
    void turnOff();
}

public interface RemoteControllable extends Controllable {
    void remoteOn();
    void remoteOff();
}

public class TV implements Controllable {
    @Override
    public void turnOn() {
        System.out.println("TV를 켠다.");
    }

    @Override
    public void turnOff() {
        System.out.println("TV를 끈다.");
}
}
```

### 인터페이스와 다형성

인터페이스도 클래스처럼 하나의 타입이므로 변수를 인터페이스 타입으로 선언 가능

인터페이스의 구현 클래스는 그 인터페이스의 자식 타입

### 중첩 클래스와 중첩 인터페이스

클래스 안에 클래스

인터페이스 안에 인터페이스

### 익명 클래스

익명 클래스는 중첩 클래스의 특수한 형태로 **코드가 단순**해지기 때문에 이벤트 처리나 스레드 등에서 자주 사용

한번 쓰이고 끝
