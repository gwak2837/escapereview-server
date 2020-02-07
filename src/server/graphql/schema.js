const typeDefs = `
type EscapeCafe {
  id: Int!
  name: String!
  location: String!
  location_xy: [Float!]!
  rating: Float!
  review_count: Int!
  cover_image: String!
  themes: [Theme!]!
}

type Theme {
  id: Int!
  name: String!
  genre: String!
  rating: Int!
  review_count: Int!
  difficulty: Int!
  cover_image: String!
}

type Review {
  id: Int!
}

type User {
  id: Int!
  name: String!
  ID: String!
  password: String!
}

type Query {
  escapeCafes: [EscapeCafe!]!
  escapeCafe(id: [Int!]!): [EscapeCafe]!
  themes: [Theme!]!
  theme(id: [Int!]!): [Theme]!
  users: [User!]!
}

type Mutation {
  addEscapeCafe(name: String!, location: String!): EscapeCafe
  addUser(name: String!, ID: String!, password: String!): User
}
`;

export default typeDefs;
