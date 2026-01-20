import mongoose from "mongoos";

const subTodosSchema = mongoose.Scheme({
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
    }

},{timestamps: true});

export const Subtodos = mongoose.model("SubTodos", subTodosSchema);