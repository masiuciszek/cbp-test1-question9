# graphql-server 📊λ🚀💎

## Table of Contents

- [About](#about) 📖
- [Tools](#tools) ⚙️

## About <a name = "about"></a>

Graphql server, a simple graphql server.
Nice boilerplate for how you can keep building a graphql server.

## Tool <a name = "tools"></a>

- Graphql
- Typescript
- Mongoose
- Mongo Db
- Apollo

### how to input data

data is not coming as request.body as ususal in a normal REST application.
you fill in the dta through the args param.

for example, get user by the id

```graphql
{
  getUserById(id: "5f8c0faab6af27129d8790cf") {
    lastName
    firstName
  }
}
```
