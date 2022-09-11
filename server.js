const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

//add express.js middleware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//get test route




// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

//function that will start express.js server on port 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});