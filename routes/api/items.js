const express = require('express'),
      router = express.Router(),
      Item = require('../../moduls/items')
     



// get items
router.get('/', (req, res) => {
    
    Item.find()
    .sort({date: -1})
    .then(items => res.json(items))
})


// post items
router.post('/', (req, res) =>{
    const {name, price, count, image, code} = req.body
    const item = new Item({
        name,
        price,
        count, 
        image,
        code
    })

    item.save()
    .then( item => res.json(item))
})

//delete route
router.delete('/:id',  (req, res)=>{
    Item.findById(req.params.id)
    .then(item => item.remove()
    .then(()=> res.json({success:true})))
    .catch(err => res.status(404).json({success:false, err: err}))
})


module.exports= router