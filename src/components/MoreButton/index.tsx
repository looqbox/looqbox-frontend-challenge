import imageMore from '../../assets/images/more.png';
import './moreButton.css';

interface MoreButtonProps {
  onLoadMore: () => void;
}

export const MoreButton = ({ onLoadMore }: MoreButtonProps) => {
  return (
    <div className="more-button-container">
      <button type="button" onClick={onLoadMore} className="more-button">
        <img src={imageMore} alt="more" />
      </button>
    </div>
  );
};
