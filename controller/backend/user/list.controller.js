const API = require('../../../core/index')
const User = require('../../../models').user

class userList extends API{
    constructor(){
        super(User)
    }

    async exec(req, res, next){
        try{
            let {page} = req.query

            const options = {
                page: parseInt(page) || 1,
                paginate: 25
            }

            const { docs, pages, total } = await User.paginate(options)

            let data = docs

            return res.status(200).json({
                status: 'success',
                message: 'list data ditampilkan',
                data,
                page,
                pages,
                total
            })
        }catch(err){
            return res.status(400).json({
                status: 'error',
                message: err.message
            })
        }
    }
}

module.exports = userList