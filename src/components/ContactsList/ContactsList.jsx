import Contact from 'components/Contact';
import './ContactsList.scss'

const ContactsList = ({ contactsList, onDelete }) => {
  return (
    <>
      <ul className='contacts-list'>
        {contactsList.map(({ id, name, number }) => (
          <Contact key={id} id={id} name={name} number={number}>
            <button
            className='contacts-list__button'
              type="button"
              onClick={() => {
                onDelete(id);
              }}
            >
              Delete
            </button>
          </Contact>
        ))}
      </ul>
    </>
  );
};

export default ContactsList;
