const signUp = (req,res,next) => {
    res.status(201).json({
        status: 'success',
        message: 'your api is working properly',
    })
}

module.exports = { signUp, }