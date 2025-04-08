const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');


app.use(cors({
  origin: 'http://localhost:5173' 
}));

app.use(express.json());

app.use('/api', userRoutes);


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
