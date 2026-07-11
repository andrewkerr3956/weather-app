import logoImg from '../../../assets/images/logo.svg';

export default function Header() {
    return (
        <header id="main-header">
            <picture>
                <img src={logoImg} alt="WeatherNow Logo" />
            </picture>
        </header>
    )
}