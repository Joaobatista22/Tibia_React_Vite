import styled, { keyframes } from 'styled-components';

import backgroundImage from '../../assets/Wallpaper.jpg';

export const Wallpaper = styled.div`
    position: relative;
    min-height: 100vh; /* Garante que a altura mínima seja 100% da altura da janela */
    display: flex;
    flex-direction: column; /* Permite que o conteúdo seja empilhado verticalmente */
    overflow: hidden;
    &::before {
        content: '';
        position: fixed; /* Torna a imagem de fundo fixa */
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(${backgroundImage});
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        filter: grayscale(100%);
        z-index: -1;
    }
`;

export const DivLogo = styled.div`
    position: absolute;
    top: 3rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
`;

const moveUpDown = keyframes`
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
`;

export const LogoTibia = styled.img`
    width: 54%;
    animation: ${moveUpDown} 4s infinite;
`;

export const Container = styled.div`
    position: relative;
    top: 20rem;
    width: 90%;
    left: 50%;
    transform: translateX(-50%);
`;

export const DownTown = styled.div`
    margin-bottom: 20em;
    display: flex;
    gap: 30px;
`;
