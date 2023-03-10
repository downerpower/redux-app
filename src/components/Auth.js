import classes from './Auth.module.css';
import { authActions } from '../store/auth';
import { useSelector, useDispatch } from 'react-redux';

const Auth = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.login())
  }

  return (
    <>
      {!auth.isAuthed && <main className={classes.auth}>
        <section>
          <form onSubmit={handleLoginSubmit}>
            <div className={classes.control}>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' />
            </div>
            <div className={classes.control}>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' />
            </div>
            <button>Login</button>
          </form>
        </section>
      </main>}
    </>
  );
};

export default Auth;
