const mongoose = require("mongoose");

main().then((res) => {
    console.log("connection successfull");
})
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const bookSchema = new mongoose.Schema({
    
    title:{
        type:String,
        required:true,
        maxLength:20,
    },
    author:{
        type:String
    },
    price:{
        type:Number,
        min:1,
    },
    discount:{
        type:Number,
        default:0,
    },
    category:{
        type:String,
        enum:["fiction","non-fiction"],
    },
});


const book = mongoose.model("Book",bookSchema);

book.findByIdAndUpdate("694d888e484c6f833ad63bc3",{price:-100},{runValidators:true}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

// let book1 = new book({
//     // title:"MATHEMATICS XII",
//     title:"Think & grow rich",
//     price:"500",
//     category:"fiction",

// });
// book1.save().then(res=>{
//     console.log(res); 
// }).catch((err)=>{
//     console.log(err);
// })