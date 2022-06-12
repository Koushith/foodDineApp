const mongoose = require("mongoose");
const { Schema } = mongoose;
const JWT = require("jsonwebtoken");

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, "Please provide user email"],
        unique: [true, "Email already exist"]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: [6, "Password should be atleast of 6 charecters"],
        select: false
    },
    name: {
        type: String,
        required: [true, "Please provide a name"],
        trim: true
    }
});

UserSchema.pre("save", async function(next) {
    if(!this.isModified("password")){
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

UserSchema.methods.isValidPassword = async function(userSentPassword){
    return await bcrypt.compare(userSentPassword, this.password);
};

module.exports = mongoose.model("User", UserSchema);
