import { useContext } from 'react';
import { UserContext } from '../Context/Context';

export function UserProfile() {
    const username = useContext(UserContext);
  
    return <h1>{username}!</h1>;
  }
  