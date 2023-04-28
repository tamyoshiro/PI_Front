const { Schema, model } = require('mongoose');

const TestSch = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        surname: {
            type: String, 
            required: true
        }
    }
)

module.exports = model('Test', TestSch, 'test');