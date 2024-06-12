import styled from 'styled-components';

import backgroundImage from '../../assets/Aside/background.gif';

export const AsideBox = styled.div`
    margin: 30px 0;
    height: 60rem;
    width: 25%;
    box-shadow: 0 0 8px 3px rgba(0, 0, 0, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 0;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    overflow: hidden;

    @media (max-width: 1580px) {
        width: 30%;
    }
`;

export const ContainerInfo = styled.div`
    width: 93%;
    height: 40px;
    margin-left: 25px;
    background-color: #fff;
    clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const ContainerRanks = styled.div`
    margin-top: 34px;
    height: 88%;
    width: 90%;
    padding: 4em 0;
    background-image: url(/src/assets/Aside/RankImg.png);
    background-size: cover;
    display: grid;
    grid-template-columns: 1fr;

    @media (max-width: 1580px) {
        background-position: center;
        background-repeat: no-repeat;
    }
`;

export const Tops = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
`;

export const ImageOverlay = styled.img`
    width: 65px;
    position: absolute;
    top: 5px;
    left: 0;
`;

export const AddonImage = styled.img`
    width: 95px;
    position: absolute;
    top: -36px;
    left: -48px;
    z-index: 1;
`;

export const P = styled.p`
    color: #fffe;
    position: absolute;
    font-size: 17px;
    font-weight: bold;
    top: 20px;
    left: 70px;
    width: 100%;

    @media (max-width: 1580px) {
        font-size: 18px;
        padding-left: 15px;
    }
`;
