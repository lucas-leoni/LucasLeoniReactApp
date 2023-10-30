import '../App.css';
import { NavLink } from 'react-router-dom';

export default function CardLoading(props) {
  return (
    <div className="card bg-dark text-info" aria-hidden="true" style={{ width: 18 + 'rem' }}>
      <img src={`https://picsum.photos/id/${props.index}/600/400`} alt="random-img" />
      <div className="card-body">
        <h5 className="card-title placeholder-glow">
          <span className="placeholder col-6"></span>
        </h5>
        <p className="card-text placeholder-glow">
          <span className="placeholder col-7"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-6"></span>
          <span className="placeholder col-8"></span>
        </p>
        <NavLink className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></NavLink>
      </div>
    </div>
  );
}