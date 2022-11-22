import { useState } from 'react';
import { CreateProduct } from './components/CreateProduct';
import { Error } from './components/Error';
import { Loader } from './components/Loader';
import { Modal } from './components/Modal';
import { Product } from './components/Product';
import { useProducts } from './hooks/products';
import { IProduct } from './modules';

function App() {

  const { loading, error, productsData, addProduct } = useProducts();

  const [modal, setModal] = useState(true);

  const createHandler = (product:IProduct)=>{
    setModal(false);
    addProduct(product)
  }

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <Error error={error} />}
      {productsData.map((item) => <Product product={item} key={item.id} />)}
      {modal && <Modal title='Create new product' onClose={()=> setModal(false)}>
        <CreateProduct onCreate={createHandler} />
      </Modal>}

      <button onClick={()=>setModal(true)} className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2'>+</button>

    </div>
  );
}

export default App;

