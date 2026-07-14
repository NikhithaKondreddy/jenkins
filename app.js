const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());        

app.get('/', (req, res) => {
    res.send('jenkins poll scm test 2');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 