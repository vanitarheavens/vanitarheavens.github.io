const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use((req, res, next)=> {
    res.end('Hi from express.....');
})
app.listen(3000, () => {
console.log('Your Server is running on 3000');
});

// app.use('/add-product', (req, res, next) => {
//     res.write('Hi from the 1st middleware');
//     next();
// },(req, res, next) => {
//     res.write('This is an optional middleware');
//     next();

// });

app.use(express.urlencoded({
    extended: true
    }));

app.use('/add-product', (req, res, next) => {
    const html = `
    <!DOCTYPE html>
    <html>
    <body>
    <form action="/product" method="post">
    <input type="text" name="title"><br>
    <input type="submit" value="Submit">
    </form>
    </body>
    </html>`;
    res.send(html);
    });

    app.use('/product', (req, res, next) => {
        console.log(req.body); // { title: 'book' }
        console.log(req.body.fname, req.body.lname);
        res.end('Done.....');
        });