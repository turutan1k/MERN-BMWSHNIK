const Router = require("express")
const User = require("../models/User.js")
const bcrypt = require("bcryptjs")
const config = require("config")
const jwt = require("jsonwebtoken")
const {check, validationResult} = require("express-validator")
const authMiddleware = require('../middleware/auth.middleware')


const router = new Router()



router.post('/registration',// Создание регистрации
    [
        check('email','Неправильный email').isEmail(),
        check('password', 'Пароль должен состоять минимум из 8 символов').isLength({min:8, max:16}),
        
    ],
    async (req,res) =>{
        try{
            console.log(req.body)
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({message:"Неправильный запрос", errors})
            }
            const {email, password} = req.body
            const candidate = await User.findOne({email})
                if (candidate) {
                    return res.status(400).json({message:`Пользователь ${email} уже существует`})
                }
            const hashPassword = await bcrypt.hash(password, 8)
            const user = new User ({email, password: hashPassword})
            await user.save()
            return res.json({message:"Пользователь был создан"})
        }
        catch(e){
        console.log(e)
        res.send({message:"Ошибка сервера"})
    }
})


router.post('/login',// Вход
    async (req,res) =>{
        try{
           const {email, password} = req.body
           const user = await User.findOne({email})
           if (!user){
               return res.status(404).json({message:"Пользователь не найден"})
           }
           const isPassValid = bcrypt.compareSync(password, user.password)
           if(!isPassValid){
               return res.status(400).json({message:"Неверный пароль"})
           }
           const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn:"1h"})
           return res.json({
               token,
               user:{
                   id: user.id,
                   email: user.email,
                   messages:user.messages,
                   readMessages:user.readMessages,
                   writtenMessages: user.writtenMessages,
                   avatar: user.avatar,
                   lastActiveAt: user.lastActiveAt
               }
           })
        }
        catch(e){
        console.log(e)
        res.send({message:"Ошибка сервера"})
    }
})

router.get('/auth', authMiddleware,
    async (req, res) => {
        try {
            const user = await User.findOne({_id: req.user.id})
            const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})
            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    diskSpace: user.diskSpace,
                    usedSpace: user.usedSpace,
                    avatar: user.avatar
                }
            })
        } catch (e) {
            console.log(e)
            res.send({message: "Ошибка сервера"})
        }
    })

module.exports = router