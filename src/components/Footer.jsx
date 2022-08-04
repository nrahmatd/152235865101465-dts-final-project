import { Link } from 'react-router-dom';


const Footer = () => (
  <footer className='flex flex-col items-center justify-center w-full px-16 bg-white shadow-footer py-30px lg:px-35px mt-4'>
    <p className='text-gray-900 text-center'>
      Copyright &copy; {' '}
      <Link
        className='font-semibold transition-colors duration-200 ease-in-out hover:text-blue-600'
        to='#'
      > Catalog Games {new Date().getFullYear()}.
      </Link>{' '}
    </p>

    <p className='text-gray-500 text-center text-sm'>
      Present by Nur Rahmat Dwi Riyanto
    </p>
  </footer>
);

export default Footer;
