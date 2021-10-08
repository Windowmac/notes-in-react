
const NoteInput = (props) => (
    <input value={props.inputState} onChange={(e) => props.setInputState(e.target.value)}/>
);

export default NoteInput;