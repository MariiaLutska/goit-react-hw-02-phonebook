import {ContactItem} from '../ContactItem/ContactItem';

export const ContactList = ({ contacts, onDeleteClick }) => {
    return (
        <ul>
            {contacts.map(item => (
                <ContactItem key={item.id} item={item} onDelete={onDeleteClick} />
            ))}
        </ul>
    );
};