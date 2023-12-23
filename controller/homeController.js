const ProjectList=require('../models/projectModel');
// controller for main page or home page
module.exports.home=function(req,res){
    ProjectList.find({})
    .then(projectDet =>{
        return res.render('home',{
            project:projectDet,
            title:'home page'
    });

})

.catch(err => {
    console.error('Error in fetching fron db a project!', err);
    return res.redirect('back');
});
};
       

