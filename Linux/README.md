## Linux

[리눅스에 대해](./#About-리눅스)

[User](./#User)

[Group](./#Group)

[File](./#File)

[Directory](./#Directory)

[Tar](./#Tar)

[Network](./#Network)

[VIM](./#VIM)

[Apache](./#Apache)

[Node.js](./#Nodejs)

[MySQL](./#MySQL)

[502 Bad Gateway](/Linux/502_BadGateway.md)

[programmers sql 문제풀이](./#programmers-sql-문제풀이)

[DB](./#DB)

[명령어 게임](./#리눅스-명령어)

[관련 메모장](./#관련-메모장)

[useradd VS adduser](./#useradd-VS-adduser)

---

## About 리눅스

### 운영체제란?

운영체제는 하드웨어와 소프트웨어를 연결하는 다리 역할

컴퓨터가 켜지면 가장 먼저 실행되는 프로그램이다.

이를 통해 시스템의 모든 기본 서비스를 제공하고 프로세스를 관리한다.

**운영체제 구성**

- 커널

커널을 통해 시스템의 모든 기본적인 작업을 관리한다.

하드웨어와 소프트웨어 사이의 통신을 담당하며, 사용자와 직접적인 상호작용을 하지 않고 백그라운드에서 실행된다.

- 쉘

쉘은 사용자와 커널 사이의 다리 역할을 한다.

사용자로부터 명령을 받아 커널에 전달하고, 그 결과를 사용자에게 출력한다.

**운영체제의 종류**

- windows
- macOS
- Linux

## 컴퓨터 구성요소

> 컴퓨터는 하드웨어와 소프트웨어로 구성된다.

### 하드웨어

컴퓨터를 구성하는 물리적인 부품들

**CPU(중앙처리장치)**

컴퓨터의 두뇌. 연산을 수행하고 명령을 실행한다.

**메모리**

프로그램과 데이터를 저장하는 장치 (RAM, 하드디스크)

**입출력장치**

키보드, 마우스, 모니터 등

**시스템버스**

위에서 말한 CPU, 메모리, 입출력장치 등의 통신을 담당한다.

### 소프트웨어

컴퓨터 위에서 실행되는 프로그램

**운영체제**

하드웨어를 관리하고 응용프로그램이 하드웨어와 상호작용할 수 있도록 지원한다.

**시스템 소프트웨어**

하드웨어와 직접 소통하는 프로그램 (운영체제도 시스템 소프트웨어에 포함)

**응용 소프트웨어**

사용자의 요구를 처리하는 프로그램

ex) vscode, 카톡, 게임 등등

## 리눅스에서 CPU/메모리 상태 확인하기

메모리 사용량 확인하기

```bash
free -h
```

cpu 정보 확인하기

```bash
lscpu
```

cpu 상세정보 조회

```bash
# 시스템의 CPU 정보를 담고있는 파일
cat /proc/cpuinfo

# 시스템 및 GPU의 다양한 통계를 담고있는 파일
cat /proc/stat
```

메모리 상세정보 조회

```bash
cat /proc/meminfo

# 총 메모리 용량 확인
cat /proc/meminfo | grep MemTotal

# 사용 가능한 메모리 용량 확인
cat /proc/meminfo | grep MemFree
```

실시간으로 시스템 상태(CPU 사용률, 메모리 사용량등)을 보여준다.

```bash
top
htop
```

앱이 사용한 CPU 사용량 확인하기

```bash
sudo apt install sysstat
mpstat
```

디스크 용량 확인하기

```bash
fdisk -l
```

## User

**사용자 분류**

- 루트 계정

모든 권한을 가진 사용자

UID가 0이며, 다른 계정을 생성하거나 권한을 부여하고 비밀번호를 바꿀 수 있음. 다른 계정에 UID 값을 0으로 변경한다면 관리자와 같은 권한을 갖게 된다.

시스템상 root 계정은 유일해야함

- 시스템 계정

리눅스 설치 시 기본으로 생성되는 계정

- 사용자 계정 (=일반 사용자)

실제 리눅스 사용자를 위한 계정

(시스템과 일반(일반) 사용자 사이에는 실질적인 기술적 차이가 없다)

```bash
id # 현재 사용자의 UID, GID. 그룹정보를 확인하는 명령어
id 사용자명 # 특정 사용자의 UID, GID. 그룹정보를 확인하는 명령어

users # 현재 호스트에 로그인되어 있는 모든 사용자 출력

# 현재 로그인한 사용자의 사용자명 출력
whoami
logname
```

**사용자 생성**

```bash
useradd 사용자명 # 사용자를 생성한다

cat /etc/passwd # 목록 조회. /etc/passwd : 시스템의 모든 사용자 정보가 기록된 파일
```

**특정 사용자 생성**

```bash
useradd -u UID 사용자명 # 특정 UID를 가진 사용자 생성

useradd -g 그룹명 사용자명 # 특정 그룹을 가진 사용자 생성

# 그룹
cat /etc/group # 전체 그룹목록 조회
cut -d: -f1 /etc/group # 전체 그룹목록 중 그룹명만 조회

# 여러 그룹에 할당 (쉼표 사이에 공백없이)
useradd -g 그룹명 -G 그룹1,그룹2 사용자명

id -gn 사용자명 # 사용자의 GID 확인

# UID와 그룹을 지정하여 사용자를 생성
useradd -u UID숫자 -g 그룹명 사용자명

# 사용자 설명 추가
usermod -c "설명입니다" 사용자명
grep 사용자명 /etc/passwd # 특정 사용자명 조회
```

**계정 패스워드**

```bash
passwd # 현재 사용자 패스워드 변경

sudo passwd 사용자명 # 사용자 패스워드 설정

sudo passwd -e 사용자명 # 사용자 패스워드 만료

sudo passwd -l 사용자명 # 사용자 패스워드 잠금 (로그인을 할 수 없게 만드는 것)
sudo passwd -u 사용자명 # 잠금 해제


sudo passwd -d 사용자명 # 사용자 패스워드 삭제

# 비밀번호 만료 정책
sudo passwd -n 최소사용기간 -x 최대사용기간 -w 만료 ?일 전부터 경고 메시지 표시 -i 비밀번호 만료 후 ?일간 로그인 안 하면 계정 잠금 사용자명
sudo chage -l 사용자명 # 만료정보 출력
```

**shell 변경**

```bash
sudo useradd -m -s 셸경로 사용자명 # 사용자 생성 시 셸 지정

sudo usermod -s 셸경로 사용자명 # 이미 존재하는 사용자 셸 변경
```

**계정 전환**

```bash
su 사용자명 # 다른 사용자의 권한으로 실행
```

**계정 삭제**

```bash
userdel 사용자명 # 계정 삭제 (삭제해도 홈디렉토리가 남아있음)
userdel -r 사용자명 # 계정 및 홈디렉토리도 삭제
```

**UID의 범위**

0 root (슈퍼유저)

1 ~ 999 시스템/서비스용 계정

1000 ~ 60000 일반 사용자 계정 (대부분 useradd로 생성 시 이 범위 사용)

65534 nobody (권한 없는 사용자 전용)

**user 관리 명령어**

useradd (생성) usermod (수정) userdel (삭제)

## Group

**group 관리 명령어**

groupadd (생성) groupmod (수정) groupdel (삭제)

```bash
getent group 그룹명 # 그룹 존재 여부 확인 (아무것도 안뜨면 없는 것)

sudo groupadd 그룹명 # 그룹 생성

sudo groupdel 그룹명 # 그룹 삭제
```

그룹 삭제 시 어떠한 사용자의 기본 그룹으로 설정되어있을 경우 해당 그룹을 바로 삭제할 수 없음. 해당 사용자의 기본 그룹을 다른 그룹으로 변경해야 함

```bash
sudo usermod -g 그룹명 사용자명
```

**그룹 참여**

```bash
newgrp 그룹명 # 현재 그룹 말고 새 그룹으로 전환
```

## File

```bash
ls -al # 파일의 상세정보
```

**cp: 복사**

```bash
cp 복사대상 새파일명 # 파일을 복사해 새로운 파일명으로 생성
cp 복사대상 디렉토리명 # 특정 디렉토리에 복사대상을 복사
```

**rm: 삭제**

```bash
rm 파일명 # 파일 삭제
rm -i 파일명 # 파일 사용자 확인

rm *확장자 # 특정 확장자로 끝나는 파일 전체 삭제
rm * # 모든 파일 삭제
```

**mv: 이동**

```bash
mv 파일명 /디렉토리명 # 특정파일을 특정 디렉토리로 이동
mv 파일명1 파일명2 /디렉토리명 # 여러개의 파일을 특정 디렉토리로 이동
```

**touch: 날짜변경, 파일 생성**

```bash
touch 파일명 # 파일명이라는 이름으로 파일 생성

touch -c 파일명 # 파일의 시간을 현재시간으로 갱신
```

**find: 검색**

```bash
find 경로 -name 파일명 # 특정 경로에서 파일명 검색
```

## Directory

```bash
pwd # 현재 작업중인 디렉토리 절대경로 출력
```

```bash
# 생성
mkdir 디렉토리명 # 디렉토리 생성
mkdir 디렉토리명1 디렉토리명2 # 디렉토리 여러개 생성

# 삭제
rmdir 디렉토리명
rmdir 디렉토리명1 디렉토리명2

# 복사
cp -r 복사할디렉토리 대상디렉토리

# 이동
mv 이동할디렉토리 대상디렉토리
```

디렉토리 삭제 시 하위 디렉토리가 없는 빈 디렉토리여야 가능함.

## Tar

```bash
tar -cvf 압축명.tar 폴더명or파일명 # tar로 묶기
tar -xvf 압축명.tar # 풀기
```

```bash
zip 압축명.zip 폴더명or파일명 # zip으로 압축
unzip 압축명.zip # 풀기
```

```bash
gzip 압축명.gz 폴더명or파일명 # gzip으로 압축
gzip -d 압축명.gz # 풀기

tar -zcvf 압축명.tar 폴더명or파일명 # tar과 함께 압축할 시
tar -zxvf 압축명.tar.gz # tar과 함께 풀기
```

## Network

```bash
sudo apt install net-tools
```

```bash
ip addr # ip 확인
ifconfig # ip 확인
```

```bash
route # 게이트웨이 주소 확인
netstat -r # 게이트웨이 주소 확인
```

```bash
hostname # 호스트네임 조회
```

```bash
cat /etc/resolv.conf # DNS 서버 확인
```

```bash
ping 호스트(ip주소혹은도메인명) # 네트워크 연결 상태 확인
```

ping은 네트워크 문제를 진단하거나 서버 가용성 및 네트워크 성능 테스트를 위해 사용한다.

## VIM

vim이란 터미널을 통해서 텍스트를 편집할 수 있는 에디터다.

**(vimtutor 명령어를 입력하면 vim 연습 내용이 나옴)**

vim에는 일반모드, 입력모드, 명령모드가 존재한다.

**일반모드**

**입력모드**

```bash
a #
i
s
o

x # 지우기
```

**명령모드**

esc를 누르면 명령모드다.

```bash
:w # 저장하기

:q # 종료하기
:q! # 깅제 종료하기

:wq # 저장하면서 종료하기
:wq! # 저장하면서 강제 종료하기
```

## Apache

아파치는 웹 서버용 소프트웨어 (= HTTP 웹서버). 리눅스 서버안에 설치되는 소프트웨어임.

멀티스레드방식이라 비동기 처리가 어렵고 아파치 자체가 무겁고 취약점도 많음.

**웹서버란**

클라이언트 (=웹 브라우저)로부터 HTTP 요청을 받아들이고 HTML 문서와 같은 웹페이지를 반환하는 컴퓨터 프로그램.

정적인 웹에서는 단순히 HTML만 있으면 되기에 아파치만 있으면 된다. 그러나 동적인 웹은 보통 php, MySQL을 연계해서 사용 (APM)

## Nodejs

nodejs란 자바스크립트로 서버를 구축하고 서버에서 자바스크립트가 작동되도록 해주는 런타임 환경

## MySQL

데이터를 기록하는 최종적인 곳은 표(=table)

표들을 그룹화 한 것을 데이터베이스. 즉, 스키마 (폴더화 한 것). 스키마는 서로 연관된 표들을 그룹화해준다.

이러한 스키마가 모여있는 곳을 데이터베이스 서버라고 한다. (mySQL == 데이터베이스)

**스키마**

```bash
# 생성
CREATE DATABASE shsql;

# 조회
SHOW DATABASES;

# shsql을 대상으로 명령을 시행한다
USE shsql
```

SQL(=Structured Query Language)

### 컬럼 생성

```bash
CREATE TABLE 테이블명(
    컬럼명 타입(타입에 맞게 숫자 설정)
)


컬럼명 타입(타입에 맞게 숫자 설정) NOT NULL # 값이 없는 것을 허용하지 않음
컬럼명 타입(타입에 맞게 숫자 설정) NULL # 값이 없는 것을 허용함
컬럼명 타입(타입에 맞게 숫자 설정) AUTO_INCREMENT # 자동으로 1씩 증가
```

### CRUD

**create**

```bash
INSERT INTO 테이블명 (테이블키) VALUES(테이블값);
# NOW() 는 현재 시간
```

<img width="674" height="130" alt="Image" src="https://github.com/user-attachments/assets/e35d7097-6621-40fe-874e-99bf52ecc93a" />

**read**

```bash
# 테이블의 전체 내용 조회
SELECT * FROM 테이블명;
```

```bash
# 특정 컬럼만 조회
SELECT 조회하고싶은컬럼 FROM 테이블명;
```

```bash
# 특정 데이터의 행만 조회
SELECT 조회하고싶은컬럼 FROM 테이블명 WHERE 특정키=특정데이터;
```

```bash
# 정렬
ORDER BY id DESC; # id 기준 정렬

ORDER BY id LIMIT 2; # 2개만 보고싶을 때
```

**update**

```bash
UPDATE 테이블명 SET 수정하고싶은키=수정데이터 WHERE 특정키=특정데이터;
```

**delete**

```bash
DELETE FROM 테이블명 WHERE 삭제하고자하는키=삭제하고자하는데이터;
```

**왜 관계형 데이터베이스가 필요한가?**

데이터가 중복되고 있다? 개선할 것이 있구나..!

**테이블명 수정**

```bash
RENAME TABLE 테이블명 TO 바꿀테이블명
```

### JOIN

나눠둔 테이블을 하나의 테이블로 결합하는 것

[SQL Joins Visualizer](https://sql-joins.leopard.in.ua/)

```bash
SELECT * FROM 테이블명1 LEFT JOIN 테이블명2 ON 어떻게합성될지에대한조건;

# topic 테이블과 author 테이블을 LEFT JOIN하여 관련 정보를 모두 조회
ex) SELECT * FROM topic LEFT JOIN author ON topic.author_id = author.id;

# topic 테이블의 id는 topic_id라는 이름으로 변경하고 topic.author_id와 author.id가 같으면 title, name, profile을 포함한 테이블을 만든다.
SELECT topic.id AS topic_id, title, name, profile FROM topic LEFT JOIN author ON topic.author_id = author.id;
```

**문법정리**

```sql
/*별칭 정하기*/
AS

/*컬럼 별칭*/
SELECT 컬럼명 AS 컬럼별칭
/*테이블 별칭*/
FROM 테이블명 AS 테이블별칭

/*날짜를 지정한 형식으로 출력*/
DATE_FORMAT(날짜, 형식)
/*예시) 2025-07-16*/
SELECT DATE_FORMAT(NOW(),'%Y-%m-%d');

/*WHERE절 연산자*/
AND
OR
IN
NOT

/*오름차순*/
ASC

/*내림차순*/
DESC
```

WHERE절 연산자에서 괄호를 사용하지 않으면 기본적으로 OR보다 AND연산을 먼저 평가한다.

그냥 JOIN은 내부적으로 INNER JOIN을 의미한다.

- INNER JOIN: 교집합
- LEFT JOIN: 왼쪽 테이블은 다 보여주고, 오른쪽은 조건에 맞는 것만 붙여줌
- RIGHT JOIN: 오른쪽 테이블은 다 보여주고, 왼쪽은 조건에 맞는 것만 붙여줌

**GROUP BY**

데이터를 그룹화하는 것

같은 값을 가진 행끼리 하나의 그룹으로 뭉쳐줌.

```sql
HAVING
```

GROUP BY 절에서 조건을 주려면 WHERE이 아닌, HAVING 절을 사용해야 한다.

**COUNT**

```sql
COUNT(*)
```

조회되는 데이터 개수 반환

**LIMIT**

```sql
LIMIT 재한갯수
```

**DISTINCT**

옆에 온 모든 컬럼을 고려하여 중복 제거한다.

```sql
DISTINCT 컬럼명
```

**IFNULL**

NULL을 반환할 때 다른 값으로 출력할 수 있도록 한다.

```sql
SELECT IFNULL(컬럼명, "NULL일경우대체값") FROM 테이블명
```

**COALESCE**

두 컬럼 중 한 값이 Null이라면 Null값이 아닌 값으로 대체되며 두값 모두 Null이라면 Null이 반환된다.

```sql
SELECT A, B, COALESCE(A, B)
FROM TABLE_A
```

**LIKE**

WHERE 절에서 문자열 검색을 위해 사용한다.

```sql
/*A로 시작하는 문자 찾기*/
SELECT 컬럼명
FROM 테이블명
WHERE 컬럼명 LIKE 'A%'

/*A로 끝나는 문자 찾기*/
LIKE '%A'

/*A를 포함하는 문자 찾기*/
LIKE '%A%'

/*앞의 두글자는 상관없이 뒤가 A인 것*/
LIKE '__A'

/*뒤의 한글자는 상관없이 앞이 A인 것*/
LIKE 'A_'
```

**IF**

```sql
IF(조건, 조건이 참일 때, 조건이 거짓일 때)

SELECT IF(1>0, "Yes", "No") /*Yes*/
```

**CASE**

조건을 여러가지 지정하고 싶을 때 사용한다.

```sql
CASE
    WHEN 조건 THEN True일경우값 ELSE False일경우값
```

ELSE 절이 없으면 NULL을 반환한다.

**ROUND**

지정한 자릿수까지 반올림해준다.

```sql
ROUND(깂, 반올림할위치)
```

반올림할 위치

0: 소수점 모두 반올림

1: 소수점 첫째자리까지 반올림

2: 소수점 두번째자리까지 반올림

**AVG**

지정된 컬럼의 평균값을 계산한다.

```sql
AVG(컬럼명)
```

**DATEDIFF**

시작일과 종료일 사이의 일수를 계산한다.

DATEDIFF는 종료일을 포함하지 않는다. +1을 추가해 종료일을 포함한 날짜 차이를 계산한다.

```sql
DATEDIFF(종료일, 시작일)
```

**IN**

IN 연산자 중에 하나라도 일치하는 것이 있으면 리스트에 조회된다.

**NOT IN**

NOT IN 연산자는 입력된 값을 제외한 나머지 데이터가 조회된다.

**비트연산자**

AND 연산 (&): 두 비트가 모두 1일 때만 1을 반환한다.

OR 연산 (|): 두 비트 중 하나라도 1이면 1을 반환한다.

XOR 연산 (^): 두 비트가 다르면 1, 같으면 0을 반환한다.

NOT 연산 (~): 비트를 반전시킨다.

## programmers sql 문제풀이

**SELECT**

[조건에 부합하는 중고거래 댓글 조회하기](./Programmers/SELECT/조건에부합하는중고거래댓글조회하기/index.sql)

[조건에 맞는 회원 수 구하기](./Programmers/SELECT/조건에맞는회원수구하기/index.sql)

[재구매가 일어난 상품과 회원리스트 구하기](./Programmers/SELECT/재구매가일어난상품과회원리스트구하기/index.sql)

[인기있는 아이스크림](./Programmers/SELECT/인기있는아이스크림/index.sql)

[역순 정렬하기](./Programmers/SELECT/역순정렬하기/index.sql)

[여러 기준으로 정렬하기](./Programmers/SELECT/여러기준으로정렬하기/index.sql)

[어린 동물찾기](./Programmers/SELECT/어린동물찾기/index.sql)

[아픈 동물찾기](./Programmers/SELECT/아픈동물찾기/index.sql)

[상위 n개 레코드](./Programmers/SELECT/상위n개레코드/index.sql)

[동물의 아이디와 이름](./Programmers/SELECT/동물의아이디와이름/index.sql)

[강원도에 위치한 생산 공장 목록출력하기](./Programmers/SELECT/강원도에위치한생산공장목록출력하기/index.sql)

[가장 큰 물고기 10마리 구하기](./Programmers/SELECT/가장큰물고기10마리구하기/index.sql)

[3월에 태어난 여성 회원 목록출력하기](./Programmers/SELECT/3월에태어난여성회원목록출력하기/index.sql)

[흉부외과 또는 일반외과 의사 목록 출력하기](./Programmers/SELECT/흉부외과또는일반외과의사목록출력하기/index.sql)

[12세 이하인 여자 환자 목록 출력하기](./Programmers/SELECT/12세이하인여자환자목록출력하기/index.sql)

[조건에 맞는 도서 리스트 출력하기](./Programmers/SELECT/조건에맞는도서리스트출력하기/index.sql)

[잔챙이 잡은 수 구하기](./Programmers/SELECT/잔챙이잡은수구하기/index.sql)

[특정 물고기를 잡은 총 수 구하기](./Programmers/SELECT/특정물고기를잡은총수구하기/index.sql)

**SUM, MAX, MIN**

[가격이 제일 비싼 식품의 정보 출력하기](./Programmers/SUM_MAX_MIN/가격이제일비싼식품의정보출력하기/index.sql)

[가장 비싼 상품구하기](./Programmers/SUM_MAX_MIN/가장비싼상품구하기/index.sql)

[동물 수 구하기](./Programmers/SUM_MAX_MIN/동물수구하기/index.sql)

[조건에 맞는 아이템들의 가격의 총합 구하기](./Programmers/SUM_MAX_MIN/조건에맞는아이템들의가격의총합구하기/index.sql)

[중복 제거하기](./Programmers/SUM_MAX_MIN/중복제거하기/index.sql)

[최댓값 구하기](./Programmers/SUM_MAX_MIN/최댓값구하기/index.sql)

[최솟값 구하기](./Programmers/SUM_MAX_MIN/최솟값구하기/index.sql)

**GROUP BY**

[고양이와 개는 몇마리있을까](./Programmers/GROUPBY/고양이와개는몇마리있을까/index.sql)

[동명 동물 수 찾기](./Programmers/GROUPBY/동명동물수찾기/index.sql)

[성분으로 구분한 아이스크림 총 주문량](./Programmers/GROUPBY/성분으로구분한아이스크림총주문량/index.sql)

**IS NULL**

[경기도에 위치한 식품 창고 목록출력하기](./Programmers/ISNULL/경기도에위치한식품창고목록출력하기/index.sql)

[나이 정보가 없는 회원 수 구하기](./Programmers/ISNULL/나이정보가없는회원수구하기/index.sql)

[이름이 없는 동물의 아이디](./Programmers/ISNULL/이름이없는동물의아이디/index.sql)

[이름이 있는 동물의 아이디](./Programmers/ISNULL/이름이있는동물의아이디/index.sql)

**JOIN**

[상품별 오프라인 매출구하기](./Programmers/JOIN/상품별오프라인매출구하기/index.sql)

[없어진 기록찾기](./Programmers/JOIN/없어진기록찾기/index.sql)

[조건에 맞는 도서와 저자리스트 출력하기](./Programmers/JOIN/조건에맞는도서와저자리스트출력하기/index.sql)

**STRING, DATE**

[특정 옵션이 포함된 자동차 리스트 구하기](./Programmers/STRING_DATE/특정옵션이포함된자동차리스트구하기/index.sql)

[한 해에 잡은 물고기 수 구하기](./Programmers/STRING_DATE/한해에잡은물고기수구하기/index.sql)

[루시와 엘라 찾기](./Programmers/STRING_DATE/루시와엘라찾기/index.sql)

[이름에 el이 들어가는 동물 찾기](./Programmers/STRING_DATE/이름에el들어가는동물찾기/index.sql)

[DATETIME에서 DATE로 형 변환](./Programmers/STRING_DATE/DATETIME에서DATE로형변환/index.sql)

## 명령어 게임

[리눅스 명령어](http://overthewire.org/wargames/bandit/)

### level 0

로그인하기

```bash
ssh bandit0@bandit.labs.overthewire.org -p 2220 # ssh 사용자이름@주소 -p 포트번호
```

### level 1

파일 확인 후 readme에 적힌 계정으로 재로그인

```bash
ls # 파일 조회

cat readme # 해당 파일내용 조회

exit # 로그아웃

ssh bandit1@bandit.labs.overthewire.org -p 2220
```

### level 2

파일 이름이 "-" 일 때, `cat -`을 하면 표준 입력을 의미하기 때문에 파일 내용이 안나오고 무한 대기상태임

```bash
cat ./- # ./ -> 현재 디렉토리
```

### level 3

파일 이름에 공백이 있을 경우. cat 명령어는 공백이 있으면 여러개의 인자로 분리되기 때문에 에러가 남

```bash
cat "spaces in this filename"
```

### level 4

숨겨진 파일 찾기

```bash
cd inhere # 디렉터리 안으로 들어가기
ls -la # 숨겨진 파일 조회

cat ...Hiding-From-You # 숨김 파일은 보통 이름이 . 으로 시작함
```

### level 5

10개 중 1개인 사람이 읽을 수 있는 파일을 찾아라

```bash
cd inhere

file ./* # 어떤 파일이 텍스트인 지 확인

cd ./-file07
```

### level 6

사람 읽을 수 있어야 하며 크기가 1033 바이트이고 실행 가능한 파일이면 안 되는 파일을 찾아라

```bash
cd inhere

# -type f : 파일만
# -size 1033c : 정확히 1033 바이트
# ! -executable : 실행 불가능한 것만
find . -type f -size 1033c ! -executable
```

### level 7

사용자 bandit7이 소유하고 있으며, bandit6 그룹의 소유이며 33 바이트인 파일을 찾아라

```bash
# / : 루트 디렉터리부터 전체 검색
# -user bandit7 : 소유자가 bandit7
# -group bandit6 : 그룹이 bandit6
# -size 33c : 정확히 33바이트 파일
# 2>/dev/null : 오류 제거 (접근 권한 에러를 없애기 위함)
find / -user bandit7 -group bandit6 -size 33c 2>/dev/null
```

## 기타

cat

: 파일 내용을 **있는 그대로** 출력하는 명령어

grep

: **특정 문자열이 포함된 줄만 골라서 출력**하는 명령어

서버 ip 확인하는 명령어

```bash
ip addr show # ens 아래있는 inet 옆 주소
```

MAX는 SELECT절이나 HAVING절에서만 가능하면 WHERE절에서는 사용할 수 없음

ON은 JOIN에 사용하는 키워드.

**ON vs WHERE**

ON은 조인 조건을 설정한다. 즉 두 테이블을 어떻게 연결할 지 결정하는 조건.

WHERE은 결과 필터링 조건이다. 조인이 완료되고 나서, 필터링할 조건이다.

**ON vs GROUP BY**

ON은 두 퍼즐을 붙이기 위한 조건.

GROUP BY는 조립된 퍼즐 중에서 비슷한 색끼리 모으기.

특정 컬럼 기준으로 집계(SUM, COUNT, AVG 등) 할 때는 왠만하면 GROUP BY를 같이 씀

**Null**

Null 비교는 IS NULL 혹은 IS NOT NULL만 가능하다

## useradd VS adduser

두 명령어는 사용자 계정을 만드는 명령어다.

### useradd

계정을 생성할 때 필요한 모든 옵션들을 명시해야한다.

옵션없이 아래와 같이 작성 시 단순히 계정만 생기며, 홈디렉토리나 비밀번호, 사용자 정보 등은 따로 설정해야한다. 또한 기본 쉘인 sh가 할당된다.

```bash
sudo useradd hanseulhee
```

### adduser

useradd와 달리 홈디렉토리나 비밀번호 사용자 정보 등을 자동으로 입력받게 해준다. 또한 사용자가 설정한 기본 쉘을 사용자의 쉘로 지정한다.

```bash
sudo adduser hanseulhee
```

즉, useradd는 순수하게 **계정** 만 만들어주고 비밀번호 등 사용자 관련 설정을 따로 설정해줘야한다.

adduser은 계정 생성 시 비밀번호 등을 입력받으며 사용자 관련 설정을 자동생성한다. 따라서 특별한 상황이 아니라면 adduser 를 쓰는 게 낫겠다.

## rwx

rwx는 리눅스에서 파일이나 디렉토리에 대한 접근 권한을 나타내는 문자 조합이다.

아래와 같은 명령어로 권한을 확인할 수 있다.

```bash
ls -l
```

r(읽기권한) w(쓰기권한) x(실행권한)

r : 4, w: 2, x: 2

(x권한이 있어야만 해당 디렉토리로 이동할 수 있다.)

파일권한은 4개로 등분하여 확인이 가능하다.

`파일의 종류 / 소유자(=파일을 만든 사람)의 권한 / 그룹 권한 / 타인의 권한(=global 권한 설정)`

따라서 777이라는 것은 사용자의 읽기, 쓰기, 실행권한을 모두 부여했다는 의미다.

파일: 기본은 666 (rw-rw-rw-)

디렉토리: 기본은 777 (rwxrwxrwx)

**파일의 종류**

d: 디렉토리, -: 일반 파일

```sql
/*권한이 전혀 부여되지 않음*/
---

/*권한이 전체 부여됨*/
rwxrwxrwx
```

### chmod

`chmod`를 사용하여 rwx 권한을 변경할 수 있다.

u(user), g(group), o(other), a(user, group, other)

- (권한주기), - (권한뺏기), = (권한덮어쓰기)

```bash
# 예시
chmod g-r filename # 그룹의 file 읽기권한 삭제
```

## DB

DB (DataBase): 데이터를 저장 및 관리하는 공간

DBMS(=DataBase Management System): 사용자의 명령을 DB에 전달하고, DB에서 받아온 응답을 사용자에게 전달해주는 사용자와 DB사이의 프로그램. 즉, DB를 관리하는 소프트웨어

ex) MYSQL, ORACLE

RDBMS(=Relational Database Management System): 데이터를 행과 열로 구성된 테이블 형태로 저장하는 DBMS

SQL은 RDBMS에 명령을 내리기 위한 언어다.

## 트랜잭션

하나의 작업 단위로 처리되는 데이터베이스들의 묶음.

즉, 여러개의 작업이 한꺼번에 실행되어야 할 때 사용한다.
ex) 은행 이체 시 돈을 빼는 작업과 돈을 넣는 작업이 모두 성공해야함

```bash
START TRANSACTION;

UPDATE accounts SET balance = balance - 100 WHERE user_id = 'A';
UPDATE accounts SET balance = balance + 100 WHERE user_id = 'B';

COMMIT;
```

둘다 실패하면 ROLLBACK

## KEY

유일성, 최소성

최소성은 키를 구성하는 속성들 중 꼭 필요한 최소한의 속성들로만 키를 구성하는 성질이다.

예를 들어 [학번, 이름, 성별]이 있을 때 유일성은 모두 만족하지만 학번만으로 학생을 구별할 수 있으므로 학번만 최소성을 만족한다.

### 슈퍼키 (Super key)

유일성 O, 최소성 X

서로 구분만 가능하다면 슈퍼기라 할 수 있다.

[학번, 이름, 성별]에서 학번은 중복되는 경우가 없기 때문에 슈퍼기라 한다.

이름, 성별은 슈퍼키가 될 수 없지만 [학번, 이름, 성별]은 학번이라는 슈퍼키가 있기 때문에 튜플은 슈퍼키로 사용할 수 있다.

슈퍼키는 하나 이상의 후보키 + 기타 속성 조합도 가능하다.
예: 학번, 학번+이름, 학번+성별 모두 슈퍼키.

### 후보키 (Candidate key)

유일성 O, 최소성 O

슈퍼키 중 최소성을 만족하는 키를 칭한다. 즉, 유일성과 최소성을 모두 만족하는 속성

[학번, 이름, 성별]의 경우 이름과 성별이 없어도 학번으로 학생 구별이 가능하기 때문에 학번은 최소성을 만족하며 후보키가 될 수 있다.

하나의 테이블은 여러 개의 후보키를 가질 수 있다. 예: 주민번호, 사번 등

### 기본키 (Primary key, PK)

후보키들 중 메인으로 선정되는 키 (유일성 O, 최소성 O)

기본키를 활용하면 하나의 테이블에서 고유한 행을 선택할 수 있다.

- 값의 변동이 잦은 후보키는 기본키로 부적절하다.

- NULL 값을 가질 수 있는 속성인 후보키는 부적절하다.

- 후보키 중 단순한 키를 기본키로 선택한다.

- 하나의 테이블에는 반드시 하나의 기본키만 존재한다.

### 외래키 (Foreign Key, FK)

다른 테이블의 '기본키'를 가리키는 column이다.

외래키는 두개의 테이블을 연결해주는 연결 다리역할을 한다. 즉, 데이터가 일관될 수 있도록 돕는 역할을 한다.

데이터 무결성(=데이터가 정확하고 일관성 있게 유지되는 상태)을 위해 필요하다.

예를 들어 매번 새롭게 발생하는 주문 정보에서 주문을 해도 변경되지 않는 데이터가 있다면 있을 필요가 없음 (엄청난 데이터 중복이 발생하기 때문)

### 복합키 (Composite key)

두개 이상의 컬럼을 묶어서 하나의 기본키로 지정하는 것.

### 대체키 (Alternate key)

기본키를 제외한 나머지 후보키들을 의미한다.

## DML

사용자가 데이터 넣고, 불러오고, 수정/삭제하는 모든 API는 DML로 구현됨

```sql
CREATE - 새로운 데이터베이스 관계 (테이블) View, 인덱스 , 저장 프로시저 만들기.
DROP - 이미 존재하는 데이터베이스 관계 ( 테이블 ), 뷰, 인덱스, 저장 프로시저를 삭제한다.
ALTER - 이미 존재하는 데이터베이스 개체에 대한 변경, RENAME의 역할을 한다.
TRUNCATE - 관계 ( 테이블 )에서 데이터를 제거한다. ( 한번 삭제시 돌이킬 수 없음.)
```

## DDL (Data Definition Language)

초기에 테이블을 만들고, 컬럼을 추가하거나 수정할 때 사용

[DDL 연습사이트](https://www.db-fiddle.com/)

```sql
SELECT - 검색(질의);
INSERT - 삽입(등록);
UPDATE - 업데이트(수정);
DELETE - 삭제;
```
