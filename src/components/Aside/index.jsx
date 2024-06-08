import backChar from '../../assets/Aside/backChar.png';
import {
    AsideBox,
    ContainerInfo,
    ContainerRanks,
    Tops,
    ImageOverlay,
    AddonImage,
    P,
} from './styles';

export function Aside() {
    return (
        <AsideBox>
            <ContainerInfo>
                <p
                    style={{
                        fontSize: '17px',
                        color: '#5a2800',
                        fontWeight: 'bold',
                    }}
                >
                    Tops ultimos 10 Anos
                </p>
            </ContainerInfo>
            <ContainerRanks>
                <Tops>
                    <AddonImage
                        src="https://tibiawiki.com.br/images/4/48/Outfit_Golden_Male_Addon_3.gif"
                        alt="Imagem addon"
                    />
                    <ImageOverlay src={backChar} alt="Imagem Quests" />
                    <P>Dejairzin</P>
                </Tops>
                <div style={{ marginTop: '-0em' }}>
                    <Tops>
                        <AddonImage
                            src="https://tibiawiki.com.br/images/d/df/Outfit_Afflicted_Male_Addon_3.gif"
                            alt="Imagem addon"
                        />
                        <ImageOverlay src={backChar} alt="Imagem Quests" />
                        <P>Goraca</P>
                    </Tops>
                </div>
                <div style={{ marginTop: '-3px' }}>
                    <Tops>
                        <AddonImage
                            src="https://tibiawiki.com.br/images/8/8a/Outfit_Summoner_Male_Addon_3.gif"
                            alt="Imagem addon"
                        />
                        <ImageOverlay src={backChar} alt="Imagem Quests" />
                        <P>Bobeek</P>
                    </Tops>
                </div>
                <div style={{ marginTop: '-11px' }}>
                    <Tops>
                        <AddonImage
                            src="https://tibiawiki.com.br/images/3/34/Outfit_Druid_Female_Addon_3.gif"
                            alt="Imagem addon"
                        />
                        <ImageOverlay src={backChar} alt="Imagem Quests" />
                        <P>Veylloro</P>
                    </Tops>
                </div>
                <div style={{ marginTop: '-11px' }}>
                    <Tops>
                        <AddonImage
                            src="https://tibiawiki.com.br/images/d/da/Outfit_Mage_Male_Addon_3.gif"
                            alt="Imagem addon"
                        />
                        <ImageOverlay src={backChar} alt="Imagem Quests" />
                        <P>Szczeisny</P>
                    </Tops>
                </div>
                <div style={{ marginTop: '-13px' }}>
                    <Tops>
                        <AddonImage
                            src="https://tibiawiki.com.br/images/8/83/Outfit_Sinister_Archer_Female_Addon_3.gif"
                            alt="Imagem addon"
                        />
                        <ImageOverlay src={backChar} alt="Imagem Quests" />
                        <P>Wedzy </P>
                    </Tops>
                </div>
                <div style={{ marginTop: '-18px' }}>
                    <Tops>
                        <AddonImage
                            src="https://tibiawiki.com.br/images/2/24/Outfit_Void_Master_Female.gif"
                            alt="Imagem addon"
                        />
                        <ImageOverlay src={backChar} alt="Imagem Quests" />
                        <P>Kommander </P>
                    </Tops>
                </div>
                <div style={{ marginTop: '-21px' }}>
                    <Tops>
                        <AddonImage
                            src="https://tibiawiki.com.br/images/7/75/Outfit_Retro_Hunter_Male.gif"
                            alt="Imagem addon"
                        />
                        <ImageOverlay src={backChar} alt="Imagem Quests" />
                        <P>Ke vinho</P>
                    </Tops>
                </div>
            </ContainerRanks>
        </AsideBox>
    );
}
