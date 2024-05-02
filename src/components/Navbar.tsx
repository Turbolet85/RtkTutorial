import { useSelector } from 'react-redux';

import { RootState } from '../app/store';
import { CartIcon } from '../assets/icons';

const Navbar = () => {
  const amount = useSelector((store: RootState) => store.cart.amount);
  return (
    <section className={'bg-blue-500'}>
      <nav className={'max-w-7xl p-8 mx-auto'}>
        <div className={'flex items-center justify-between'}>
          <h3 className={'text-3xl font-bold tracking-wide text-white'}>Redux toolkit</h3>
          <div className={'flex items-center justify-between'}>
            <CartIcon />
            <div
              className={'bg-white w-7 h-7 rounded-full flex items-center justify-center'}
            >
              <p className={'text-xl font-bold tracking-wide text-blue-500'}>{amount}</p>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
