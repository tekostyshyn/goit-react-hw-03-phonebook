import './Contact.scss'

const Contact = ({ name, number, children }) => {
  return (
    <li className='contacts-list__item'>
      {name}: {number}
      {children}
    </li>
  );
};

export default Contact;
