const mongoose= require('mongoose');
const Controllers=mongoose.model('Controllers');
module.exports = {

    show: function(req, res) {
        Controllers.find({}, (err, controllers)=>{
            if(err){
                return res.status(404).json(err);
            }
            return res.json(controllers)
         });
    },
    save: function(req, res) {
        const body = req.body;
        const controller = new Controllers(body);
        controller.save((err, success)=>{
            if(err){
                return res.status(404).json(err);
            }
            return res.json(success);
        });
    },
    destroy: function(req, res){
        var id= req.params.id;
        Controllers.remove({_id: id}, function(err){
            if(err){
                return res.status(404).json(err);
            }
            return res.json(true);
        })
    },
}