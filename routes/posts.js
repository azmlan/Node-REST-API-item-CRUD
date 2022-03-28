const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//Get All Posts
router.get('/',(req,res)=>{
    Post.find()
    .then(data=>{
        res.json(data)
    }).catch(err=>{
        console.log({message:err});
    });
    
});
// Create Post
router.post('/',async (req,res)=>{
   const post  = new Post({
       title:req.body.title,
       descirption:req.body.descirption
   });
   try {
       const saved = await post.save()
       res.json(saved)
    //    console.log(res.json(saved)); 
   } catch (error) {
       console.log("E",error);
   }
});
// One Post 
router.get('/:postId',(req,res)=>{
    const id = req.params.postId;
    Post.findById(id)
    .then(data=>{
        res.json(data)
    }).catch(err=>{
        res.json(err)
    })
});
// Delete Post 
router.delete('/:postId',(req,res)=>{    
    Post.remove({_id:req.params.postId})
    .then(respone=>{
        res.send("Deleted")
    })
    .catch(err=>{
        res.json(err)
    })
    
});
// Update Post 
router.patch('/:postId',(req,res)=>{    
    Post.updateOne({_id:req.params.postId},{$set:{title:req.body.title , descirption:req.body.descirption}})
    .then(respone=>{
    res.json(respone)
    })
    .catch(err=>{
        res.json(err)
    })
});


// router.post('/',(req,res)=>{
// //    const post  = new Post(req.body);
//    const post  = new Post({
//        title:req.body.title,
//        descirption:req.body.descirption
//    });

//    post.save()
//       .then(data=>{
//        res.status.json(data)
//    }).catch(err=>{
//        res.json({message:err})
//    });
   
// });

module.exports = router;