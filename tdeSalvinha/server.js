const { randomUUID } = require('crypto')
const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

let pasteis = []

fs.readFile('mocks/pasteis.json', 'utf-8', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    pasteis = JSON.parse(data)
  }
})

app.use(express.json())

app.get('/', (req, res) => {
  res.send('/')
})

// CREATE pasteis
app.post('/pasteis', (req, res) => {
  const { name, price } = req.body

  const pastel = {
    id: randomUUID(),
    name: name,
    price: price,
  }

  pasteis.push(pastel)

  pastelFile()

  res.send(pastel)
})

// READ pasteis
app.get('/pasteis', (req, res) => {
  res.send(pasteis)
})

// READ ONE pastel
app.get('/pasteis/:id', (req, res) => {
  const { id } = req.params

  const pastel = pasteis.find((pastel) => pastel.id === id)

  res.send(pastel)
})

// UPDATE ONE pastel
app.put('/pasteis/:id', (req, res) => {
  const { id } = req.params
  const { name, price } = req.body

  const pastelIndex = pasteis.findIndex((pastel) => pastel.id === id)

  produc2ts[pastelIndex] = {
    ...pasteis[pastelIndex],
    name,
    price,
  }

  pastelFile()

  res.send(pasteis[pastelIndex])
})

// DELETE pastel
app.delete('/pasteis/:id', (req, res) => {
  const { id } = req.params

  const pastelIndex = pasteis.findIndex((pastel) => pastel.id === id)

  pasteis.splice(pastelIndex, 1)

  pastelFile()

  res.send({ message: 'pastel removed' })
})

const pastelFile = () => {
  fs.writeFile('mocks/pasteis.json', JSON.stringify(pasteis), (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('pastelInserted')
    }
  })
}

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})
