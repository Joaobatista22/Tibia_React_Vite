import styled, { keyframes } from 'styled-components';

import backgroundImage from '../../assets/Wallpaper.jpg';

export const Wallpaper = styled.div`
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    &::before {
        content: '';
        position: fixed;
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
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
        top: 1.5rem;
    }
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
    width: 44%;
    animation: ${moveUpDown} 4s infinite;

    @media (max-width: 768px) {
        width: 70%;
    }

    @media (max-width: 480px) {
        width: 90%;
    }
`;

export const Container = styled.div`
    position: relative;
    top: 20rem;
    width: 90%;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 1580px) {
        top: 16rem;
    }

    @media (max-width: 480px) {
        top: 5rem;
    }
`;

export const DownTown = styled.div`
    margin-bottom: 20em;
    display: flex;
    gap: 30px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 20px;
        margin-bottom: 10em;
    }
`;
