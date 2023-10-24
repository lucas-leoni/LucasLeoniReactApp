import Card from '../components/Card';
import Carousel from '../components/Carousel';
import './css/HomeScreen.css';

export default function HomeScreen() {
  const cards = [];

  for (let i = 0; i < 4; i++) {
    cards.push(<Card key={i} />);
  }

  return (
    <main>
      <div className="container d-flex justify-content-center flex-column py-3">
        <h1 className="pb-3">Home Screen</h1>
        <Carousel />
      </div>
      <hr className="text-info" />
      <div className="container d-flex justify-content-between py-3">
        {cards}
      </div>
    </main>
  );
}