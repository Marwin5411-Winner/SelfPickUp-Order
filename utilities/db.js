//Connect to Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blackorder', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('db connection established');
}).catch(err => console.log(err));
//Check for DB errors
