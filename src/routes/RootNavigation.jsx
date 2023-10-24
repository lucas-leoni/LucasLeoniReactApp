import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Body from '../components/Body';
import HomeScreen from '../screens/HomeScreen';
import ContactScreen from '../screens/ContactScreen';
import AboutScreen from '../screens/AboutScreen';

export default function RootNavigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/about" element={<AboutScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
