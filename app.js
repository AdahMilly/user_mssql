const express = require("express")

const app = express()
const PORT = 8000
app.get('/', (request,response) => {
    response.send("<h1>Welcome to the user API</h1>")
})

app.listen(PORT, () =>  {console.log(`App listening on port ${PORT}`);})