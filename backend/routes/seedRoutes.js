import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.deleteMany();
  const createdProducts = await Product.insertMany(data.products); //to insert an array of products to the product model

  //to create new user
  await User.deleteMany();
  const createdUser = await User.insertMany(data.users);

  res.send({ createdProducts, createdUser });
});

export default seedRouter;
