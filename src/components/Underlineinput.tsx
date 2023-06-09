import { useController } from "react-hook-form";

interface UnderlineInputProps {
    containerClassName?: string;
    inputClassName?: string;
    placeHolder?: string;
    underlineColor?: string;
    control: any;
    name: string;
    id?: string;
    index?: number;
    onEnter?: () => void;
    onBackspace?: () => void;
}

const UnderlineInput = ({
    containerClassName = "",
    inputClassName = "",
    placeHolder,
    control,
    name,
    id,
    index,
    onEnter,
    onBackspace,
}: UnderlineInputProps) => {
    const {
        field: {value, onChange: handleInputChange },
    } = useController({
        control,
        name,
    });
    return (
        <div className={`relative py-1 ${containerClassName}`}>
            <input type="text" placeholder={placeHolder} className={`w-full peer ${inputClassName}`}
            value={value || "" }
            onChange={(e) => {
                handleInputChange(e);
            }}
            onFocus={(e) => {
                e.currentTarget.select();
            }}
            onKeyDown={(e) => {
                if(e.nativeEvent.isComposing === false) {
                    if(e.key === "Enter" && onEnter) {
                        onEnter();
                        if(value.length === 0) {
                            handleInputChange(`옵션 ${index}`)
                        }
                    } else if(e.key === "Backspace" && onBackspace && value.length === 0) {
                        onBackspace();
                    }
                }
            }}
            />
            <div className="absolute w-full bottom-0 peer-focus:animate-bdbottom peer-focus:border-b-2 peer-focus:border-[#673ab7] peer-hover:border-b"></div>
        </div>
    );
};

export default UnderlineInput;