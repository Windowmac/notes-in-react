import { useQuery } from '@apollo/client';
import { GET_NOTES } from '../services/notesGQL';

const NoteDisplayComponent = () => {
  const { loading, error, data } = useQuery(GET_NOTES);
  return (
    <div>
      <h2>Notes:</h2>
      {loading && <p>loading...</p>}
      {error && <p>{error}</p>}
      {data && data.notes.map(({ title, body, _id }) => (
        <div key={_id}>
          <p>
            {title}: {body}
          </p>
        </div>
      ))}
    </div>
  );
};

export default NoteDisplayComponent;
