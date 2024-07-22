import { FaUser } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import css from "./Contact.module.css"
import { useDispatch } from 'react-redux';
import { deleteContact} from '../../redux/contactsOps';

export default function Contact({ data }) {
    const dispatch = useDispatch();
    
    const handleDelete = () => dispatch(deleteContact(data.id));
  
    return (
    <>
      <div className={css.contactInfo}>
        <div className={css.contactWrap}>
          <p>
            <FaUser className={css.icon} />
            {data.name}
          </p>
          <p>
            <FaPhoneAlt className={css.icon} />
            {data.number}
          </p>
        </div>
        <button
          onClick={handleDelete}
          className={css.contactBtn}
        >
          Delete
        </button>
      </div>
    </>
  );
}