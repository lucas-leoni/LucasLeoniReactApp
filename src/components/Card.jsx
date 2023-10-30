import '../App.css';
import { NavLink } from 'react-router-dom';

export default function Card(props) {
  return (
    <div className="card bg-dark text-info" style={{ width: 18 + 'rem' }}>
      <img src={`https://picsum.photos/id/${props.index}/600/400`} alt="random-img" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <NavLink to="/" className="btn btn-primary text-white">
          Go somewhere
        </NavLink>
      </div>
    </div>
  );
}
