import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import NoPage from "./pages/NoPage";

const App = () => {
	return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products/:handle" element={<Product />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
	)
}

export default App;