import { Button, Item } from './ContactItem.styled';

export const ContactItem = ({ onDeleteContact, name, number, id }) => {
  return (
    <Item>
      {name}: {number}
        <Button type="button" onClick={() => onDeleteContact(id, name)}>
          Delete
        </Button>
     </Item>
  );
};