import { 
    DPadBackground,
    DPadButton,
    DPadSet,
    DpadCenter 
} from "./index-styles";

function DirectionalPad({
    UpClickHandler,
    DownClickHandler,
    LeftClickHandler,
    RightClickHandler,
}) {
   


    return(
        <DPadBackground>
            <>
                <DPadSet>
                    <DPadButton 
                        // onMouseDown={UpClickHandler} 
                        // onMouseUp={UpClickHandler}
                        onTouchStart={UpClickHandler}
                        onTouchEnd={UpClickHandler}
                    />
                </DPadSet>
                <DPadSet>
                    <DPadButton 
                        // onMouseDown={LeftClickHandler} 
                        // onMouseUp={LeftClickHandler}
                        onTouchStart={LeftClickHandler}
                        onTouchEnd={LeftClickHandler}
                    />
                    <DpadCenter/>
                    <DPadButton 
                        // onMouseDown={RightClickHandler} 
                        // onMouseUp={RightClickHandler}
                        onTouchStart={RightClickHandler}
                        onTouchEnd={RightClickHandler}
                    />
                </DPadSet>
                <DPadSet>
                    <DPadButton 
                        // onMouseDown={DownClickHandler} 
                        // onMouseUp={DownClickHandler}
                        onTouchStart={DownClickHandler}
                        onTouchEnd={DownClickHandler}
                    />
                </DPadSet>
            </>
        </DPadBackground>
    ) 
}

export default DirectionalPad