import { useController, useFieldArray } from "react-hook-form";
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from "react";
import IconButton from "./IconButton";
import CardInput from "./CardInput";

// 배열 쓰기
const QuestionList = ({ control, name }: any) => {
    // const {watch, getValues, setValue } = useForm();

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

    useEffect(() => {
        console.log('drop fields',fields);
    }, [fields]);

    useEffect(() => {
        console.log('drop value ===> ', value);
    }, [value]);

    // const handleList = (option: string) => {
    //     setOptionList([
    //         ...optionList,
    //         option
    //     ]);
    //     setOption('');
    // }

    const insertOption = (index: number) => {
        // setValue(`${name}.options.${index}.optionTitle`, e)
        insert(index + 1, {optionTitle: ""});
    }

    const deleteOption = (index: number) => {
        index !== 0 && remove(index);
    }

    
    // useEffect(() => {
    //     console.log('register watch ====>', watch())
    // }, [watch()]);


    return (
        <div className="w-full pl-7">
            {value && fields && fields.map((field, index) => (
                <div className="h-[3rem] flex items-center text-sm mb-1 ml-1">
                    {
                        value.type === "radio" && <RadioButtonUncheckedRoundedIcon color="disabled" />
                    }
                    {
                        value.type === "checkbox" && <CheckBoxOutlineBlankRoundedIcon color="disabled" />
                    }
                    {
                        value.type === "dropdown" && <span>{index + 1}</span>
                    }
                    <CardInput control={control} name={`${name}.options.${index}.optionTitle`} field={field} index={index} insertOption={insertOption} />
                    <div className="absolute right-[4.5rem]">
                        <IconButton label="이미지">
                            <CropOriginalIcon color="action"/>
                        </IconButton>
                    </div>
                    <div className="absolute right-[2rem]" onClick={() => (deleteOption(index))}>
                        <IconButton label="삭제">
                            <CloseIcon color="action"/>
                        </IconButton>
                    </div>
                    
                </div>))}
                {/* <div className="h-[3rem] flex items-center text-sm mb-1 pl-1">
                    {
                        value.type === "radio" ? <RadioButtonUncheckedRoundedIcon color="disabled" />
                        : value.type === "checkbox" ? <CheckBoxOutlineBlankRoundedIcon color="disabled" />
                        : <span>1</span>
                    }
                    <div>
                        <span className="text-[#5f6368] ml-2 box-content" onClick={() => }>옵션 추가</span>
                    </div>
                </div> */}

        </div>

    )
}

export default QuestionList;