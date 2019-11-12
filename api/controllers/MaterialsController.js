/**
 * ProcessController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {


  list:function(req, res){
    Materials.find({}).exec((err, materials) => {
      if(err){
        return res.send(500, {error: 'Database Error'});
      }
      return res.view('materials/list', {materials});
    });
  },

  add: function(req, res){
    res.view('add');
  },

  create:function(req, res){
    var name = req.body.name;
    var description = req.body.description;
    var timeFactor = req.body.timeFactor;
    Materials.create({name:name, description:description, timeFactor:timeFactor}).exec((err) => {
      if(err){
        return res.send(500, {error: 'Database Error'});
      }
      res.redirect('/materials/list');
    });
  },

  edit : function(req, res){
    var id = req.params.id;
    Materials.findOne({id:id}).exec((err, material) => {
      if(err){
        return res.send(500, {error: 'Database Error'});
      }
      res.view('materials/edit', {material:material});
    });
  },


  destroy:function(req, res){
    var id = req.params.id;
    Materials.destroy({id:id}).exec((err) => {
      if(err){
        res.send(500, {error: 'Database Error'});
      }
      res.redirect('/materials/list');
    });
    return false;
  },

  update: function(req, res){
    var id = req.params.id;
    var name = req.body.name;
    var description = req.body.description;
    var timeFactor = req.body.timeFactor;

    Materials.update({id: id},{name:name, description:description, timeFactor:timeFactor}).exec((err) => {
      if(err){
        return res.send(500, {error: 'Database Error'});
      }
      res.redirect('/materials/list');
    });
    return false;
  }
};
