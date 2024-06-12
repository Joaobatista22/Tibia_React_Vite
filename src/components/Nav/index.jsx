import { Navegation, ButtonNav } from './styles';
export function Nav() {
    return (
        <Navegation>
            <a
                href="https://tibiawiki.com.br/wiki/NPCs"
                target="_blank"
                rel="noopener noreferrer"
            >
                <ButtonNav>NPCs</ButtonNav>
            </a>
            <a
                href="https://tibiawiki.com.br/wiki/Runas"
                target="_blank"
                rel="noopener noreferrer"
            >
                <ButtonNav>Runas</ButtonNav>
            </a>
            <a
                href="https://tibiawiki.com.br/wiki/Updates_e_Patches"
                target="_blank"
                rel="noopener noreferrer"
            >
                <ButtonNav>Updates</ButtonNav>
            </a>
            <a
                href="https://tibiawiki.com.br/wiki/Tarefas_Di%C3%A1rias"
                target="_blank"
                rel="noopener noreferrer"
            >
                <ButtonNav>Tasks Diárias</ButtonNav>
            </a>
            <a
                href="https://tibiawiki.com.br/wiki/Cidades"
                target="_blank"
                rel="noopener noreferrer"
            >
                <ButtonNav>Cidades</ButtonNav>
            </a>
        </Navegation>
    );
}
