import { Label } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <Label>
    Filter contacts by name
    <input type="text" value={value} onChange={onChange} />
  </Label>
);
