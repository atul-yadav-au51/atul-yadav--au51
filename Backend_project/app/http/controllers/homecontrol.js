const Menu = require('../../models/menu.js')
function homecontrol(){
    return{
        async index( req,res){
          const pizzas=await Menu.find()
          
          res.render('home',{pizzas:pizzas})
        }
    }
}

module.exports=homecontrol