import React, {useContext} from 'react';
import {UserContext} from '../App';

function Comment() {
  const userName = useContext(UserContext);

  return (
    <div>
      <h2>Dodaj komentarz</h2>
      {userName ?
        <div>
          <textarea>Treść komentarza</textarea>
          <button> Dodaj</button>
        </div> :
        <div>Jesteś niezalogowany</div>
      }
    </div>
  )
}

export default Comment;