// requires
const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const mysql = require('mysql2/promise');

// app
const app = express()
const port = 80
const upload = multer()

// midlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(upload.array())

// get version
app.get('/api/version', (req, res) => {
  res.send('Version of api 1.0.0')
})

// get last 5 approved reviews
app.get('/api/reviews', async (req, res) => {
    try {
        const rows = await getApprovedReviews()

        sendJson(res, rows.map(row => ({ 
            comment: row.comment, 
            rating: row.rating 
        })))
    } catch (e) {
        sendError(res, e)  
    }
})

// post review
app.post('/api/reviews', async (req, res) => {
    try {
        const { comment, rating } = req.body
        const rows = await createReview(comment, rating)

        sendJson(res, rows.affectedRows > 0)
    } catch (e) {
        sendError(res, e)  
    }
})

// listen to port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// create review
async function createReview(comment, rating) {
    const connection = await createConnection();

    const [rows, fields] = await connection.execute(
        'INSERT INTO reviews (comment, rating) values (?, ?)', 
        [comment, +rating],
    );

    return rows
}

// get reviews
async function getApprovedReviews(limit = 5) {
    const connection = await createConnection();

    const rows = await connection.query(
        'SELECT * FROM reviews WHERE approved = 1 ORDER BY id DESC LIMIT ?', 
        [limit]
    )

    return rows[0]
}

// create connection
async function createConnection() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST, 
        user: process.env.DB_USER, 
        password: process.env.DB_PASSWORD, 
        database: process.env.DB_DB
    });

    return connection
}

// send json
function sendJson(res, data) {
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(data))
}

// send error
function sendError(res, error) {
    res.setHeader('Content-Type', 'application/json')
    console.error(error)
    res.status(500).send(JSON.stringify({ 
        error: 'Something broke!!!' 
    }))
}