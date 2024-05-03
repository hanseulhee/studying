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

---

### 스트림

데이터 집합체를 반복적으로 처리한다.

컬렉션이 데이터의 **공간적 집합체**라면 스트림은 데이터의 **시간적 집합체**이다.

스트림은 데이터 원소에서 수행할 함수형 연산에 맞게 설계되어있음. 이에 스트림은 원소에 직접 접근하거나 조작하는 수단을 제공하지 않음

스트림은 **객체 스트림과 숫자 스트림**으로 구분된다.

스트림 연산의 결과가 Stream 타입이면 연속적으로 호출 가능. 스트림 연산의 연속 호출은 여러개의 스트림이 연결되어 스트림 파이프라인을 형성한다.

### 스트림 활용

**필터링**

입력된 스트림 원소 중에서 일부 원소를 걸러내는 중간 연산

filter(), distinct(), limit(), skip()

**매핑**

매개 값으로 제공된 람다식을 이용하여 입력 스트림의 객체 원소를 다른 타입 혹은 다른 객체 원소로 매핑

Map(), flatMap(), mapToObj(), mapToInt(), asLongStram(), boxed()

**리듀싱 연산**

리듀싱 연산이란 스트림 원소를 **단 하나의 값**으로 축약시키는 연산이다.

**컬렉터 연산**

컬렉터는 원소를 어떤 컬렉션에 수집할 것인지 결정하고 원소를 그룹핑하여 새로운 컬렉션을 구성한다.

**그룹핑**

키와 값의 쌍으로 이루어진 map 원소를 수집한다.

**파티셔닝**

조건에 따라 그룹핑하는 것을 의미한다.

---

(기말)

### 리듀싱 연산

리듀싱 연산은 스트림원소를 단 하나의 값으로 축약시키는 연산이다. (하나씩 줄이면서)

```java
reduce(0, (x, y) -> x + y)
```

기본은 Optional이 반환값이다.

```java
import java.util.List;
import java.util.Optional;
import java.util.OptionalInt;

public class Reduce1Demo {
    public static void main(String[] args) {
        List<Integer> numbers = List.of(3, 4, 5, 1, 2);

        int sum1 = numbers.stream().reduce(0, (a, b) -> a + b); // 0에다 하나씩 더해라
        int sum2 = numbers.stream().reduce(0, Integer::sum); // 반환값도 int
        int mul1 = numbers.stream().reduce(1, (a, b) -> a * b); // 초기값은 1

        System.out.println(sum1);
        System.out.println(sum2); // 15
        System.out.println(mul1); // 120

        Optional<Integer> sum3 = numbers.stream().reduce(Integer::sum); // Optional에서는 값을 반환하기 위해서는 get을 씀
        OptionalInt sum4 = numbers.stream().mapToInt(x -> x.intValue()).reduce(Integer::sum); // mapToInt를 통해 Integer로 변환
        Optional<Integer> mul2 = numbers.stream().reduce((a, b) -> a * b); // 초기값이 없기 때문에 Optional을 반드시 작성해야 한다.

        System.out.println(sum3.get());
        System.out.println(sum4.getAsInt()); //int 값 반환
        mul2.ifPresent(Util::print);
    }
}
```

### 컬렉터 연산

컬렉션을 변환시키는 것. 원소를 그룹핑하여 새로운 컬렉션(집합)을 구성한다.

```java
import java.util.IntSummaryStatistics;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Collect1Demo {
    public static void main(String[] args) {
        Stream<Nation> sn = Nation.nations.stream();

        Double avg = sn.collect(Collectors.averagingDouble(Nation::getPopulation));
        System.out.println("인구 평균 : " + avg);

        sn = Nation.nations.stream();
        Long num = sn.collect(Collectors.counting());
        System.out.println("나라 개수 : " + num);

        sn = Nation.nations.stream();
        String name1 = sn.limit(4).map(Nation::getName).collect(Collectors.joining("-")); // sn을 4개만 추려내라. map으로 Nation, getName을 string으로 변환시킨다. 하이픈을 넣어서 연결시켜라
        System.out.println("4개 나라(방법 1) : " + name1); // ROK-New Zealand-USA-China

        sn = Nation.nations.stream();
        String name2 = sn.limit(4).collect(Collectors.mapping(Nation::getName, Collectors.joining("+"))); // 콜렉터에 매핑을 사용해도 된다.
        System.out.println("4개 나라(방법 2) : " + name2); // ROK+New Zealand+USA+China

        sn = Nation.nations.stream();
        Optional<Double> max = sn.map(Nation::getPopulation).collect(Collectors.maxBy(Double::compare));
        System.out.println("최대 인구 나라의 인구 수 : " + max); // Optional[1355.7]

        sn = Nation.nations.stream();
        IntSummaryStatistics sta = sn.collect(Collectors.summarizingInt(x -> x.getGdpRank())); // summarizingInt는 int타입으로 통계 정보를 나타낸다.
        System.out.println(sta); // IntSummaryStatistics{count=8, sum=227, min=1, average=28.375000, max=63)
    }
}
```

### 그룹핑

스트림 원소를 그룹핑하여 새로운 컬렉션으로 만든다.

### 파티셔닝

조건에 따라 그룹핑한다.

(13장)

### 스트림

스트림이란 순서가 있는 데이터의 연속적인 흐름이다.
