import { ApolloServer } from 'apollo-server'; // 패키지 불러오기
import resolvers from './graphql/resolvers'; // resolvers 파일 불러오기
import typeDefs from './graphql/schema';

// The ApolloServer constructor requires two parameters: your schema and resolver
const server = new ApolloServer({
  typeDefs,
  resolvers
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
