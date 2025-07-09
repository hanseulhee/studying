## Linux

[User](./#User)

[Group](./#Group)

[File](./#File)

[Directory](./#Directory)

[Tar](./#Tar)

[Network](./#Network)

[VIM](./#VIM)

[명령어 게임](./#리눅스-명령어)

[관련 메모장](./#관련-메모장)

---

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

```shell
id # 현재 사용자의 UID, GID. 그룹정보를 확인하는 명령어
id 사용자명 # 특정 사용자의 UID, GID. 그룹정보를 확인하는 명령어

users # 현재 호스트에 로그인되어 있는 모든 사용자 출력

# 현재 로그인한 사용자의 사용자명 출력
whoami
logname

```

**사용자 생성**

```shell
useradd 사용자명 # 사용자를 생성한다

cat /etc/passwd # 목록 조회. /etc/passwd : 시스템의 모든 사용자 정보가 기록된 파일
```

**특정 사용자 생성**

```shell
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

```shell
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

```shell
sudo useradd -m -s 셸경로 사용자명 # 사용자 생성 시 셸 지정

sudo usermod -s 셸경로 사용자명 # 이미 존재하는 사용자 셸 변경
```

**계정 전환**

```shell
su 사용자명 # 다른 사용자의 권한으로 실행
```

**계정 삭제**

```shell
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

```shell
getent group 그룹명 # 그룹 존재 여부 확인 (아무것도 안뜨면 없는 것)

sudo groupadd 그룹명 # 그룹 생성

sudo groupdel 그룹명 # 그룹 삭제
```

그룹 삭제 시 어떠한 사용자의 기본 그룹으로 설정되어있을 경우 해당 그룹을 바로 삭제할 수 없음. 해당 사용자의 기본 그룹을 다른 그룹으로 변경해야 함

```shell
sudo usermod -g 그룹명 사용자명
```

**그룹 참여**

```shell
newgrp 그룹명 # 현재 그룹 말고 새 그룹으로 전환
```

## File

## Directory

## Tar

## Network

## VIM

## 명령어 게임

[리눅스 명령어](http://overthewire.org/wargames/bandit/)

### level 0

로그인하기

```shell
ssh bandit0@bandit.labs.overthewire.org -p 2220 # ssh 사용자이름@주소 -p 포트번호
```

### level 1

파일 확인 후 readme에 적힌 계정으로 재로그인

```shell
ls # 파일 조회

cat readme # 해당 파일내용 조회

exit # 로그아웃

ssh bandit1@bandit.labs.overthewire.org -p 2220
```

### level 2

파일 이름이 "-" 일 때, `cat -`을 하면 표준 입력을 의미하기 때문에 파일 내용이 안나오고 무한 대기상태임

```shell
cat ./- # ./ -> 현재 디렉토리
```

### level 3

파일 이름에 공백이 있을 경우. cat 명령어는 공백이 있으면 여러개의 인자로 분리되기 때문에 에러가 남

```shell
cat "spaces in this filename"
```

### level 4

숨겨진 파일 찾기

```shell
cd inhere # 디렉터리 안으로 들어가기
ls -la # 숨겨진 파일 조회

cat ...Hiding-From-You # 숨김 파일은 보통 이름이 . 으로 시작함
```

### level 5

10개 중 1개인 사람이 읽을 수 있는 파일을 찾아라

```shell
cd inhere

file ./* # 어떤 파일이 텍스트인 지 확인

cd ./-file07
```

### level 6

사람 읽을 수 있어야 하며 크기가 1033 바이트이고 실행 가능한 파일이면 안 되는 파일을 찾아라

```shell
cd inhere

# -type f : 파일만
# -size 1033c : 정확히 1033 바이트
# ! -executable : 실행 불가능한 것만
find . -type f -size 1033c ! -executable
```

### level 7

사용자 bandit7이 소유하고 있으며, bandit6 그룹의 소유이며 33 바이트인 파일을 찾아라

```shell
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
