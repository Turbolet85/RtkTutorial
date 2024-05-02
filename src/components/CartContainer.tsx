import { useSelector } from 'react-redux';

import { RootState } from '../app/store';

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store: RootState) => store.cart);
  if (amount < 1) {
    return (
      <section className={'mx-auto align-self-center text-center bg-gray-50'}>
        <header className={'p-8'}>
          <h2 className={'text-4xl uppercase font-bold text-gray-600'}>your bag</h2>
          <h4 className={'mt-4 text-lg'}>is currently empty</h4>
        </header>
      </section>
    );
  }
  return <div>CartContainer</div>;
};

export default CartContainer;
