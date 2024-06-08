import styled from 'styled-components';

import backgroundAside from '../../assets/Aside/background.gif';
import backgroundRank from '../../assets/Aside/RankImg.png';

export const AsideBox = styled.div`
    margin: 30px 0;
    height: 40rem;
    width: 25%;
    box-shadow: 0 0 8px 3px rgba(0, 0, 0, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 0;
    background-image: url(${backgroundAside});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    overflow: hidden;
`;
export const ContainerInfo = styled.div`
    width: 93%;
    height: 4%;
    margin-left: 25px;
    background-color: #ffff;
    clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;
export const ContainerRanks = styled.div`
    margin-top: 20px;
    height: 90%;
    width: 80%;
    padding: 3em 0;
    background-image: url(${backgroundRank});
    background-size: cover;
    box-shadow: 0 0 8px 3px rgba(0, 0, 0, 1);
    display: grid; /* Alterado para display grid */
    grid-template-columns: 1fr; /* Uma coluna */
    gap: 3rem; /* Espaçamento entre as divs */
`;
export const Tops = styled.div`
    display: flex;
    align-items: center;
    position: relative; /* Adiciona position relative ao container */
`;

export const ImageOverlay = styled.img`
    width: 55px;
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
    color: red;
    position: absolute;
    font-size: 17px;
    font-weight: bold;
    top: 20px;
    left: 70px;
    width: 100%;
`;
