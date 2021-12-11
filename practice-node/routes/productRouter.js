const express = require('express');
const options = {
"caseSensitive": false,
"strict": false
};
const router = express.Router(options);
router.get('/add-product', (req, res, next) => {
const html = `
<form action="/product" method="post">
<input type="text" name="title"><br>
<input type="submit" value="Submit">
</form>`;
res.send(html);
});
router.post('/product', (req, res, next) => {
console.log(req.body);
res.redirect('/add-product');
});
module.exports = router;