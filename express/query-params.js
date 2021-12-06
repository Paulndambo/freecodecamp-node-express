const express = require("express");

const app = express()
const PORT = process.env.PORT || 4000

const { products } = require("./data")

const people = [{
        name: "Paul Ndambo",
        age: 23
    },
    {
        name: "Irene Wavinya",
        age: 22
    }
]

app.get("/", (req, res) => {
    res.send('<h1>Home Page</h1> <a href="api/products" >Products</a>')
})

app.get("/api/products", (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image }
    })
    res.json(newProducts)
})

app.get("/api/products/:productId", (req, res) => {
    const { productId } = req.params;
    const singleProduct = products.find((product) => product.id === Number(productId))

    if (!singleProduct) {
        return res.status(404).send("Product Not Found")
    }

    res.json(singleProduct)
})

app.get("/api/v1/query", (req, res) => {
    const { search, limit } = req.query;
    let sortedProducts = [...products]

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
        return res.status(200).json({ success: true, data: [] })
    }
    return res.status(200).json(sortedProducts)
})


app.all("*", (req, res) => {
    res.status(404).send("Resource Not Found")
})

app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`)
})