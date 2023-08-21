import { createServer, Model } from "miragejs"


createServer({
    models: {
        carts: Model,
    },

    seeds(server) {
        server.create("cart", { id: "1", name: "Underweight",plan:"Silver", price: 19.99, imageUrl: "./assest/gym1.jpg"})
        server.create("cart", { id: "2", name: "NormalWeight",plan:"Gold", price: 24.99, imageUrl: "./assest/gym1.jpg"})
        server.create("cart", { id: "3", name: "Overweight",plan:"Plantinum", price: 14.99, imageUrl: "./assest/gym1.jpg"})
 
    },

    routes() {
        this.namespace = "api"
        this.logging = true

        this.get("/carts", (schema, request) => {
            return schema.carts.all()
        })
        
        this.get("/cart/:id", (schema, request) => {
            const id = request.params.id
            return schema.carts.find(id)
        })
    }
})
