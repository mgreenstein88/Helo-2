const bcrypt = require('bcrypt')

module.exports = {
    register: async (req, res) => {
        const {username, password} = req.body
        const db = req.app.get('db')

        const existingUser = await db.get_user_by_username(username)

        if(existingUser){
            return res.status(409).send('User already exists')
        }

        const hash = bcrypt.hashSync(password)

        const newUser = await db.add_user([username, hash])

        req.session.user = newUser[0]
        res.status(200).send(req.session)
    },
    getPosts: (req, res) => {
        const db = req.app.get('db')
        const {id, posts, search} = req.params
        const string = posts.filter((element) => element.includes(search))
        const notAuthor = posts.filer((element) => element.username != username)

        db.get_posts(id)

        if (posts === true && search == null){
            return res.status(200).send(posts)
        } else if (posts === true && search != null){
            return res.status(200).send(string)
        } else if (posts === false && search == null){
            return res.status(200).send(notAuthor)
        } else {
            return res.status(404).send('Search not found')
        }
    }
}