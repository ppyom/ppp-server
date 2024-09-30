# PPP

[PPP 클라이언트](https://github.com/ppyom/ppp) 작업 중 API를 사용할 때 Key 노출을 막기 위해 만든 서버입니다.

## ▶️ 실행 방법

1. `npm i`를 입력해 필요한 라이브러리를 설치합니다.

   - express, dotenv, cors
   - nodemon, prettier

2. `.env` 파일을 생성하고 아래 내용을 입력합니다.

   ```bash
   CLIENT_URL=# client url
   PORT=# 사용할 port 번호
   HOLIDAY_API_KEY=# 한국천문연구원(공휴일) API Key
   SARAMIN_API_KEY=# 사람인 API Key
   ```

3. `npm run dev`를 입력해 서버를 실행합니다.
