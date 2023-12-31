import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Femi',
      email: 'femi@gmail.com',
      password: bcrypt.hashSync('123456'), //to encrypt the user password
      isAdmin: true,
    },
    {
      name: 'sharon',
      email: 'sharon@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Nike shirt',
      category: 'Shirts',
      slug: 'nike-shirt',
      image: '/attache/ashkan-forouzani-S5_t6VIMClE-unsplash.jpg',
      price: 120,
      countInStock: 0,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 19,
      description: 'high quality shirt',
    },
    {
      name: 'Nike pant',
      category: 'Shirts',
      slug: 'nike-pant',
      image: '/attache/ivan-bogdanov-17qC7l19hMI-unsplash.jpg',
      price: 114,
      countInStock: 6,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 8,
      description: 'high quality pants',
    },
    {
      name: 'Adidas fit pant',
      category: 'Pants',
      slug: 'adidas-fit-pant',
      image: '/attache/engin-akyurt-oXYGKCYhQOI-unsplash.jpg',
      price: 60,
      countInStock: 20,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality pant',
    },
    {
      name: 'Adidas shirt',
      category: 'Pants',
      slug: 'adidas-shirt',
      image: '/attache/project-290-PTorAkUcYHg-unsplash.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality pant',
    },
  ],
};

export default data;
