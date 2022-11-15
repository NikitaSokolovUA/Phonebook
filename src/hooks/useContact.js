import { useSelector } from "react-redux"
import { selectContacts } from "redux/contacts/selectors";

export const useContact = (id) => {
    const contacts = useSelector(selectContacts);
    const {name, number} =  contacts.find(contact => contact.id === id)

    return {
        name,
        number
    }
}