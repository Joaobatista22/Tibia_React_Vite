import styled from 'styled-components';

export const Container = styled.div`
    box-shadow: 12px 12px 17px rgba(0, 0, 0, 1.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 0;
    background-image: radial-gradient(#7f3d92, #000000);
`;

export const ContainerItems = styled.div`
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
    background-image: url(https://www.tibiawiki.com.br/images/b/b0/Background_Artwork_13.20.13560.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;
export const Image = styled.img`
    width: 140px;
    padding: 20px 5px;
    z-index: 1;
`;
export const Button = styled.button`
    background-color: #9758a6;
    width: 100%;
    padding: 6px;
    border: none;
    font-size: medium;
    color: #ffff;
    border-radius: 0 0 10px 10px;
    cursor: pointer;

    :hover {
        opacity: 0.7;
        cursor: pointer;
    }
`;
