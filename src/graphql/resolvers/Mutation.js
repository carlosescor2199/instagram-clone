
const Mutation = {

    createUser: async (parent, args, {models}) => await models.User.create(args)
    
}

export default Mutation;