import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((acc, item) => {
    const precio = parseFloat(item.precio.replace('€', '').replace(',', '.'));
    return acc + (precio * item.quantity);
  }, 0);

  if (cart.length === 0) return <Container className="py-5 text-center"><h2>Tu carro está vacío</h2></Container>;

  return (
    <Container className="py-5">
      <h2 className="mb-4" style={{ color: '#12876f' }}>Tu Carrito</h2>
      <Table responsive>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio Unit.</th>
            <th>Subtotal</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td>{item.nombre}</td>
              <td>{item.quantity}</td>
              <td>{item.precio}</td>
              <td>{(parseFloat(item.precio) * item.quantity).toFixed(2)} €</td>
              <td>
                <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>Cancelar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="text-end mt-4">
        <h3>Total: {total.toFixed(2)} €</h3>
        <Button variant="success" onClick={() => { alert('¡Compra realizada!'); clearCart(); }}>
          Comprar ahora
        </Button>
      </div>
    </Container>
  );
};

export default Cart;