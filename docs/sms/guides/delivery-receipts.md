---
sidebar_position: 3
---

# Delivery receipts
When you make a successful request to the SMS API, it returns a json object. Ideally it will have a `success` of `true`, indicating success. But this does not mean that your message has reached your recipients. It only means that your message has been successfully queued for sending.

:::info

In most situations, a DLR is a reliable indicator that a message was delivered. However, it is not an absolute guarantee.

:::

## Understanding the delivery receipt
This is a typical DLR:
```json
{
  "message_id": "580000908Q23PJCF",
  "from": "SendLime",
  "to": "8801287119821",
  "price": "0.19",
  "status": "accepted",
  "network": "47002"
}
```

The most important field is `status` as this tell you whether your message was delivered and, if not, what went wrong.

## DLR status messages
The `status` field in the DLR tells you if your SMS was delivered successfully. Possible values are:

| `status`      | Description                                                            |
|---------------|------------------------------------------------------------------------|
| `accepted`    | Message has been accepted for delivery, but has not yet been delivered |
| `pending`     | Message is being sent                                                  |
| `delivered`   | Message has been delivered                                             |
| `expired`     | Message was held at downstream carrier's retry scheme and could not be delivered within the expiry time |
| `undelivered` | Message not delivered                                                  |
| `failed`      | Message not delivered                                                  |
| `rejected`    | Downstream carrier refuses to deliver message                          |
| `unknown`     | No useful information available                                        |