import { useController, useFieldArray } from "react-hook-form";
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useRef } from "react";
import IconButton from "./IconButton";
import CardInput from "./CardInput";

// 배열 쓰기
const QuestionList = ({ control, name }: any) => {
    // const {watch, getValues, setValue } = useForm();
    const optionInput = useRef<HTMLDivElement>(null);
    const {
        field: { value }
    } = useController({
        control,
        name
    })

    const {
        fields, insert, remove
    } = useFieldArray({
        control,
        name: `${name}.options`
    })

    const insertOption = (index: number) => {
        // setValue(`${name}.options.${index}.optionTitle`, e)
        insert(index + 1, {optionTitle: ""});
    }

    const handleFocusInput = (index: number) => {
        const opt = optionInput.current;
        setTimeout(() => {
            (opt?.children[index + 1].children[1].querySelector(`#option_${index + 1}`) as HTMLInputElement).focus();
        }, 10); // 바로 하면 index 인식이 안돼서 setTimeout 사용
    }

    const deleteOption = (index: number) => {
        remove(index);
    }

    return (
        <div className="w-full pl-7" ref={optionInput}>
            {value && fields && fields.map((field, index) => (
                <div className="h-[3rem] flex items-center text-sm mb-1 ml-1" key={field.id}>
                    {
                        value.type === "radio" && <RadioButtonUncheckedRoundedIcon color="disabled" />
                    }
                    {
                        value.type === "checkbox" && <CheckBoxOutlineBlankRoundedIcon color="disabled" />
                    }
                    {
                        value.type === "dropdown" && <span>{index + 1}</span>
                    }
                    <CardInput control={control} name={`${name}.options.${index}.optionTitle`} field={field} index={index} insertOption={insertOption} handleFocusInput={handleFocusInput}/>
                    <div className="absolute right-[4.5rem]">
                        <IconButton label="이미지">
                            <CropOriginalIcon color="action"/>
                        </IconButton>
                    </div>
                    { fields.length !== 1 && <div className="absolute right-[2rem]" onClick={() => (deleteOption(index))}>
                        <IconButton label="삭제">
                            <CloseIcon color="action"/>
                        </IconButton>
                    </div>}
                    
                </div>))}

        </div>

    )
}

export default QuestionList;