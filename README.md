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

### Get client by user id

#### Request

`GET /client/:id`

    curl -i -H 'Accept: application/json' http://localhost:3000/client/a0ece5db-cd14-4f21-812f-966633e7be86

#### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 120
    ETag: W/"78-93BD+gmRKk09kJUbA0x8s2a89T0"
    Date: Sat, 13 May 2023 19:56:02 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    {"id":"a0ece5db-cd14-4f21-812f-966633e7be86","name":"Britney","email":"britneyblankenship@quotezart.com","role":"admin"}
