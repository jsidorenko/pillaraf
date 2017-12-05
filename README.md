**Pillar Application Firewall**

Request example:
```
curl --header 'Content-type: application/json' \
  -X POST \
  --data '{"jsonrpc":"2.0","method":"eth_sendTransaction","params":[{
    "from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155",
    "to": "0xd46e8dd67c5d32be8058bb8eb970870f072445675",
    "gas": "0x76c0",
    "gasPrice": "0x9184e72a000",
    "value": "0x9184e72a",
    "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"
  }],"id":1}' \
  http://localhost:3000
```

In return you will get 32 Bytes transaction hash or 404 error if request is not valid.

Response example:
```
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0x7f9fade1c0d57a7af66ab4ead7c2eb7b11a91385"
}
```