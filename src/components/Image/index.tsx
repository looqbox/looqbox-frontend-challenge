import React from 'react';
import Loading from '../Loading';
import styles from './styles.module.css';

interface IProps {
    src: string;
    alt?: string;
}
const Image: React.FC<IProps> = ({ src, alt }) => {
    const [imgLoading, setImgLoading] = React.useState(true);

    return (
        <>
            {imgLoading && (
                <div className={styles.container_loading}>
                    <Loading />
                </div>
            )}
            <img
                src={src}
                alt={alt}
                onLoad={() => setImgLoading(false)}
                className={`${!imgLoading ? styles.image_animation_show : ''}`}
            />
        </>
    );
};

export default Image;
