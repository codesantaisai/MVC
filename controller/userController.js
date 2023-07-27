const {
    getUser
} = require("../model/userModel")

exports.loginPage = (req, res, next) => {
    res.render('loginPage')
}

exports.dashBoard = (req, res, next) => {
    const getUserName = getUser(req.query.email)
    res.render('dashboard',{
        getUserName
    })
}

exports.loginProcess = (req, res, next) => {
    const user = getUser(req.body.email)
    if (user !== null && user.password == req.body.password) {
        res.redirect('/dashboard?email=' + req.body.email)
    } else if (user === null) {
        res.render('error', {
            message: 'No user exists with this email'
        })

    } else {
        res.render('error', {
            message: 'Invalid Credentials'
        })

    }
    console.log(req.body);

}