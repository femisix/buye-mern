import Button from 'react-bootstrap/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Rating from './Rating';

const Product = (props) => {
  const { product } = props;
  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>

        <Rating rating={product.rating} numReviews={product.numReviews} />

        <Card.Text>${product.price}</Card.Text>
        <Button>Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

//i wrote the above code with bootstrap

export default Product;