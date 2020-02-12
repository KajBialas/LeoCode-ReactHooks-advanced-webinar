import React, { useState } from 'react';
import './App.css';

import Blog from './components/blog.component';

export const UserContext = React.createContext('');

function App() {

  const [ userName, setUserName] = useState('');
  return (
    <div>
      <div>LeoCode Webinar: React Hooks Advanced</div>
      <div>
        {userName ? `Użytkownik zalogowany jako: ${userName}` : 'Użytkownik niezalogowany!'}
        {!userName ? <button onClick={() => setUserName('kaj.bialas@leocode.com')}>Zaloguj</button> : null}
      </div>

      <UserContext.Provider value={userName}>
        <Blog />
      </UserContext.Provider>
    </div>
  );
}

export default App;
