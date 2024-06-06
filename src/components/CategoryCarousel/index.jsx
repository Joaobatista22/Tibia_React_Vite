import Carousel from 'react-elastic-carousel';

import { Container, ContainerItems, Image, Button } from './styles';

export function CategoryCarousel() {
    const breakPoints = [
        { width: 1, itemsToShow: 2 },
        { width: 400, itemsToShow: 3, itemsToScroll: 2, pagination: false },
        { width: 600, itemsToShow: 4 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
    ];

    return (
        <Container>
            <Carousel
                enableAutoPlay
                autoPlaySpeed={8500}
                breakPoints={breakPoints}
                style={{ width: '90%' }}
                pagination={false}
                showArrows={true}
                isInfiniteScroll
            >
                <ContainerItems>
                    <Image
                        src="https://tibiawiki.com.br/images/6/63/Icone7.png"
                        alt="Imagem Quests"
                    />
                    <Button>Quests</Button>
                </ContainerItems>
                <ContainerItems>
                    <Image
                        src="https://tibiawiki.com.br/images/3/37/Icone3.png"
                        alt="Imagem Itens"
                    />
                    <Button>Itens</Button>
                </ContainerItems>
                <ContainerItems>
                    <Image
                        src="https://tibiawiki.com.br/images/a/a8/Icone2.png"
                        alt="Imagem Criaturas"
                    />
                    <Button>Criaturas</Button>
                </ContainerItems>
                <ContainerItems>
                    <Image
                        src="https://tibiawiki.com.br/images/6/67/Icone10.png"
                        alt="Imagem Outfits"
                    />
                    <Button>Outfits</Button>
                </ContainerItems>
                <ContainerItems>
                    <Image
                        src="https://tibiawiki.com.br/images/0/09/Icone11.png"
                        alt="Imagem Montarias"
                    />
                    <Button>Montarias</Button>
                </ContainerItems>
                <ContainerItems>
                    <Image
                        src="https://tibiawiki.com.br/images/9/90/Icone4.png"
                        alt="Imagem Magias"
                    />
                    <Button>Magias</Button>
                </ContainerItems>
            </Carousel>
        </Container>
    );
}
