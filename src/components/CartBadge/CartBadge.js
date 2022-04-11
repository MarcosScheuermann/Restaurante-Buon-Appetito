import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import { useContext } from 'react';
import CartContext from '../../context/CartContext'

const CartBadge = () => {

  return (
    <Button variant="light" className='mt-3'>
      Cart
      <Badge bg="secondary" className='ms-2'>
        0
      </Badge>
    </Button>
  );
};

export default CartBadge;
