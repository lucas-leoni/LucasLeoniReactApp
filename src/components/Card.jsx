import '../App.css';

export default function Card() {
  return (
    <div className="card bg-dark text-info" style={{ width: 18 + 'rem' }}>
      <img src="https://picsum.photos/100/60" alt="random-img" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-info text-white">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
