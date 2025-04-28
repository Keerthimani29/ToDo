const mongoose = require('mongoose');
mongoose.set('debug', true);
const PASSWORD = "CD9jdd37Tub8r5WO"
const DATABASE_NAME = 'sample_mflix';
const CONNECTION_URI = `mongodb+srv://keerthimani:<CD9jdd37Tub8r5WO>@todo.dsplugm.mongodb.net/?retryWrites=true&w=majority&appName=todo`
async function main() {
    await mongoose.connect(CONNECTION_URI, {
        dbName: DATABASE_NAME,
        user: 'keerthimani',
        pass: PASSWORD
    });
}

main().then(() => {
    console.log('MongoDB connected successfully!');
}).catch(console.log); // Handle connection error