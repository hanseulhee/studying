## 502 Bad Gateway

리눅스에 아파치 설치 후 도메인 연동까지 술술 잘 풀리는 줄 알았으나 502 Bad Gateway가 나왔다.

삽질 과정을 기록해놓으려 한다..

---

### 에러 분석

502 Bad Gateway는 일반적으로 Nginx 같은 리버스 프록시(프론트 서버) 에서 발생하는 에러다.

Apache는 자체적으로 "502 Bad Gateway"라는 에러 메시지를 내지 않는다고 하는데, 나는 아무런 설정을 하지 않았었다.

```bash
cat /var/log/apache2/shhyi.store_error.log
```

또한 에러로그 실행 시 아무런 로그도 찍히지 않았다..

### 해결 방법

우선 현재 아파치가 제대로 동작하고 있는 지 확인을 해본다.

```bash
sudo systemctl status apache2
```

active(running)로 나와 정상적으로 동작함을 확인했다.

그럼 이제 Apache에 도메인을 연결해보자.

```bash
sudo nano /etc/apache2/sites-available/shhyi.store.conf
```

```bash
<VirtualHost *:80> # 해당 블록안에 있는 설정은 port 80 (HTTP 요청)으로 처리해라, 443의 경우 SSL(https://)은 port 443임

# shhyi.store 도메인 요청만 처리하겠다.
    ServerName shhyi.store
# 웹사이트의 루트 디렉토리 경로.
    DocumentRoot /var/www/html

# DocumentRoot에 대한 권한과 동작 방식을 설정하는 블록
    <Directory /var/www/html>
    # 디렉토리 안에서 아파치가 제공하는 기능을 다 끄겠다.
        Options None
    # .htaccess에 관한 여부, All은 무시하겠다를 의미함. react의 경우 All로 바꿔야 함 (.htaccess을 허용함)
        AllowOverride All
    # 누구나 접근을 허용한다. (안하면 403 뜸)
        Require all granted
    </Directory>

# 오류 내용 기록
    ErrorLog ${APACHE_LOG_DIR}/shhyi.store_error.log
# 누가 접속했는 지 기록
    CustomLog ${APACHE_LOG_DIR}/shhyi.store_access.log combined
</VirtualHost>
```

설정해놓은 파일을 활성화한다.

```bash
sudo a2ensite shhyi.store.conf # 사이트 활성화
sudo apache2ctl configtest # 아파치 설정 테스트
sudo systemctl reload apache2 # 아파치 재시작
```

그래도 502 Bad Gateway가 뜬다.

/var/www/html/index.html이 있는가?

```bash
ls -l /var/www/html/index.html
```

**있다.**

Apache가 실제로 80 포트에서 응답 중인가?

```bash
curl -I http://localhost # 200
```

**그렇다.**

여기서 생긴 의문점.

https로 접속하는데 왜 `<VirtualHost *:80>` 로 하는 가. `<VirtualHost *:443>` 해야하는 거 아닌가? 라는 생각이 들었지만 AWS에서 HTTPS를 설정했으므로 아파치에서는 SSL을 설정할 필요도, 443 포트를 열 필요도 없다. (AWS가 해주기 떄문)

### 요약

1. Apache 서버는 정상 작동 중이고

2. curl -I http://localhost 요청도 200 OK 응답함

3. 에러 로그도 없고, 정상 요청 로그도 찍힘

```bash
ubuntu@ip-172-31-7-202:~$ cat /var/log/apache2/shhyi.store_error.log

ubuntu@ip-172-31-7-202:~$ cat /var/log/apache2/shhyi.store_access.log
13.124.53.132 - - [10/Jul/2025:07:30:15 +0000] "HEAD / HTTP/1.1" 200 255 "-" "curl/8.5.0"
```

근데도 왜 502가 나는가?

# AWS 포트 설정때문!!

<img width="50%" height="50%" alt="Image" src="https://github-production-user-asset-6210df.s3.amazonaws.com/63100352/465030954-e4d94553-073b-427f-9d63-c3268dd5eae7.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250711%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250711T015000Z&X-Amz-Expires=300&X-Amz-Signature=5485599a0fa7f32fa94cbe60bb40f2bd21bda953381b3b76928aba65630e1e6d&X-Amz-SignedHeaders=host" />

해결완료
