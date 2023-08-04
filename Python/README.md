# python

**프로그래밍의 자료형**

정수, 소수, 문자열, 불린

**추상화**

복잡한 내용은 숨기고 주요 기능에만 신경 쓰자

**프로그래밍에서의 추상화**

- 변수

값을 저장하는 것

- 함수

명령을 저장하는 것

```python
def hello(): # 함수의 헤더
    print("Hello!")
    print("Welcome to Suwon")

hello()
```

**파라미터**
: 함수에 넘겨 주는 값

```python
def hello(name):
    print("Hello!")
    print(name)
    print("Welcome to Suwon")

hello("Chris")
```

**여러 개의 파라미터**

```python
def print_sum(a, b, c):
    print(a + b + c)

print_sum(7, 3, 2)
```

**return**
: 돌려준다

- 객체

## 숫자형

정수형과 정수형간의 연산은 모두 정수형으로 나온다.

```python
# 나머지
print(7 % 3) # 1

# 거듭제곱
print(2**3) # 2의 3제곱 -> 8
```

소수형과 소수형간의 연산은 모두 소수형으로 나온다.

```python
# 나머지
print(7.0 % 3.0) # 1.0

# 거듭제곱
print(2.0**3.0) # 8.0
```

소수형과 정수형간의 연산은 모두 소수형으로 나온다.

```python
# 나머지
print(7 % 3.0) # 1.0

# 거듭제곱
print(2.0**3) # 8.0
```

**나눗셈**

나눗셈은 정수형 정수형이어도 항상 소수형으로 나온다.

```python
print(7 / 2) # 3.5
print(6 / 2) # 3.0
print(7.0 / 2) # 3.5
print(6.0 / 2.0) # 3.0
```

**floor division** (버림 나눗셈)

버림 나눗셈을 할 때 하나라도 소수형이면 결과값은 소수형으로 나온다. -> 원래 결과 값에 .0만 붙는다.

```python
# floor division (버림 나눗셈)
print(7 // 2) # 3
print(8 // 3) # 2
print(8.0 // 3) # 2.0
print(8 // 3.0) # 2.0
print(8.0 // 3.0) # 2.0

# round (반올림)
print(round(3.1415926535)) # 3
print(round(3.1415926535, 2)) # 3.14
print(round(3.1415926535, 4)) # 3.1416
```

## 문자열

키보드로 쓸 수 있는 문자들을 표현하는 자료형

'슬희'

역슬래쉬를 써서 문자열안에 따옴표를 의도했음을 알려준다.

```python
print("I\'m\"excited\" to learn Python!")
```

## 형 변환 (Type Conversion)

값을 한 자료형에서 다른 자료형으로 바꾸는 것

```python
print(int(3.8)) # 3
print(float(3)) # 3.0
```

```python
print(int("2") + int("5")) # 7
print(float("1.1") + float("2.5")) # 3.6

print(str(2) + str(5)) # 25
```

```python
age = 23
print("제 나이는" + str(age) + "살입니다.")
```

```python
print(int("Hello World!")) -> 오류 (논리적으로 말이 안 됨)
```

**문자열 포매팅**

```python
year = 2023
month = 8
day = 1

print("오늘은 " + str(year) + "년 " + str(month) + "월 " + str(day) + "일입니다.")

print("오늘은 {}년 {}월 {}일입니다.".format(year, month, day))

date_string = "오늘은 {}년 {}월 {}일입니다."
print(date_string.format(year, month, day))
```

**format 다루기**

```python
num_1 = 1
num_2 = 2

print("{0} 나누기 {1}은 {2}입니다.".format(num_1, num_2, num_1 / num_2)) # 1 나누기 2은 0.5입니다.

# f는 float의 f
# :.2f -> 소수점 둘째자리로 반올림 해라
# 정수로 바꾸고 싶다면 :.0f
print("{0} 나누기 {1}은 {2:.2f}입니다.".format(num_1, num_2, num_1 / num_2)) # 1 나누기 2은 0.50입니다.
```

**f-string**

파이썬 버전 3.6부터 새롭게 나온 방식

```python
name = "슬희"
age = 23

print(f"제 이름은 {name}이고 {age}살입니다.") # 제 이름은 슬희이고 23살입니다.
```

```python
wage = 5  # 시급 (1시간에 5달러)
exchange_rate = 1142.16  # 환율 (1달러에 1142.16원)

# "1시간에 5달러 벌었습니다."
print("{}시간에 {}{} 벌었습니다.".format(1, wage * 1, "달러"))

# "5시간에 25달러 벌었습니다."
print("{}시간에 {}{} 벌었습니다.".format(wage, wage**2,"달러"))

# "1시간에 5710.8원 벌었습니다."
print("{}시간에 {:.1f}{} 벌었습니다.".format(1, exchange_rate*wage, "원"))

# "5시간에 28554.0원 벌었습니다."
print("{}시간에 {:.1f}{} 벌었습니다.".format(wage, wage*(exchange_rate*wage), "원"))
```

## 불 대수

진리값
true, false

### 불 대수의 연산

AND, OR, NOT

### 명제

참 또는 거짓이 확실한 문장

### AND 연산

x와 y가 모두 참일 때만 x AND y가 참이다.

```markdown
대한민국의 수도는 서울이다. AND 2는 1보다 크다.

-> 둘다 TRUE이므로 TRUE
```

### OR 연산

x와 y 중 하나라도 참이면 x OR y가 참이다.

둘 다 거짓이어야 FALSE다.

```markdown
대한민국의 수도는 서울이다. OR 대한민국의 수도는 제주도다.

-> 하나라도 TRUE이므로 TRUE
```

### NOT 연산

TRUE면 FALSE, FALSE면 TRUE로 만들어 준다.

```markdown
NOT 대한민국의 수도는 서울이다.

-> 대한민국의 수도는 서울이 아니다. -> FALSE

NOT 2는 1보다 작다.

-> 2는 1보다 작지 않다. -> TRUE
```

## 불린형

참과 거짓 (True, False)

```python
print(not not True) # not False -> True

print(not not False) # not True -> False
```

```python
print(7 == 7 or (4 < 3 and 12 > 10)) # True
```

```python
x = 3

print(x > 4 or not (x < 2 or x == 3)) # False
```

### 타입

```python
print(type(4 / 2))

# 4 / 2는 2.0이다. 따라서 <class 'int'>가 아니라 <class 'float'>가 출력된다.

# 나눗셈을 할 경우 항상 실수 값으로 돌려준다.
```

```python
def hello():
  print("Hello world!")

print(type(hello)) # <class 'function'>
print(type(print)) # <class 'builtin_function_or_method'>

# 함수도 하나의 자료형이다.
# builtin_function -> 내장되어 있는 함수
```

---

## 변수

등호 : 지정연산자

## return 문

- 값 돌려주기
- 함수 즉시 종료하기

```python
def square(x):
    print("함수 시작")
    return x * x
    print("함수 끝") # Dead Code (의미 없는 코드)

print(square(3))
print("Hello world")

# 함수 시작
# 9
# Hello world
```

## return VS print

return 하는 게 없으면 None

```python
def print_square(x):
    print(x * x)

def get_square(x):
    return (x * x)

get_square(3) # 그냥 암것도 없음
print(get_square(3)) # 9

print(print_square(3))
# 9
# None
```

## 옵셔널 파라미터

파라미터에 '기본값(default value)'을 설정할 수 있다. 이런 파라미터를 '옵셔널 파라미터(optional parameter)'라고 한다.

옵셔널 파라미터는 모두 마지막에 있어야 한다. 아래처럼 옵셔널 파라미터를 중간에 넣으면 오류가 발생한다.

```python
def myself(name, nationality="한국", age):
    print("내 이름은 {}".format(name))
    print("나이는 {}살".format(age))
    print("국적은 {}".format(nationality))


myself("슬희", 1)  # 기본값이 설정된 파라미터를 바꾸지 않을 때
print()
myself("슬희", "미국", 1)  # 기본값이 설정된 파라미터를 바꾸었을 때

# File "myself.py", line 1
     def myself(name, nationality = "한국", age):
               ^
SyntaxError: non-default argument follows default argument
```

## Syntactic Sugar

Syntactic Sugar 이란 자주 쓰이는 표현을 더 간략하게 쓸 수 있게 하는 문법이다.

```python
x = x * 2
x *= 2
```

## scope

변수가 사용 가능한 범위

로컬 변수, 글로벌 변수

```python
x = 2 # 글로벌 변수

def my_function():
    print(x)

my_function()
print(x)

# 2
# 2
```

```python
x = 2 # 글로벌 변수

def my_function():
    x = 3 # 로컬 변수
    print(x)

my_function()
print(x)

# 3
# 2
```

파라미터도 로컬 변수다.

## 상수 (constant)

절대로 바뀌지 않는 것

한눈에 구분하기 위해 이름은 무조건 대문자로 하자

## [PEP8](https://pep8.org/)

모든 변수와 함수 이름은 소문자로 쓰고, 여러 단어일 경우 _ (언더바)로 나눈다.
모든 상수 이름은 대문자로 쓰고, 여러 단어일 경우 _ (언더바)로 나눈다.

들여쓰기는 무조건 스페이스 4개를 사용한다.

함수 정의 위아래로 빈 줄이 두 개씩 있어야 한다.

괄호 바로 안에는 띄어쓰기를 하지 말아야 한다.
쉼표 앞에는 띄어쓰기를 하지 말아야 한다.

기본적으로는 연산자 앞뒤로 띄어쓰기를 하나씩 한다.

## if문

elif 문
