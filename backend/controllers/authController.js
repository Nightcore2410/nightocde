import User from "../models/User.js"
import bcrypt from 'bcryptjs'
import  jwt  from "jsonwebtoken";

// dang ky
export const register = async (req , res) => {
    try {
        //ma hoa bam
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password,salt);

        const newUser = new User ({
            username: req.body.username,
            email:req.body.email,
            password:hash,
            photo:req.body.photo
        })
        await newUser.save()
        res.status(200).json({success:true ,message : "Successfully created"});
        
    } catch (err) {
        res.status(500).json({success:false ,message : "failed to create. try again"})
    }
};

// dang nhap
export const login = async (req , res) => {
    const email = req.body.email
    try {
        const user = await User.findOne({email})
        //nguoi dung khong ton tai 
        if(!user){
            return res.status(404).json({success:false ,message : "User not found"})
        }
        //nguoi dung ton tai -> kiem tr mk de so sanh
        const checkCorrectPassword =await bcrypt.compare(req.body.password,user.password)
        // neu mk khong chinh xac
        if(!checkCorrectPassword){
            return res.status(401).json({success:false ,message : "Incorrect email of password"})
        }
        const {password, role  , ...rest} =user._doc
        // tao ma thong bao jwt
        const token = jwt.sign(
            {id: user._id, role: user.role},
            process.env.JWT_SECRET_KEY,
            {expiresIn:"15d"}
        )

        //đặt mã thông báo trong cookie của trình duyệt và gửi phản hồi cho khách hàng   
        res
        .cookie("accessToken",token,{
            httpOnly: true,
            expires: new Date(Date.now() + 15*24*60*60*1000), // bạn cần tạo một đối tượng Date mới cho expires
        })
        .status(200)
        .json({
            token,
            data: {...rest},
            role,
        }) 

    } catch (err) {
        res.status(500).json({success:false ,message : "failed to login"})
    }
};
