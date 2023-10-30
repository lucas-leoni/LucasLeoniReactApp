import Card from '../components/Card';
import Carousel from '../components/Carousel';
import './css/HomeScreen.css';

export default function HomeScreen() {
  const cards = [];
  let randomIndex = Math.floor(Math.random() * 100);

  for (let i = 0; i < 4; i++) {
    cards.push(<Card key={i} index={randomIndex} />);
    randomIndex+=randomIndex;
  }

  return (
    <main>
      <div className="container d-flex justify-content-center flex-column py-3">
        <h1 className="pb-3">Home Screen</h1>
        <Carousel />
      </div>
      <div className="container">
        <div className="row">
          {cards.map((card, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mt-5">
              {card}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}