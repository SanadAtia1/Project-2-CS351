var mongoose = require('mongoose');
var Schema = mongoose.Schema; // Correct import

var productSchema = new Schema({ // Define the schema
    imagePath: { type: String, required: true }, 
    title: { type: String, required: true }, 
    description: { type: String, required: true }, 
    price: { type: Number, required: true }
});

module.exports = mongoose.model('Product', productSchema); // Export the model
