---
sidebar_position: 2
---

# Troubleshooting

## Verify API error codes
If the Verify API returns a non-null `error_code` value then use the following table to determine what went wrong:

| `error_code` | Meaning               | Description                                                           |
|--------------|-----------------------|-----------------------------------------------------------------------|
| 6678         | Missing Parameters    | Your request is missing required parameter(s).                        |
| 8534         | Invalid Parameters    | The value of one or more parameters is invalid.                       |
| 6910         | Bad Credentials       | Your API key and/or secret are incorrect, invalid or disabled.        |
| 4115         | Identity Not Verified | Your identity is not verified.                                        |
| 3622         | Insufficient Funds    | You don't have sufficient funds.                                      |
| 6804         | The code inserted does not match the expected value     |  |
| 3124         | Too Many Requests     | Trying to send a code to a number for more than 5 times in 10 minutes.|
| 2773         | Internal Error        | An error has occurred in the platform whilst processing this message. |
