module.exports = mongoose => {
    const schema = mongoose.Schema({
        user_id: Number,
        cart_item: [String]
    })

    schema.method("toJSON", function() {
        const { _v, _id, ...object } = this.Object()
        object.id = _id
        return object
    })

    const Order = mongoose.model("orders", schema)
    return Order

}