import styled from 'styled-components';

export const QuickGuide = styled.div`
    margin: 30px 0;
    width: 90%;
    box-shadow: 12px 12px 17px rgba(0, 0, 0, 1.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 0;
    background-image: radial-gradient(#7f3d92, #000000);
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    margin: 20px 0;
`;

export const Imagem = styled.img`
    width: 29rem;
    height: 26rem;
    position: relative;
    top: 20px;
    margin: 0 1rem;
`;

export const TextContent = styled.div`
    flex: 1;
    padding: 20px;
    color: white;
    min-width: 300px;
`;

export const VocationsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
`;

export const ContainerVocations = styled.div`
    box-shadow: 0 2px 7px rgba(0, 0, 0, 1.1);
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
`;
