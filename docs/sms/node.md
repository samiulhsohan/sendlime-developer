---
sidebar_position: 3
---

# Node.js

This is the Node.JS Server SDK for SendLime APIs.

## Installation

```js
npm install @sendlime/server-sdk
```

## Constructor

```js
const SendLime = require("@sendlime/server-sdk");

const sendLime = new SendLime({
  apiKey: "YOUR_API_KEY",
  apiSecret: "YOUR_API_SECRET",
});
```

### Properties

- apiKey - API Key from Comm API. (Required)
- apiSecret - API SECRET from Comm API. (Required)

## Send SMS

```js
sendLime.message
  .sendSms({
    text: "Hello World!",
    to: "88015******44",
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

### Properties

- text - SMS text content. (Required)
- to - Recipient mobile number. (Required)
- from - Registered brand/masking name. (Optional)

## Response

### On success

```js
{
  success: true,
  result: {
    message_id: '50000064******B3',
    from: '88096******44',
    to: '88015******44',
    price: '0.19',
    status: 'accepted',
    network: '47002'
  },
  error_code: null,
  error_message: null
}
```

### On error

```js
{
  success: false,
  error_code: 6910,
  error_message: 'Bad credentials',
  result: null
}
```
