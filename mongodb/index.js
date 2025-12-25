const mongoose = require('mongoose');

main().then((res) => {
    console.log("connection successfull");
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

const User = mongoose.model("User",userSchema);

User.findOneAndDelete({name:"monu"}).then((res)=>{
    console.log(res);
})




// User.findByIdAndDelete("694d17ab46cdb1e42540472a").then((res)=>{
//     console.log(res);
// })


// User.deleteMany({age:22}).then((res)=>{
//     console.log(res);
// })


// User.deleteOne({name:"sonu"}).then((res)=>{
//     console.log(res);
// })




// User.findOneAndUpdate({name:"sonu"},{age:35},{new:false}).then((res)=>{
//     console.log(res); 
// }).catch((err)=>{
//     console.log(err);
// });


// User.findOneAndUpdate({name:"sonu"},{age:42},{new:false}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });




// User.updateMany({age:{$gt:30}},{age:60}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// User.find({age:{$gt:40}}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// const user1 = new User({
//     name:"kamlakant",
//     email:"kamlakantkumar51@gmail.com",
//     age:22,
// });

// user1.save()

// const user2 = new User({
//     name:"chandan",
//     email:"virtualspreading19@gmail.com",
//     age:20,
// });

// user2.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// User.insertMany([
//     {name:"sonu",email:"kumarsonu46@gmail.com",age:50},
//     {name:"monu",email:"kumarmonu46@gmail.com",age:60},
//     {name:"kartik",email:"kumarkartik46@gmail.com",age:25},
// ]).then(res =>{
//     console.log(res);
// });



