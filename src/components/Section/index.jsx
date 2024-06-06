/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */

import { Button, Image } from '../CategoryCarousel/styles';
import {
    QuickGuide,
    Imagem,
    TextContent,
    ContentWrapper,
    ContainerVocations,
    VocationsWrapper,
} from './styles';

export function Section() {
    return (
        <QuickGuide>
            <h1>Sequition</h1>

            <ContentWrapper>
                <Imagem
                    src="https://tibiawiki.com.br/images/1/1a/Startscreen.jpg"
                    alt="Imagem Quests"
                />
                <TextContent>
                    <h1>Primeiros Passos</h1>
                    <h3>Movendo seu personagem</h3>
                    <p style={{ fontSize: '20px' }}>
                        Você começará sua aventura com um tutorial em uma
                        caverna misteriosa. Ao criar um novo personagem é
                        possível pular este tutorial. Basta deixar a caixa Do
                        you want to play the tutorial? - "Você gostaria de jogar
                        o tutorial?" - na seção de criação de personagem
                        desmarcada. Use o ponteiro do mouse para encontrar o
                        próximo espaço para o qual você deve mover seu
                        personagem. O ponteiro do mouse passará de um sinal de
                        proibição para algumas pernas andantes. Depois de
                        dominar o tutorial, você poderá passear livremente
                        clicando em algum lugar da janela do jogo, usando as
                        teclas de seta ou clicando com o botão esquerdo no
                        minimapa. Alguns NPCs marcarão pontos importantes em seu
                        minimapa se você solicitar. No entanto, você também pode
                        adicionar marcas próprias ao automap, por exemplo, para
                        lembrar a entrada da sua masmorra favorita, para
                        encontrar um NPC especial ou para marcar o caminho para
                        sua própria casa.
                    </p>
                </TextContent>
            </ContentWrapper>
            <h1>Vocations</h1>
            <VocationsWrapper>
                <ContainerVocations>
                    <Image
                        src="https://tibiawiki.com.br/images/d/d5/Icone12.png"
                        alt="Imagem Druids"
                    />
                    <Button>Druids</Button>
                </ContainerVocations>
                <ContainerVocations>
                    <Image
                        src="https://tibiawiki.com.br/images/3/36/Icone13.png"
                        alt="Imagem Knights"
                    />
                    <Button>Knights</Button>
                </ContainerVocations>
                <ContainerVocations>
                    <Image
                        src="https://tibiawiki.com.br/images/6/65/Icone14.png"
                        alt="Imagem Paladins"
                    />
                    <Button>Paladins</Button>
                </ContainerVocations>
                <ContainerVocations>
                    <Image
                        src="https://tibiawiki.com.br/images/9/96/Icone15.png"
                        alt="Imagem Sorcerers"
                    />
                    <Button>Sorcerers</Button>
                </ContainerVocations>
            </VocationsWrapper>
        </QuickGuide>
    );
}
