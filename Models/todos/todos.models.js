import mongoose from "mongoos"

const Todos = new mongoose.Schema({
    content: {
        type: String,
        required: true

    },
    complete: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subTodos: 
    [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodos",
        }
    ] //array for subtodos
        
    
}, {timestamps: true});