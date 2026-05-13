import mogoose from "mongoose"
const orderscheme = new mongoose.Scheme({

    ordername : {
        type : String,
        required: true,
    },

    ordernumber : {
        type : SVGAnimatedInteger,
        required : true,
    }

}, {timestamps : true})

export const Order = mongoose.model("Order",)

