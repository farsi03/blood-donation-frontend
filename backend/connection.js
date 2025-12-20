const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://Farseena:farsi123@cluster0.mgj1dzz.mongodb.net/?appName=Cluster0")
.then(()=>{
    console.log("Connection Successful");
})
.catch((err)=>{
    console.log("No Connection");
})