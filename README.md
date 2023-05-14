# nodejs-code-assessment

## Installation

```
git clone https://github.com/hongzz0618/nodejs-code-assessment
cd nodejs-code-assessment
npm i
```

## Usage

Run app:

```bash
$ npm start
```

Run tests:

```bash
$ npm test
```

## REST API

The REST API application is described below.

### Get user jwt (expires in 30 seconds)
#### Token that does not expire for testing purposes
    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2ODQwNTI4Njh9.x7h0_X8yi2GZ7unmSEmoQnEg_kX0jnTi3JY9ubf4ij4

#### Request

`GET /isuser/:email`

    curl -i -H 'Accept: application/json' http://localhost:3000/isuser/britneyblankenship@quotezart.com

#### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 176
    ETag: W/"b0-FERf1fk2XN/LmRJxYs6T28MC8Jw"
    Date: Sun, 14 May 2023 09:36:28 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    {"ok":true,"accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2ODQwNTcyMzQsImV4cCI6MTY4NDA1NzI2NH0.Dj5qjo-a3to88YpVfOCKefZsjAykUXxGh72cmH9kYts"}

### Get client by user id

#### Request

`GET /client/:id`

    curl -i -H 'Accept: application/json' -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2ODQwNTcyMzQsImV4cCI6MTY4NDA1NzI2NH0.Dj5qjo-a3to88YpVfOCKefZsjAykUXxGh72cmH9kYts" http://localhost:3000/client/a0ece5db-cd14-4f21-812f-966633e7be86

#### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 120
    ETag: W/"78-93BD+gmRKk09kJUbA0x8s2a89T0"
    Date: Sun, 14 May 2023 09:40:52 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    {"id":"a0ece5db-cd14-4f21-812f-966633e7be86","name":"Britney","email":"britneyblankenship@quotezart.com","role":"admin"}
