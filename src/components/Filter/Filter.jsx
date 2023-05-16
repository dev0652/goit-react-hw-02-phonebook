export const Filter = ({ value, onChange }) => (
  <label>
    Filter contacts by name
    <input type="text" value={value} onChange={onChange} />
  </label>
);
