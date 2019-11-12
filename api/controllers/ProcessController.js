/**
 * ProcessController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {


  list:function(req, res){
    Process.find({}).exec((err, processes) => {
      if(err){
        return res.send(500, {error: 'Database Error'});
      }
      return res.view('processes/list', {processes});
    });
  },

  add: function(req, res){
    res.view('add');
  },

  create:function(req, res){
    var name = req.body.name;
    var shortName = req.body.shortName;
    var description = req.body.description;
    var materials = req.body.materials;
    Process.create({name:name, shortName:shortName, description:description, materials:materials}).exec((err) => {
      if(err){
        return res.send(500, {error: 'Database Error'});
      }
      res.redirect('/process/list');
    });
  },

  edit : function(req, res){
    var id = req.params.id;
    Process.findOne({id:id}).exec((err, process) => {
      if(err){
        return res.send(500, {error: 'Database Error'});
      }
      res.view('processes/edit', {process:process});
    });
  },


  destroy:function(req, res){
    var id = req.params.id;
    Process.destroy({id:id}).exec((err) => {
      if(err){
        res.send(500, {error: 'Database Error'});
      }
      res.redirect('/process/list');
    });
    return false;
  },

  update: function(req, res){
    var id = req.params.id;
    var name = req.body.name;
    var shortName = req.body.shortName;
    var description = req.body.description;
    var materials = req.body.materials;

    Process.update({id: id},{name:name, shortName:shortName, description:description, materials:materials}).exec((err) => {
      if(err){
        return res.send(500, {error: 'Database Error'});
      }
      res.redirect('/process/list');
    });
    return false;
  }
};
