const mongoose=require('mongoose');

const Schema =  mongoose.Schema;

let userSchema = new Schema(
    {
        name:
        {
            type: String,
            required: true,
            min: 6,
            max: 50
        },
        email:
        {
            type: String,
            required: true,
            min: 6,
            max: 100

        },
        password:
        {
            type:String,
            required:true,
            min: 6,
            max: 100
        },
        date:
        {
            type: Date,
            default:  Date.now
        }
    }

    //name
    //email
    //password
    //date when user created
)

module.exports=mongoose.model("user",userSchema);