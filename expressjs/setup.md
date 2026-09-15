```ts
import express from 'express';

const app = express();
const router = express.Router();

app.get('/', (req, res) => {
    res.send('Hello from the Cars API!');
});

router.get('/', (req, res) => {
    res.send('All cars');
})

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
