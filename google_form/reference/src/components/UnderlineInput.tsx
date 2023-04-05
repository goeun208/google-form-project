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
    onBackspace? : () => void;
}

const UnderlineInput = ({
    containerClassName = "",
    inputClassName = "",
    placeHolder,
    underlineColor,
    control,
    name,
    id,
    index,
    onEnter,
    onBackspace,
}: UnderlineInputProps) => {
    const {
        field: { value, onChange: handleInputChange },
    } = useController({
        control,
        name,
    });

    return (
        <div className={`relative py-1 text-sm ${containerClassName}`}>
            <input
                type="text"
                id={id}
                placeholder={placeHolder}
                className={`peer/input w-full ${inputClassName}`}
                value={value}
                onChange={(e) => {
                    handleInputChange(e);
                }}
                onFocus={(e) => {
                    e.currentTarget.select();
                }}
                onKeyDown={(e) => {
                    if(e.nativeEvent.isComposing === false) {
                        if (e.key === "Enter" && onEnter) {
                            onEnter();
                            if(value.length === 0) {
                                handleInputChange(`옵션 ${index}`)
                            }
                        } else if (e.key === "Backspace" && onBackspace && value.length === 0) {
                            onBackspace();
                        }
                    }
                }}
            />
            <div
                className={`absolute -bottom-[1px] left-[50%] translate-x-[-50%] h-[1px] transition-all peer-focus/input:animate-show-underbar bg-[#673ab7] bg-[${underlineColor}]`}
            />
        </div>
    );
};

export default UnderlineInput;
