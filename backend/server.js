const express = require('express');
const callEndingRoutes = require('./routes/callEndingRoutes');

const app = express();
app.use(express.json());

app.use('/api/v1/calls', callEndingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
