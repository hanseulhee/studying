## Linux

[명령어 게임](./#리눅스-명령어)

[User]()

[Group]()

[File]()

[Directory]()

[Tar]()

[Network]()

[VIM]()

---

## 리눅스 명령어

[리눅스 명령어](http://overthewire.org/wargames/bandit/)

### level 0

로그인하기

```shell
ssh bandit0@bandit.labs.overthewire.org -p 2220 # ssh 사용자이름@주소 -p 포트번호

banit0 # 비밀번호
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
