import Booking from '../models/Booking.js'

//tao tour
export const createBooking = async (req , res )=> {
    const newBooking = new Booking(req.body)
try {
    const savedBooking = await newBooking.save()
    res.status(200).json({success:true , message : 'your tour is booked' ,
    data:savedBooking})
} catch (err) {
    console.log(err)
    res.status(500).json({success:false , message : 'internal server error' })
}    
};
//dat tour
export const getBooking = async(req , res)=> {
    const id= req.params.id ;
    try {
        const book = await Booking.findById(id)
        res.status(200).json({success:true , message : 'successful' ,
        data:book})
    } catch (err) {
        res.status(404).json({success:false , message : 'not found' })
    }
}

//dat nhieu tour
export const getAllBooking = async(req , res)=> {
    
    try {
        const books = await Booking.find()
        res.status(200).json({success:true , message : 'successful' ,
        data:books})
    } catch (err) {
        res.status(500).json({success:false , message : 'internal server error' })
    }
}
export const getAllBookings = async (req ,res) =>{
    try {
        const booking = await Booking.find({})
        res.status(200).json({
            success:true ,
            message :'Successful' ,
            data : booking});

    }catch(err){
        res.status(404).json( {
            success:false , 
            message :'not found ' ,
            });
    }
};