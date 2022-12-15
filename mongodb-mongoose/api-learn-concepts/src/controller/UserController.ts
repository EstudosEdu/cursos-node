import PostModel from '../model/PostModel';
import UserModel from '../model/UserModel';

class UserController{
    async create(req, res){
        const {title, body, username, email_user} = req.body;
        try{
            const newUser = await UserModel.create({username: username, email: email_user});
            console.log(newUser);
            
            try{
                await PostModel.create({
                    title: title,
                    body: body,
                    user: newUser._id // assign the _id from the user
                });
                return res.status(200).json({message: 'User created!'});
            
            }catch(err){
                console.log(err);
                return res.status(500).json({message: 'Error', err});
            }

        }catch(err){
            console.log(err);
            return res.status(500).json({message: 'Error', err});
        }
    }

    async readOne(req, res){
        try{
            const user = await UserModel.findOne({
              _id: req.params.id,
            }).populate("posts");
            return res.status(200).json(user);
        }catch(err){
            console.log(err);
            return res.status(500).json({message: 'Error', err});
        }
    }

    async readAll(req, res){
        try{
            const userAll = await UserModel.find().populate('posts')
            return res.status(200).json(userAll);
        }catch(err){
            console.log(err);
            return res.status(500).json({message: 'Error', err});
        }
    }

}

export default new UserController();