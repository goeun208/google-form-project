import { useController } from "react-hook-form";
import {useEffect} from "react";


const CardInput = ({control, name, field, index, insertOption, handleFocusInput}: any) => {

    const {
        field: { value, onChange: handleInputChange }
    } = useController({
        control,
        name
    })
    

    
    return (
        <div className="w-4/5 relative">  
            <input key={field.id}
                id={`option_${index}`}
                placeholder="옵션"
                value={value}
                onChange={(e) => {
                    handleInputChange(e);
                }}
                onFocus={(e) => {
                    e.target.select();
                }}
                onKeyDown={(e: any) => (e.keyCode === 13 && (e.preventDefault(), insertOption(index), handleFocusInput(index)))}
                className=" ml-2 w-full outline-none placeholder:text-black py-1 z-0 peer" />
            <div className="absolute w-full bottom-0 ml-2 peer-focus:animate-bdbottom peer-focus:border-b-2 peer-focus:border-[#4c2b87] peer-hover:border-b"></div>
        </div>
    );
}

export default CardInput;