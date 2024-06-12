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
    ContainerBackground,
    ConteinerText,
    P,
} from './styles';

export function Section() {
    return (
        <QuickGuide>
            <ConteinerText>
                <img
                    style={{ marginRight: '5px' }}
                    src="https://www.baiakdetona.com.br/layouts/tibiarl/images/menu/icon-account.gif"
                    alt=""
                    srcSet=""
                />
                <h1 style={{ padding: '3px' }}>Guia Rapido</h1>
            </ConteinerText>
            <ContainerBackground>
                {' '}
                <ContentWrapper>
                    <Imagem
                        src="https://tibiawiki.com.br/images/1/1a/Startscreen.jpg"
                        alt="Imagem Quests"
                    />
                    <TextContent>
                        <h1 style={{ fontSize: '26px', color: '#5a2800' }}>
                            Primeiros Passos
                        </h1>
                        <P>
                            Você começará sua aventura com um tutorial em uma
                            caverna misteriosa. Ao criar um novo personagem é
                            possível pular este tutorial. Basta deixar a caixa
                            Do you want to play the tutorial? - "Você gostaria
                            de jogar o tutorial?" - na seção de criação de
                            personagem desmarcada. Use o ponteiro do mouse para
                            encontrar o próximo espaço para o qual você deve
                            mover seu personagem. O ponteiro do mouse passará de
                            um sinal de proibição para algumas pernas andantes.
                            Depois de dominar o tutorial, você poderá passear
                            livremente clicando em algum lugar da janela do
                            jogo, usando as teclas de seta ou clicando com o
                            botão esquerdo no minimapa. Alguns NPCs marcarão
                            pontos importantes em seu minimapa se você
                            solicitar. No entanto, você também pode adicionar
                            marcas próprias ao automap, por exemplo, para
                            lembrar a entrada da sua masmorra favorita, para
                            encontrar um NPC especial ou para marcar o caminho
                            para sua própria casa.
                        </P>
                    </TextContent>
                </ContentWrapper>
                <h1 style={{ fontSize: '26px', color: '#5a2800' }}>
                    Vocations
                </h1>
                <P>
                    A escolha da vocação do jogador define o rumo de sua
                    jornada. Equipamentos, caçadas, habilidades, entre muitos
                    outros detalhes se definem através desta decisão. Após o
                    Patches/10.55, todos os personagens iniciantes irão para
                    Dawnport, onde poderão testar as vantagens e desvantagens de
                    cada uma das quatro vocações antes de irem para o continente
                    principal. Mesmo com a implementação de Dawnport, os
                    personagens poderão ir para Rookgaard, onde escolherão sua
                    vocação ao passar de The Oracle para a Isle of Destiny, e
                    posteriormente, viajarão para o continente principal. Sendo
                    assim, cada jogador pode escolher uma vocação distinta para
                    seguir. São elas:
                </P>
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
                <P>
                    Cada vocação tem uma quantidade diferente de Capacidade,
                    Hitpoints, e Mana, que são obtidos a cada avanço de level,
                    cada vocação tem um ritmo diferente de Regeneração de
                    Hitpoints e Mana. Além destas, a sua vocação também
                    determina a velocidade de avanço em determinadas habilidades
                </P>
            </ContainerBackground>
        </QuickGuide>
    );
}
