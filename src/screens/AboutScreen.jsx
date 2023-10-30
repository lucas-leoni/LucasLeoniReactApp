import CardLoading from '../components/CardLoading';
import Carousel from '../components/Carousel';
import './css/AboutScreen.css';

export default function AboutScreen() {
  const cards = [];
  let randomIndex = Math.floor(Math.random() * 100);

  for (let i = 0; i < 4; i++) {
    cards.push(<CardLoading key={i} index={randomIndex} />);
    randomIndex+=randomIndex;
  }

  return (
    <main>
      <div className="container d-flex justify-content-center flex-column py-3">
        <h1 className="pb-3">About Screen</h1>
        <div className="row">
          {cards.map((card, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-5">
              {card}
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <Carousel />
      </div>
    </main>
  );
}
