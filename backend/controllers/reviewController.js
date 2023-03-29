import Tour from "../models/Tour.js"
import Review from "../models/Review.js"


export const createReview = async (req,res)=>{
const tourId = req.params.tourId
const newReview = new Review ({...req.body})

    try {
        const savedReview = await newReview.save()
        //sau khi tạo đánh giá mới, bây giờ hãy cập nhật mảng đánh giá của chuyến tham quan
        await Tour.findByIdAndUpdate(tourId,{
            $push: {reviews: savedReview._id}
        })
        res.status(200).json({success:true , message : 'review submitted',
        data:savedReview
    })


    } catch (err) {
        console.log(err)
        res.status(200).json({success:false , message : 'false to submit'
    })
    }
}