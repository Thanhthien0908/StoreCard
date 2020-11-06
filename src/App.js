
import './App.css';
import Header from './components/Header';
import Products from './components/Products';
//import Message from './components/Message';
//import Cart from './components/Cart';
import Footer from './components/Footer';
import CartContainer from './containers/CartContainer';
import MessageContainer from './containers/MessageContainer';
function App() {
  return (
    <div class="hidden-sn animated deep-purple-skin">
      <Header />
        <main id="mainContainer">
          <div className="container">
            {/* Products */}
            <Products />
            {/* Message */}
            <MessageContainer />
            {/* Cart */}
            <CartContainer />
            </div>
        </main>
        {/* Footer */}
        <Footer />
        </div>
  );
}

export default App;
