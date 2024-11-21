const express = require('express');
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK with the service account
const serviceAccount = require('./path-to-your-service-account-file.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://<your-project-id>.firebaseio.com'
});

const app = express();
const port = 3000;

// Use JSON parsing middleware
app.use(express.json());

// Firestore reference
const db = admin.firestore();

// API endpoint to fetch data from Firestore
app.get('/api/data', async (req, res) => {
  try {
    const snapshot = await db.collection('your-collection').get();
    const data = snapshot.docs.map(doc => doc.data());
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from Firestore' });
  }
});

// API endpoint to add data to Firestore
app.post('/api/data', async (req, res) => {
  try {
    const { name, age } = req.body; // Example data
    const newDocRef = await db.collection('your-collection').add({ name, age });
    res.status(201).json({ message: 'Document created', id: newDocRef.id });
  } catch (error) {
    res.status(500).json({ error: 'Error adding data to Firestore' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
