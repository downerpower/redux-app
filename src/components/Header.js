import { authActions } from '../store/auth';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Header.module.css';

const Header = () => {
  const auth = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(authActions.logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            {auth.isAuthed && <button onClick={handleLogoutClick}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
