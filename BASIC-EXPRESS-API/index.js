const express = require("express")
const app = express()
const port = 3333

app.use(express.json())

app.get("/tshirt", (request, response) => {
    response.status(200).send({
        tshirt: "t-shirt",
        size: "large"
    })
})

app.post("/tshirt/:id", (request, response) => {
    const { id } = request.params
    const { logo } = request.body
    if (!logo) {
        response.status(418).send({ message: "We need a logo!"})
    }
    response.send({
        tshirt: `tshirt with your ${logo} and ID of ${id}`,
    })
})

app.listen(
    port,
    () => console.log(`Server started on http://localhost:${port}`)
)