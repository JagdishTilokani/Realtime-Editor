import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "first name cannot be empty"],
        },
        lastName: {
            type: String,
            required: [true, "last name cannot be empty"],
        },
        userName: {
            type: String,
            required: [true, "userName cannot be empty"],
            unique: true,
            minlength: [6, "username should be atleast 6 characters long"],
            maxlength: [10, "username cannot be more than 10 characters"],
        },
        contactNo: {
            type: String,
            required: [true, "Contact number required"],
            validate: [
                (value) => validator.isMobilePhone(value, "en-IN"),
                "Contact number is not valid",
            ],
        },
        email: {
            type: String,
            required: [true, "email cannot be empty"],
            validate: [validator.isEmail, "email is not valid"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "please enter the password"],
            minlength: [6, "password should be atleast 6 characters long"],
            maxlength: [15, "password cannot be more than 12 characters"],
        },
    },
    {
        timestamps: true,
    }
);

userSchema.pre("save", function (next) {
    bcrypt
        .genSalt()
        .then((salt) => bcrypt.hash(this.password, salt))
        .then((hashed) => {
            this.password = hashed;
            next();
        });
});

const User = mongoose.model("User", userSchema);

export default User;
