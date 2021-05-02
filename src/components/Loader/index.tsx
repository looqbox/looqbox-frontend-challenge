import loading from '../../assets/images/loading.png';
import './loader.css';

export const Loader = () => {
  return (
    <div className="container-loader">
      <img src={loading} alt="loading" />
    </div>
  );
};
