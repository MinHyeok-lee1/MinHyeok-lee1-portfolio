# n2server

Next.js + Nestjs 기반의 통합서버

## 관련 문서

- [n2server 매뉴얼](https://github.com/ByunMooYoung/n2server)
- [front-end 매뉴얼](https://github.com/ByunMooYoung/n2server/tree/main/front-end)
- [back-end 매뉴얼](https://github.com/ByunMooYoung/n2server/tree/main/back-end)
- [models 매뉴얼](https://github.com/ByunMooYoung/n2server/tree/main/models)

## 구성

n2server는 다음과 같이 3종의 모듈로 구성된다.

- front-end: UI 페이지 구성을 담당
- back-end: DB 접근 등의 API 제공을 담당
- models: 데이터 모델 클래스들이 위치함

## 모듈별 매뉴얼

각 모듈별 매뉴얼은 각 모듈의 README.md파일을 참고한다.

## 요약 설명

### 데이터 모델 개발 및 이용

n2server에서는 단일 데이터 모델 클래스를 CreateDTO, UpdateDTO, Schema로 혼용할 수 있다. 데이터 모델 클래스의 구현은 back-end 개발자가 메인으로 담당하며, 구현된 클래스를 front-end 개발자들이 이용할 수 있도록 제공해야 한다. 이를 위해 models 모듈을 운영한다.

models 모듈은 front-end에 구현된 데이터 모델 클래스를 참조하여 ts파일을 컴파일하고 models/dist 폴더에 결과물을 배치한다.

## 로컬 개발 서버

개발 편의를 위해 PC환경의 개발 서버를 사내 LAN망에 구축하여 사용함.

- LAN망에 구축된 서버는 동적 사설 IP를 가지며 사내에서만 접속이 가능함
- 서버의 IP는 자동 할당 되며 가끔씩 변경될 수 있다.

### 새로운 개발자 추가

로컬 개발 서버에 새로운 개발자를 추가할 경우 다음과 같은 절차로 진행한다.

- 해당 사용자가 사용할 Port를 결정함
- 예를 들어 8000번대 Port를 사용할 경우 8000(font-end), 8001(back-end), 8022(ssh)의 포트를 사용함
- ufw(ubuntu firewall)을 통해 Port를 allow함
- 해당 개발자용 디렉토리를 생성하고 n2server 소스를 git clone
- front-end, back-end의 .env 파일 설정 및 라이브러리 설치
- ssh 포트 추가: sshd_config 파일에 포트 추가
- front-end 포트 추가: .env 파일에 DESTINATION_PORT에 back-end용 포트 설정. package.json 파일에 script 항목에 새로운 포트 추가
- back-end 포트 추가: .env 파일의 SV_PORT에 back-end용 포트 설정

## ssh key 생성 및 등록법

### Github

SSH 키 생성

```bash
cd ~/.ssh
ssh-keygen -t rsa -b 4096 -C "mk@mklc.co.kr"
eval $(ssh-agent -s)
ssh-add ~/.ssh/id_rsa
```

생성된 키를 Github의 settings/SSH keys 항목에 추가함

정상등록 여부 확인

```bash
ssh -T git@github.com
```

## 배포 관련

### forever를 통한 백그라운드 실행

forever를 이용하면 front-end와 back-end를 백그라운드로 실행할 수 있다. 각 서버의 package.json 파일에 정의를 참고하여 백그라운드 실행과 종료가 가능하다.

백그라운드 실행

```
npm run forever:start
```

백그라운드 실행 종료

```
npm run forever:stop
```

next.js 기반인 front-end의 경우 백그라운드 실행을 해도 포트가 반환되지 않아 재시작시 사용중인 포트라는 에러와함께 서버가 중지되는 문제가 있다. 포트를 물고있는 node 프로세스를 직접 찾아 종료해야한다.

```
lsof -i TCP:3000
kill -9 pid번호
```

## Docker 명령어

모든 컨테이너 삭제

```
sudo docker stop $(docker ps -a -q)
sudo docker rm -f $(docker ps -aq)
```

사용하지 않는 이미지 삭제

```
sudo docker image prune
```

모든 이미지 삭제

```
sudo docker rmi $(docker images -q)
```

### ECR을 통한 Docker 이미지 관리

ecs용 context 생성

mkecscontext란 이름을 가지는 ecs타입의 컨텍스트 생성

```
sudo docker context create ecs mkecscontext
```

생성된 컨텍스트 확인

```
sudo docker context ls
NAME                TYPE                DESCRIPTION                               DOCKER ENDPOINT               KUBERNETES ENDPOINT   ORCHESTRATOR
default *           moby                Current DOCKER_HOST based configuration   unix:///var/run/docker.sock                         swarm
mkecscontext        ecs
```

생성한 컨텍스트 사용

```
sudo docker context use mkecscontext
```

ecr 로그인용 토큰 발급

- region: ECR 리전
- password-stdin: ECR 기본 URL

```
aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin 617699280027.dkr. ecr.ap-northeast-2.amazonaws.com
WARNING! Your password will be stored unencrypted in /home/dev/.docker/config.json.
Configure a credential helper to remove this warning. See
https://docs.docker.com/engine/reference/commandline/login/#credentials-store

Login Succeeded
```

ecs용 도커 이미지들 빌드

```
docker-compose --file docker-compose.ecs.yml build
```

빌드한 이미지를 ecr에 업로드(push)

```
docker-compose --file docker-compose.ecs.yml push
```

업로드에 성공하는 AWS ECR 콘솔에서 업로드된 이미지들을 확인할 수 있다.
