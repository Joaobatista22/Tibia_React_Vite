import styled from 'styled-components';

export const Navegation = styled.div`
    margin-top: 20px;

    box-shadow: 12px 12px 17px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
    background-image: radial-gradient(#7f3d92, #000000);
    display: flex;
    justify-content: space-around;
`;

export const ButtonNav = styled.button`
    width: 165px;
    height: 46px;
    cursor: pointer;
    color: #fff;
    font-size: 17px;
    font-weight: bold;
    border-radius: 1rem;
    border: none;
    position: relative;
    background: none;
    transition: 0.1s;

    &:after {
        content: '';
        width: 100%;
        height: 100%;
        background-image: radial-gradient(
            circle farthest-corner at 10% 20%,
            rgba(255, 94, 247, 1) 17.8%,
            rgba(2, 245, 255, 1) 100.2%
        );
        filter: blur(15px);
        z-index: -1;
        position: absolute;
        left: 0;
        top: 0;
    }
    &:hover {
        transform: scale(1.1);

        &:active {
            transform: scale(0.9) rotate(3deg);
            background: radial-gradient(
                circle farthest-corner at 10% 20%,
                rgba(255, 94, 247, 1) 17.8%,
                rgba(2, 245, 255, 1) 100.2%
            );
            transition: 0.5s;
        }
    }
`;
