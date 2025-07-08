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
