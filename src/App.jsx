import  { useState } from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';
import Services from './component/Services/Services';
import Contact from './component/Contact/Contact';
import NoPageFound from './assets/NoPageFound/NoPageFound';
import './App.scss'
import SelectedProduct from './component/SelectedProduct/SelectedProduct';

const App = () => {
  // Product Data
  const [products, setProducts] = useState([
    {
        id: 1,
        title: 'Investment property of 3 bedroom in Larochelle',
        price: 'R1,300,000',
        location: 'Larochelle, South Africa',
        description: '',
        coverImage: ' /image/design-template-img/Bard_Generated_Image_1.jpeg',
        images: [
            '/image/design-template-img/Bard_Generated_Image_1.jpeg',
            '/image/design-template-img/Bard_Generated_Image_2.jpeg',
            '/image/design-template-img/Bard_Generated_Image_3.jpeg',
            '/image/design-template-img/Bard_Generated_Image_4.jpeg'
        ]
    },
    {
        id: 2,
        title: 'Investment property of 3 bedroom in Larochelle',
        price: 'R1,300,000',
        location: 'Larochelle, South Africa',
        description: '',
        coverImage: '/image/design-template-img/Bard_Generated_Image_2.jpeg',
        images: [
            '/image/design-template-img/Bard_Generated_Image_1.jpeg',
            '/image/design-template-img/Bard_Generated_Image_2.jpeg',
            '/image/design-template-img/Bard_Generated_Image_3.jpeg',
            '/image/design-template-img/Bard_Generated_Image_4.jpeg'
        ]
    },
    {
        id: 3,
        title: 'Investment property of 3 bedroom in Larochelle',
        price: 'R1,300,000',
        location: 'Larochelle, South Africa',
        description: '',
        coverImage: '/image/design-template-img/Bard_Generated_Image_3.jpeg',
        images: [
            '/image/design-template-img/Bard_Generated_Image_1.jpeg',
            '/image/design-template-img/Bard_Generated_Image_2.jpeg',
            '/image/design-template-img/Bard_Generated_Image_3.jpeg',
            '/image/design-template-img/Bard_Generated_Image_4.jpeg'
        ]
    },
    {
        id: 4,
        title: 'Investment property of 3 bedroom in Larochelle',
        price: 'R1,300,000',
        location: 'Larochelle, South Africa',
        description: '',
        coverImage: '/image/design-template-img/Bard_Generated_Image_4.jpeg',
        images: [
            '/image/design-template-img/Bard_Generated_Image_1.jpeg',
            '/image/design-template-img/Bard_Generated_Image_2.jpeg',
            '/image/design-template-img/Bard_Generated_Image_3.jpeg',
            '/image/design-template-img/Bard_Generated_Image_4.jpeg'
        ]
    },
    {
      id: 5,
      title: 'Investment property of 3 bedroom in Larochelle',
      price: 'R1,300,000',
      location: 'Larochelle, South Africa',
      description: '',
      coverImage: '/image/design-template-img/Bard_Generated_Image_4.jpeg',
      images: [
          '/image/design-template-img/Bard_Generated_Image_1.jpeg',
          '/image/design-template-img/Bard_Generated_Image_2.jpeg',
          '/image/design-template-img/Bard_Generated_Image_3.jpeg',
          '/image/design-template-img/Bard_Generated_Image_4.jpeg'
      ]
  },
  {
    id: 6,
    title: 'Investment property of 3 bedroom in Larochelle',
    price: 'R1,300,000',
    location: 'Larochelle, South Africa',
    description: '',
    coverImage: '/image/design-template-img/Bard_Generated_Image_4.jpeg',
    images: [
        '/image/design-template-img/Bard_Generated_Image_1.jpeg',
        '/image/design-template-img/Bard_Generated_Image_2.jpeg',
        '/image/design-template-img/Bard_Generated_Image_3.jpeg',
        '/image/design-template-img/Bard_Generated_Image_4.jpeg'
    ]
}
])

// For Routing Page-Component 
  const Pages = () => {
    const element = useRoutes([
      {
        path: '/',
        element: <Home products={products}/>
      },
      {
        path: '/about',
        element: <About products={products}/>
      }, 
      {
        path: '/services',
        element: <Services products={products}/> 
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/product/:id',
        element: <SelectedProduct products={products} />
      },
      {
        path: '*',
        element: <NoPageFound />
      }
    ])

    return element;
  }

  return (
    <section className='container'>
      {/* <Home products={products}/>
      <About />
      <Services />
      <Contact /> */}

    <Router>
      <Pages/>
    </Router>
    </section >
  );
}

export default App;
