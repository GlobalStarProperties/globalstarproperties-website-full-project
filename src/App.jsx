import  { useState } from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';
import Services from './component/Services/Services';
import Contact from './component/Contact/Contact';
import NoPageFound from './assets/NoPageFound/NoPageFound';
import './App.scss'
import SelectedProduct from './component/SelectedProduct/SelectedProduct';
import Data from './assets/data';

const App = () => {
  // Product Data
  const [products, setProducts] = useState(Data)

  // For handling whatsapp link
  const onWhatsappClick = (purpose) => {
    products.map((item) => {
      const whatsAppLink = purpose == 'product' ?
      `https://wa.me/+2348168096890?text=Hi, I'm interested in the property called ${item.title} located at ${item.location} with the price tag ${item.price}. https://globalstarproperties.netlify.app/product/${item.id}`
      : `https://wa.me/+2348168096890?text=Hi, I saw your property listing for property in Johannesburg, South Africa from your website. I'm interested in learning more about it. Could you please tell me more about it ?. Thank you for your time`;
      window.open(whatsAppLink, "_blank");
    })
  };

// For Routing Page-Component 
  const Pages = () => {
    const element = useRoutes([
      {
        path: '/',
        element: <Home products={products} onWhatsappClick={onWhatsappClick}/>
      },
      {
        path: '/about',
        element: <About products={products} onWhatsappClick={onWhatsappClick}/>
      }, 
      {
        path: '/services',
        element: <Services products={products} onWhatsappClick={onWhatsappClick}/> 
      },
      {
        path: '/contact',
        element: <Contact onWhatsappClick={onWhatsappClick}/>
      },
      {
        path: '/product/:id',
        element: <SelectedProduct products={products} onWhatsappClick={onWhatsappClick}/>
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
