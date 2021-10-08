import { useState } from 'react';
import NoteDisplayComponent from './components/NoteDisplayComponent';
import NoteInput from './components/NoteInput';
import NoteSubmit from './components/NoteSubmit';
import { ApolloProvider } from '@apollo/client';
import { client } from './services/notesGQL';


function App() {
  const [inputState, setInputState] = useState('');
  const [noteDisplay, setNoteDisplay] = useState('');

  return (
    <>
      <ApolloProvider client={client}>
        <NoteInput inputState={inputState} setInputState={setInputState} />
        <NoteSubmit inputState={inputState} setNoteDisplay={setNoteDisplay} />
        <NoteDisplayComponent noteDisplay={noteDisplay} />
      </ApolloProvider>
    </>
  );
}

export default App;
