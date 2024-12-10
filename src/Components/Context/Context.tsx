import { createContext, useState } from 'react';
import { UserProfile } from '../User/User';

export const UserContext = createContext<string | null>(null);

export function UserProvider() {
    const [username, setUsername] = useState('Ibtihal');

    return (
        <UserContext.Provider value={username}>
          <UserProfile />
        </UserContext.Provider>
      );
    }
    