import { Ul } from './ContactsList.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <Ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
            id={id}
          />
        );
      })}
    </Ul>
  );
};