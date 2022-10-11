import { ButtonPadSet, ClusterBackground, ColorButton1, ColorButton2 } from "./index-styles";


function LetterButtonCluster({
    AClickHandler,
    BClickHandler,
    YClickHandler,
    XClickHandler

}) {
    return(
        <ClusterBackground>
            <>
            <ButtonPadSet>
                <ColorButton1
                    // onMouseDown={YClickHandler}
                    // onMouseUp={YClickHandler} 
                    onTouchStart={YClickHandler}
                    onTouchEnd={YClickHandler}
                >Y</ColorButton1> 
                <ColorButton1
                    // onMouseDown={XClickHandler}
                    // onMouseUp={XClickHandler} 
                    onTouchStart={XClickHandler}
                    onTouchEnd={XClickHandler}
                >X</ColorButton1> 
            </ButtonPadSet>
            <ButtonPadSet>
                <ColorButton2
                    // onMouseDown={BClickHandler}
                    // onMouseUp={BClickHandler} 
                    onTouchStart={BClickHandler}
                    onTouchEnd={BClickHandler}
                >B</ColorButton2> 
                <ColorButton2
                    // onMouseDown={AClickHandler}
                    // onMouseUp={AClickHandler} 
                    onTouchStart={AClickHandler}
                    onTouchEnd={AClickHandler}
                >A</ColorButton2> 
            </ButtonPadSet>
            </>
        </ClusterBackground>
    )
}

export default LetterButtonCluster;