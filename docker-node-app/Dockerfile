# npm을 사용할 수 있는 베이스 이미지로 실습 -> node 이미지
FROM node:10

# package.json의 종속성들을 웹에서 자동으로 받아 설치해주는 명령어.
# node.js 애플리케이션 생성 시 필요한 모듈을 내려받고 설치하는 역할
RUN npm install

# node 명령어 + 진입점이 되는 파일 이름
# 노드 웹 서버를 작동시키기 위해서는 node 명령어와 진입점이 되는 파일 이름을 입력해야 한다.
CMD ["node", "server.js"]
