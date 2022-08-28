import "./App.css";
import ImagePage from "./components/ImagePage";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <div className="App">
      <ImagePage className="imagePage" />
      <ProductPage className="productPage" />
    </div>
  );
}

export default App;
