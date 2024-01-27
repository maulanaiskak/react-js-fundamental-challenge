import './App.css';
import ProductList from './features/product/ProductList';
import data from './products.json';

function App() {
    return (
        <>
            <ProductList data={data.products} />
        </>
    );
}

export default App;
