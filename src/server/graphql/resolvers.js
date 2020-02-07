import { escapeCafes, themes } from '../database/escapeCafes';
import users from '../database/users';

const resolvers = {
  Query: {
    escapeCafes: () => escapeCafes,
    escapeCafe: (_, { id }) => {
      return escapeCafes.filter(escapeCafe =>
        id.some(id => id === escapeCafe.id)
      );
    },
    themes: () => themes,
    theme: (_, { id }) => {
      return themes.filter(theme => id.some(id => id === theme.id));
    },
    users: () => users
  },
  Mutation: {
    addEscapeCafe: (_, { name, location }) => {
      let isDuplicated = false;
      escapeCafes.forEach(escapeCafe => {
        if (escapeCafe.name === name && escapeCafe.location === location) isDuplicated = true;
        return;
      });
      if (isDuplicated) return null;

      const newEscapeCafe = {
        id: escapeCafes.length + 1,
        name,
        location
      };
      escapeCafes.push(newEscapeCafe);
      return newEscapeCafe;
    },
    addUser: (_, { name, ID, password }) => {
      let isDuplicated = false;
      users.forEach(user => {
        if (user.ID === ID) isDuplicated = true;
        return;
      });
      if (isDuplicated) return null;

      const newUser = {
        id: users.length + 1,
        name,
        ID,
        password
      };
      users.push(newUser);
      return newUser;
    }
  }
};

export default resolvers;
