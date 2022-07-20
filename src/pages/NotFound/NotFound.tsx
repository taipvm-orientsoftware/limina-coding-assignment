import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="max-w-7xl py-10">
      <h1>Oops!</h1>
      <p>Page Not Found</p>
      <div className="flex items-end justify-start grow">
        <Link to="/">Back to our homepage</Link>
      </div>
    </div>
  );
}
