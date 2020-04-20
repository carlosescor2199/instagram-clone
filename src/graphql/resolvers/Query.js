
const Query = {
    allUsers: async (parent, args, {models}) => await models.User.find(),

    getUser: async (parent, args, {models}) => await models.User.findOne(args)

}

export default Query;