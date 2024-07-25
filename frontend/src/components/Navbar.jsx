import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <div>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold'>AUTHENTICATION</h1>
        </Link>
        <ul className='flex gap-4 text-white'>
          <Link to='/signup'>
            <li>Click</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
