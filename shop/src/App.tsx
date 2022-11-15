import { Error } from './components/Error';
import { Loader } from './components/Loader';
import { Product } from './components/Product';
import { useProducts } from './hooks/products';

function App() {

  const { loading, error, productsData } = useProducts();

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <Error error={error}/>}
      {productsData.map((item) => <Product product={item} key={item.id} />)}
    </div>
  );
}

export default App;

