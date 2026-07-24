const http = require('http')
const fs = require('fs')
const path = require('path')

const boundary = '----TestBoundary123'
const productId = 'addd1d4a-f159-4eb8-aa4b-04bc759cd1b8'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzNGVmYzBiMy1lZmQyLTQwYWItYjNmNy1iZGQ0ODNiMGFhYmMiLCJlbWFpbCI6InZlbmRldXJAZ2xvYmFsbWFya2V0LmNvbSIsInJvbGUiOiJzZWxsZXIiLCJpYXQiOjE3ODQ4NTEwOTEsImV4cCI6MTc4NTQ1NTg5MX0.ppaO6-yRGsyuJHOg5Rv-KqApEAbEi02sgtwAzn6ZsCg'

const fileContent = Buffer.from([0xFF, 0xD8, 0xFF, 0xE0, 0x00, 0x10, 0x4A, 0x46, 0x49, 0x46, 0x00, 0x01])

let body = ''
body += `--${boundary}\r\n`
body += `Content-Disposition: form-data; name="images"; filename="test.jpg"\r\n`
body += `Content-Type: image/jpeg\r\n\r\n`

const bodyEnd = `\r\n--${boundary}--\r\n`

const bodyStart = Buffer.from(body)
const bodyEndBuf = Buffer.from(bodyEnd)
const fullBody = Buffer.concat([bodyStart, fileContent, bodyEndBuf])

const options = {
  hostname: 'localhost',
  port: 5001,
  path: `/api/products/${productId}/images`,
  method: 'POST',
  headers: {
    'Content-Type': `multipart/form-data; boundary=${boundary}`,
    'Authorization': `Bearer ${token}`,
    'Content-Length': fullBody.length
  }
}

const req = http.request(options, (res) => {
  let data = ''
  res.on('data', chunk => data += chunk)
  res.on('end', () => {
    console.log('Status:', res.statusCode)
    console.log('Body:', data)
    process.exit(0)
  })
})

req.on('error', e => {
  console.error('Error:', e.message)
  process.exit(1)
})

req.write(fullBody)
req.end()
