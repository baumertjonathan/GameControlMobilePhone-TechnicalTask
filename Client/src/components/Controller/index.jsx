import DirectionalPad from "../DirectionalPad";
import LetterButtonCluster from "../LetterButtonCluster";
import ControllerCenter from "../ControllerCenter";
import {ControllerBG} from './index-styles';


function Controller ({
    handleUpClick, 
    handleDownClick, 
    handleLeftClick,
    handleRightClick,
    handleStartClick,
    handleSelectClick,
    handleAClick,
    handleBClick,
    handleYClick,
    handleXClick,
    }) {

    return(
        <ControllerBG>
            <DirectionalPad
                UpClickHandler={handleUpClick}
                DownClickHandler={handleDownClick}
                LeftClickHandler={handleLeftClick}
                RightClickHandler={handleRightClick}
            />
            <ControllerCenter
                StartClickHandler={handleStartClick}
                SelectClickHandler={handleSelectClick}

            />
            <LetterButtonCluster
                AClickHandler={handleAClick}
                BClickHandler={handleBClick}
                YClickHandler={handleYClick}
                XClickHandler={handleXClick}
            />
        </ControllerBG>
    )
}

export default Controller;