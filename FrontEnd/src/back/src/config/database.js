const mongoose = require('mongoose');

mongoose.connect(process.env.VLM_MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log(`Connected to ${process.env.VLM_MONGODB_URL}`))
.catch(err => console.log(err));
console.log(process.env.VLM_MONGODB_URL);