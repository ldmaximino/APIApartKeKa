import { Schema, model } from "mongoose";

export const userCollection = "user";

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        default: null,
    }
});

export const UserModel = model(userCollection, UserSchema);
