// parent, args, context, info
const resolvers = {
  Query: {
    me() {
      return {
        email: "someemail@example.com",
        name: "Mike smith",
      }
    },
    color: () => ({ name: "blue", cool: true }),
  },
}

export default resolvers
