import mongoose from "mongoose"

const E_Com = new mongoose.Schema({
    userName:{
        type:String,
        unique:'true',
        required:'true',
    },
    password:{
        type:String,
        required:'true'
    },
    email:{
        type:String,
        required:'true',
        unique:'true'
    },
    address:{
        type:String,
        required:'true'
    },
    permissions:{
        type: Boolean,
        required: 'true',
    }

},{timestamps: 'ture'});

export const e_com = mongoose.Model("ecom", E_com);