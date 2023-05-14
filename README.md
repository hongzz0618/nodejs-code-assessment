# nodejs-code-assessment

![backend_test](./backend_test.png)
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

## Auth

### Get user jwt (expires in 30 seconds)

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

#### Token that does not expire for testing purposes

    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2ODQwNTI4Njh9.x7h0_X8yi2GZ7unmSEmoQnEg_kX0jnTi3JY9ubf4ij4

## Client

### Get user data filtered by user id (user, admin)

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

### Get user data filtered by user name (user, admin)

#### Request

`GET /client/username/:username`

    curl -i -H 'Accept: application/json' -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2ODQwNTcyMzQsImV4cCI6MTY4NDA1NzI2NH0.Dj5qjo-a3to88YpVfOCKefZsjAykUXxGh72cmH9kYts" http://localhost:3000/client/username/britney

#### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 120
    ETag: W/"78-93BD+gmRKk09kJUbA0x8s2a89T0"
    Date: Sun, 14 May 2023 10:10:18 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    {"id":"a0ece5db-cd14-4f21-812f-966633e7be86","name":"Britney","email":"britneyblankenship@quotezart.com","role":"admin"}

### Get the user linked to a policy number (admin)

#### Request

`GET /client/policy/:id`

    curl -i -H 'Accept: application/json' -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2ODQwNTcyMzQsImV4cCI6MTY4NDA1NzI2NH0.Dj5qjo-a3to88YpVfOCKefZsjAykUXxGh72cmH9kYts" http://localhost:3000/client/policy/64cceef9-3a01-49ae-a23b-3761b604800b

#### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 120
    ETag: W/"78-fKYCgA4K0/SH8tSJYH/zgLlv0aY"
    Date: Sun, 14 May 2023 12:15:25 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    {"id":"e8fd159b-57c4-4d36-9bd7-a59ca13057bb","name":"Manning","email":"manningblankenship@quotezart.com","role":"admin"}

## Policy

### Get the list of policies linked to a user name (admin)

#### Request

`GET /policy/username/:username`

    curl -i -H 'Accept: application/json' -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2ODQwNTcyMzQsImV4cCI6MTY4NDA1NzI2NH0.Dj5qjo-a3to88YpVfOCKefZsjAykUXxGh72cmH9kYts" http://localhost:3000/policy/username/britney

#### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 22965
    ETag: W/"59b5-bhcqvQ8sH6vbSXvblrXi52VLMKA"
    Date: Sun, 14 May 2023 11:21:08 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    [{"id":"7b624ed3-00d5-4c1b-9ab8-c265067ef58b","amountInsured":399.89,"email":"inesblankenship@quotezart.com","inceptionDate":"2015-07-06T06:55:49Z","installmentPayment":true,"clientId":"a0ece5db-cd14-4f21-812f-966633e7be86"},{"id":"6f514ec4-1726-4628-974d-20afe4da130c","amountInsured":697.04,"email":"inesblankenship@quotezart.com","inceptionDate":"2014-09-12T12:10:23Z","installmentPayment":false,"clientId":"a0ece5db-cd14-4f21-812f-966633e7be86"},{"id":"25202f31-fff0-481c-acfd-1f3ff2a9bcbe","amountInsured":2579.16,"email":"inesblankenship@quotezart.com","inceptionDate":"2016-05-03T04:58:48Z","installmentPayment":false,"clientId":"a0ece5db-cd14-4f21-812f-966633e7be86"},{"id":"15b4430d-96f8-468e-98c0-3caaf8b0b3b6","amountInsured":645.65,"email":"inesblankenship@quotezart.com","inceptionDate":"2016-01-15T02:56:48Z","installmentPayment":true,"clientId":"a0ece5db-cd14-4f21-812f-966633e7be86"},{"id":"0df3bcef-7a14-4dd7-a42d-fa209d0d5804","amountInsured":705.14,"email":"inesblankenship@quotezart.com","inceptionDate":"2014-05-11T12:28:41Z","installmentPayment":false,"clientId":"a0ece5db-cd14-4f21-812f-966633e7be86"}
    ...
    ]
