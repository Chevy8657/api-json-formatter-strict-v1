# JSON Formatter — STRICT v1

Stateless utility API that beautifies and formats JSON strings with standard 2-space indentation.

Deterministic, high-performance, single endpoint. No storage, no state, strict contract.

---

## Endpoint

POST `/v1/format`
{
  "output": {
    "hello": "world",
    "factory": "active"
  }
}
{
  "status": "ok"
}
Contract Guarantees
Stateless

Deterministic

No storage

No mutation

No side effects

Strict input/output contract

### Request
```json
{
  "input": {"hello":"world","factory":"active"}
}
