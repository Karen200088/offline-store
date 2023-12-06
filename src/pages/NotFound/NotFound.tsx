import { Link } from 'react-router-dom';
import { FC } from 'react';

const NotFound: FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" style={{ color: 'blue' }}>
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
