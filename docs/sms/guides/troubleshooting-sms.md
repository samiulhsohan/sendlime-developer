---
sidebar_position: 4
---

# Troubleshooting SMS
When you send an SMS, the SMS API returns a JSON response:

```json
{
  "success": true,
  "result": {
    "message_id": "580000908Q23PJCF",
    "from": "SendLime",
    "to": "8801287119821",
    "price": "0.19",
    "status": "accepted",
    "network": "47002"
  },
  "error_code": null,
  "error_message": null
}
```

The `error_code` field tells you if the message was successfully queued for sending. Null indicates success; a non-null value means something went wrong.

:::info

A `error_code` of `null` in the API response does not indicate that SendLime delivered your message.

:::

:::caution

As per the BTRC guidelines, promotional messages have to be in Bangla.

:::

## SMS API error codes
If the SMS API returns a non-null `error_code` value then use the following table to determine what went wrong:

| `error_code` | Meaning               | Description                                                           |
|--------------|-----------------------|-----------------------------------------------------------------------|
| `null`       | Success               | The message was successfully accepted for delivery.                   |
| 6678         | Missing Parameters    | Your request is missing one of the required parameters: `to`, `text`, `api_key`, or `api_secret`. |                                                                   |
| 8534         | Invalid Parameters    | The value of one or more parameters is invalid.                       |
| 6910         | Bad Credentials       | Your API key and/or secret are incorrect, invalid or disabled.        |
| 4115         | Identity Not Verified | Your identity is not verified.                                        |
| 3622         | Insufficient Funds    | You don't have sufficient funds.                                      |
| 5779         | Message Too Long      | The message length exceeds the maximum allowed.                       |
| 2773         | Internal Error        | An error has occurred in the platform whilst processing this message. |
