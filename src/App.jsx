import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Layout from './layout/Layout';

function App() {
  return (
    <BrowserRouter basename="/">
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App