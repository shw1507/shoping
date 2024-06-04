import './card.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card (props) {
    return(
        <div className="col-md-4">
            <img src={`/shoes`+ (props.i+1) +`.jpg`} alt="shoes" style={{width: "80%"}}/>
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.price}</p>
            <p>{props.shoes.content}</p>
        </div>
    );
}

export default Card;