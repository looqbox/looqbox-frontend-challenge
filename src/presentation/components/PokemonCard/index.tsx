import { useNavigate } from "react-router-dom";
import "./styles.css"

interface PokemonCardProps {
  name: string;
  resume: string;
  imgUrl: string;
  id?: number;
}

const PokemonCard: React.FC<PokemonCardProps> = ({name, resume, imgUrl, id}) => {
  const navigate = useNavigate();
  return (
    <li onClick={() => navigate(`/detalhes/${id}`)} className="card-container">
      <div className="card-infos">
        <h1 className="card-title">{name}</h1>
        <p>
          {resume} 
        </p>
      </div>
      <div className="card-image-container">
        <img className="card-image" src={imgUrl} />
      </div>
    </li>
  )
}

export default PokemonCard;