import { nanoid } from 'nanoid';
import './Filter.scss'

const Filter = ({ value, onChange }) => {
  const inputId = nanoid();

  return (
    <div className='filter'>
      <label className='filter__label' htmlFor={inputId}>Find contacts by name</label>
      <input
      className='filter__input'
        type="text"
        name="input"
        value={value}
        id={inputId}
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;
