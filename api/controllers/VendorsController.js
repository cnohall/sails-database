/**
 * VendorsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
  
  list:function(req, res){
    Vendors.find({}).exec(function(err, vendors) {
      if(err){
        return res.send(500, {error: 'Database Error'});
      }
      return res.view('list', {vendors});
    });
  },
  
  add: function(req, res){
    res.view('add');
  },
  
  create:function(req, res){
    var name = req.body.name;
    var owner = req.body.owner;
    var companies = req.body.companies;
    var shops = req.body.shops;

    Vendors.create({name:name, owner:owner, companies:companies, shops:shops}).exec(function(err){
      if(err){
        return res.send(500, {error: 'Database Error'});
      }
      res.redirect('/vendors/list')
    })
  },

  edit : function(req, res){
    var id = req.params.id;
    Vendors.findOne({id:id}).exec(function(err, vendor){
      if(err){
        return res.send(500, {error: 'Database Error'});
      }
      res.view('edit', {vendor:vendor})
    });
  },


  destroy:function(req, res){
    var id = req.params.id;
    Vendors.destroy({id:id}).exec(function(err){
      if(err){
        res.send(500, {error: 'Database Error'});
      }
      res.redirect('/vendors/list')
    });
    return false;
  },

  update: function(req, res){
    var name = req.body.name;
    var id = req.params.id;
    var owner = req.body.owner;
    var companies = req.body.companies;
    var shops = req.body.shops;

    Vendors.update({id: id},{name:name, owner:owner, companies:companies, shops:shops}).exec(function(err){
      if(err){
        return res.send(500, {error: 'Database Error'});
      }
      res.redirect('/vendors/list')
    });
    return false;
  }
}