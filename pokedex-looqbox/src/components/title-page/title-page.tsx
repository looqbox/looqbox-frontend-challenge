import './title-page.css';
import { ThemeTogglerButton } from '../theme-toggler-button/theme-toggler-button';

const TitlePage = () => {
    return (
        <nav>
            <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="logo-pokemon"/>
            <ThemeTogglerButton />
        </nav>
    )
}

export default TitlePage;