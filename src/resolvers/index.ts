const resolvers = {
  Query: {
    me() {
      return {
        email: "someemail@example.com",
        name: "Mike smith",
        friends: [],
      }
    },
  },
}

export default resolvers
