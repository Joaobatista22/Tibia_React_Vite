import styled from 'styled-components';

import ImgBorda from '../../assets/borda.png';
export const QuickGuide = styled.div`
    margin: 30px 0;
    width: 100%;
    box-shadow: 12px 12px 17px rgba(0, 0, 0, 1.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 0;
    background-image: radial-gradient(#7f3d92, #000000);
`;
export const ContainerBackground = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    width: 98%;
    height: 99%;
    border-radius: 8px;
    background-image: radial-gradient(#7f3d92, #000000),
        url(https://aurera-global.com/layouts/Nakjila/images/scroll.gif);
    background-size: cover;
    background-blend-mode: overlay;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: inset 0 0 10px #5a2800;
        pointer-events: none; /* Para garantir que o pseudo-elemento não interfira com eventos de clique */
    }

    &::after {
        content: '';
        position: absolute;
        top: 1px;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        background-image: url(${ImgBorda});
        background-size: cover;
        opacity: 0.5; /* Ajuste a opacidade conforme necessário */
        pointer-events: none; /* Para garantir que o pseudo-elemento não interfira com eventos de clique */
    }
`;
export const ContentWrapper = styled.div`
    display: flex;

    align-items: center;
    gap: 20px;
    padding: 20px;
`;

export const ConteinerText = styled.div`
    z-index: 1;
    display: flex;
    width: 100%;
    justify-content: center;
    color: #ffff;
    box-shadow: 0 0 8px 3px rgba(0, 0, 0, 1);
    background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(46, 6, 64, 1) 45%,
        rgba(0, 0, 0, 1) 100%
    );
`;

export const Imagem = styled.img`
    max-width: 52%;
    height: auto;
    z-index: 1;
`;

export const TextContent = styled.div`
    display: flex;
    gap: 9px;
    flex-direction: column;
    flex: 1;
    padding: 35px 13px 5px 1px;
`;

export const VocationsWrapper = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
`;

export const ContainerVocations = styled.div`
    position: relative; /* Adicionado para o posicionamento absoluto do ::after */
    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    width: 210px;
    height: 250px;
    display: flex;
    flex-direction: column;
    margin: 10px;
    justify-content: end;
    align-items: center;
    gap: 10px;
    background-image: url(https://www.tibiawiki.com.br/images/f/f0/Client_Artwork_12.20.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    ::after {
        content: '';
        position: absolute;
        height: calc(
            100% + 5px
        ); /* Ajusta a altura para cobrir totalmente o contêiner */
        width: calc(
            100% + 2px
        ); /* Ajusta a largura para cobrir totalmente o contêiner */
        top: -3px; /* Move o pseudo-elemento para cima */
        left: -2px; /* Move o pseudo-elemento para a esquerda */
        background: linear-gradient(
            80deg,
            rgba(0, 0, 0, 0.85),
            rgba(0, 0, 0, 0.7) 40%,
            transparent 85%
        );
        border-radius: 10px;
    }
    &:hover {
        transform: scale(1.1);
    }
`;
