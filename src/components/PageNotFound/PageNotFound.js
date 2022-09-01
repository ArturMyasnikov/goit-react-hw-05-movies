import { useNavigate } from 'react-router-dom';
import style from '../Header/Header.module.css';

const PageNotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  return (
    <>
      <button className={style.btn} onClick={goBack}>
        Go Back
      </button>
      <h1 style={{ textAlign: 'center', color: 'red' }}>404 Page not found</h1>
    </>
  );
};

export default PageNotFound;
