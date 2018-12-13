var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var owners = [
  {
    id: 1,
    name: 'Adam',
    pets: [
      {
        id: 1,
        name: 'Vera',
        type: 'Dog'
      },
      {
        id: 2,
        name: 'Felix',
        type: 'Cat'
      }
    ]
  },
  {
    id: 2,
    name: 'Kamilah',
    pets: [
      {
        id: 1,
        name: 'Doug',
        type: 'Dog'
      }
    ]
  }
]


// GET /api/owners
app.get('/api/owners', function (req, res, nextFn) {
  console.log('HTTP request sent to GET /owners')
  res.send(owners)
})

// GET /api/owners/:id
app.get('/api/owners/:id', function (req, res, nextFn) {
  console.log('HTTP request sent to GET /owners/:id')
  res.send(owners[req.params.id - 1])
})

// POST /api/owners
app.post('/api/owners', function (req, res, nextFn) {
  console.log('posting something to owners')
  res.send(owners)
})

// PUT /api/owners/:id
app.put('/api/owners/:id', function (req, res, nextFn) {
  console.log(req.params.id)
  res.send(owners[req.params.id - 1])
})

// DELETE /api/owners/:id
app.delete('/api/owners/:id', function (req, res, nextFn) {
  console.log('you deleted the owner at index: ' + (req.params.id - 1))
  res.send(owners[req.params.id - 1])
})

// GET /api/owners/:id/pets
app.get('/api/owners/:id/pets', function (req, res, nextFn) {
  console.log('fancy schmancy!  you want owner id: ' + (req.params.id - 1) + ' and their pets')
  res.send(owners[req.params.id - 1].pets)
})

// GET /api/owners/:id/pets/:petId
app.get('/api/owners/:id/pets/:petId', function (req, res, nextFn) {
  console.log('fancy schmancy!  you want owner id: ' + (req.params.id - 1) + ' and their pet id: ' + (req.params.id - 1))
  res.send(owners[req.params.id - 1].pets[req.params.id - 1])
})

// POST /api/owners/:id/pets
app.post('/api/owners/:id/pets', function (req, res, nextFn) {
  console.log('posting something to the pets of this owner')
  res.send(owners[req.params.id - 1])
})

// PUT /api/owners/:id/pets/:petId
app.post('/api/owners/:id/pets/:petId', function (req, res, nextFn) {
  console.log('putting a new pet for this owner')
  res.send(owners[req.params.id - 1].pets[req.params.id - 1])
})
// why is this one not working?!

// DELETE /api/owners/:id/pets/:petId
app.delete('/api/owners/:id/pets/:petId', function (req, res, nextFn) {
  console.log('they found a new home...')
  res.send(owners[req.params.id - 1].pets[req.params.id - 1])
})

app.listen(3000, function () {
  console.log('Pets API is now listening on port 3000...')
})
