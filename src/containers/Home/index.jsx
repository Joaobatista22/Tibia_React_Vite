import Logo from '../../assets/Logo.png';
import { Aside } from '../../components/Aside';
import { CategoryCarousel } from '../../components/CategoryCarousel';
import { Nav } from '../../components/Nav';
import { Section } from '../../components/Section';
import { Wallpaper, DivLogo, LogoTibia, Container, DownTown } from './styles';

export function Home() {
    return (
        <Wallpaper>
            <DivLogo>
                <LogoTibia src={Logo} alt="logo da home" />
            </DivLogo>
            <Container>
                <CategoryCarousel />
                <Nav />
                <DownTown>
                    <Section />
                    <Aside />
                </DownTown>
            </Container>
        </Wallpaper>
    );
}
