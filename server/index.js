const express   = require('express');
const mongoose  = require('mongoose');
const corse    = require('cors');
const app    = express();       
const UserModel = require('./models/Users');
app.use(express.json());
app.use(corse());
mongoose.connect("mongodb://127.0.0.1:27017/Users")
app.post("/register",async(req,res)=>
{
    UserModel.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err));
})
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ message: 'Email and password required' });
        const user = await UserModel.findOne({ email });
        if (!user) return res.status(401).json({ message: 'Invalid credentials' });
        if (user.password !== password) return res.status(401).json({ message: 'Invalid credentials' });
        return res.json(user);
    } catch (err) {
        return res.status(500).json({ message: 'Server error', error: err.message });
    }
});
app.listen(3001,()=>{
    console.log("Server started at port 3001");
});