import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';


export default function App() {
  return (
    <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        <Route path="/" element={<Navigate to="/employees" />} />
        <Route path="/employees" element={<ListEmployeeComponent />} />
        <Route path="/add-employee/:id" element={<CreateEmployeeComponent />} />
        <Route path="/view-employee/:id" element={<ViewEmployeeComponent />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}
