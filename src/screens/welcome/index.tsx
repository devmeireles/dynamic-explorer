import { Link } from 'react-router-dom';

const Welcome: React.FC = () => {
  return (
    <div>
      <h1>electron-react-boilerplatez</h1>
      <div className="Hello">
        <Link to="/dasboard">
          <a
            href="https://github.com/sponsors/electron-react-boilerplate"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button">
              <span role="img" aria-label="books">
                🙏
              </span>
              Donate
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
