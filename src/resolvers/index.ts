import { Shoe, Team } from "../types"
import { Query } from "./Query"
import { Mutations as Mutation } from "./Mutations"

const resolvers = {
  Query,
  Mutation,
  // for the shoe interface
  Shoe: {
    __resolveType(shoe: Shoe) {
      if (shoe.sport) return "Sneaker" // same name  as the type itself
      return "RunningShoe" // same name  as the type itself
    },
  },
  // Team interface
  Team: {
    __resolveType(team: Team) {
      return team.hasUltras ? "FootballTeam" : "BasketballTeam"
    },
  },
  SportSociety: {
    __resolveType(shoeOrTeam: Team | Shoe) {
      if ("sport" in shoeOrTeam) {
        return "Sneaker"
      }
      if ("hasUltras" in shoeOrTeam) {
        return "FootballTeam"
      }
    },
  },
}

export default resolvers
