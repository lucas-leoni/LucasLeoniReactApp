import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Body from '../components/Body';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import ContactScreen from '../screens/ContactScreen';

export default function RootNavigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
