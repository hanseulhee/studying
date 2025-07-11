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

[502 Bad Gateway](/Linux/502_BadGateway.md)

[명령어 게임](./#리눅스-명령어)

[관련 메모장](./#관련-메모장)

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
hostname # 호스트네임 조히
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
