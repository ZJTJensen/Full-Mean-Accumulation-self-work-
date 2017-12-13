var mongoose = require('mongoose');
var controllers = require('../controllers/controllers.js');

module.exports = function(app) {
app.get('/all', (req, res) => {
  controllers.show(req, res);
});
app.post('/add', (req, res) => {
  controllers.save(req,res);
});
app.delete('/delete/:id', (req, res)=>{
  controllers.destroy(req,res)
})

}