

const NoteSubmit = (props) => (
  <div
    style={{
      width: '60px',
      height: '20px',
      backgroundColor: 'blue',
      color: 'white',
      borderRadius: '20px',
    }}
    onClick={() => props.setNoteDisplay(props.inputState)}
  >
    Submit
  </div>
);

export default NoteSubmit;