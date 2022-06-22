const express = require('express') //express를 설치했기 때문에 가져올 수 있다.
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const { apply: applyController } = require('./controller');

app.get('/', (req, res) => {
    res.send('Hello World!!!')
})


// app.get('/', applyController.readAllApply);
// app.get('/:id', applyController.readApply);
// app.put('/:id', applyController.updateApply);
app.post('/apply', async (req, res) => {
    console.log(req.body),
        applyController.createApply(req);
})
// app.delete('/:id', applyController.deleteApply);

app.listen(4000)