```ts
import express from 'express';

const app = express();
const router = express.Router();

// anytime we're building a full stack application you need to get data from the client side and
// the only way to get data from the client side is that we have to get it from the request.body object

// we have to tell Express to parse JSON from incoming request bodies
app.use(express.json()); handles request.body

let cars = [
  { id: 1, make: 'Toyota', model: 'Camry', year: 2022, price: 28000 },
  { id: 2, make: 'Tesla', model: 'Model S', year: 2023, price: 25000 },
  { id: 3, make: 'Ford', model: 'F-150', year: 2021, price: 35000 },
];

app.get('/', (req, res) => {
    res.send('Hello from the Cars API!');
});

router.get('/', (req, res) => {
    res.send('All cars');
})

// GET car by ID
router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const car = cars.find((car) => car.id === id);

    if (!car) return res.status(404).send('Car not found');

    res.json(car);
});

router.post('/', (req, res) => {
    res.send('New car');
})

router.put('/:id', (req, res) => {
    res.send('Update car');
});

router.delete('/:id', (req, res) => {
    res.send('Delete car');
});

router.get('/:id', (req, res) => {
    res.send('Get car');
});

app.use('/api/v1', router);

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));



```
