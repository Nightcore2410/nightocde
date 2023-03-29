import Tour from '../models/Tour.js'

// tạo tour mới 
export const createTour = async (req ,res) =>{
    const newTour =new Tour (req.body)
    try {
        const savedTour =await newTour.save()
        res.status(200).json( {success:true , message :'Successfully created' ,
        data:savedTour})
    
    }catch(err){
        res.status(500).json( {success:false , message :'Failed to created try agin' 
       })
    }
};

// cap nhat tour
export const updateTour = async (req ,res) =>{
    const id = req.params.id
    try {
        const updatedTour =await Tour.findByIdAndUpdate(id,{
            $set: req.body
        },{new:true})
        res.status(200).json({
            success:true ,
            message :'Successfully update' ,
            data:updatedTour,})    
    }catch(err){
        res.status(500).json( {
            success:false , 
            message :'false to update' ,
            })
    }
};
// xoa tour
export const deleteTour = async (req ,res) =>{
    const id = req.params.id
    try {
        await Tour.findByIdAndDelete(id);
        res.status(200).json({
            success:true ,
            message :'Successfully deleted' ,});
               
    }catch(err){
        res.status(500).json( {
            success:false , 
            message :'false to deleted' ,
            })
    }
};
// getSingle tour
export const getSingleTour = async (req ,res) =>{
    const id = req.params.id;
    try {
        const tour = await Tour.findById(id).populate('reviews');

        res.status(200).json({
            success:true ,
            message :'Successful' ,
            data : tour,
        });
    }catch(err){
        res.status(404).json( {
            success:false , 
            message :'not found ' ,
            });
    }
};
// lấy het tour
export const getAllTour = async (req ,res) =>{

    // phân trang 
    const page = parseInt (req.query.page);
    //console.log(page)
    try {
        const tours = await Tour.find({})
        .populate('reviews')
        .skip(page * 8)
        .limit( 8 );
        res.status(200).json({success:true , count:tours.length,
             message :'Successful' ,data : tours});

    }catch(err){
        res.status(404).json( {
            success:false , 
            message :'not found ' ,
            });
    }
};
////nhận tour du lịch bằng cách tìm kiếm
export const getTourBySearch = async (req , res) => {
    // ở đây 'i' có nghĩa là phân biệt chữ hoa chữ thường
    const city =new RegExp(req.query.city,'i')
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)
    try{
        //gte o day co nghia >=
        const tours= await Tour.find({city , distance : {$gte:distance}, 
        maxGroupSize:{$gte:maxGroupSize},
    }).populate('reviews')
        res.status(200).json({
            success:true ,         
            message :'Successful' ,
            data : tours});


    }catch(err){
        res.status(404).json( {
            success:false , 
            message :'not found ' ,
            });
    }

}


// tour du lịch nổi bật
export const getFeaturedTour = async (req ,res) =>{
    try {
        const tours = await Tour.find({featured:true})
        .populate('reviews')
        .limit( 8 );
        res.status(200).json({
            success:true , 
            message :'Successful' ,
            data : tours});

    }catch(err){
        res.status(404).json( {
            success:false , 
            message :'not found ' ,
            });
    }
};


//nhận số lượng tour du lịch
export const getTourCount = async (req,res)=> {
    try{
        const tourCount = await Tour.estimatedDocumentCount();
        res.status(200).json({success:true , data: tourCount});

    }catch(err){
        res.status(500).json({success:false , message : "failed to fetch"});
    }
}