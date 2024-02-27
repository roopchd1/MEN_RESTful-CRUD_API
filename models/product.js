const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let productSchema = new Schema(
{
    name: {type: String},
    description: {type: String},
    price: {type: Number},
    inStock: {type: Boolean},
    category: {type: String, enum: ['Electronics', 'Clothing', 'Books', 'Furniture', 'Other'] },
    brand: {type: String},
    tags: [{type: String}]
}

    //name: string
    //description: string
    //price: number
    //inStock: boolean
    //category: string
    //brand: string
    //tags:  Array<string>
);

module.exports = mongoose.model("product", productSchema);