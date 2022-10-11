import {
    CenterWrapper,
    LogoText,
    InvertedLogoText,
    SlashButton,
    SlashButtonText,
    ButtonsWrapper,
    ButtonPairing
} from './index-styles'

function ControllerCenter({
        StartClickHandler,
        SelectClickHandler
    }) {

    return(
        <CenterWrapper>
            <div>
                <LogoText>SUPER PHONE</LogoText>
                <InvertedLogoText>Technical Assesment</InvertedLogoText>
            </div>
            <ButtonsWrapper>
                <ButtonPairing 
                    onTouchStart={SelectClickHandler}
                    onTouchEnd={SelectClickHandler}>
                    <SlashButton/>
                    <SlashButtonText>Select</SlashButtonText>
                </ButtonPairing>
                <ButtonPairing 
                    onTouchStart={StartClickHandler}
                    onTouchEnd={StartClickHandler}
                    >
                    <SlashButton/>
                    <SlashButtonText>Start</SlashButtonText>
                </ButtonPairing>
            </ButtonsWrapper>
        </CenterWrapper>
    )
}

export default ControllerCenter