import { useController, useFieldArray, useForm } from "react-hook-form";
import UnderlineInput from "./Underlineinput";
import { FormType } from "../pages/QuestionForm";
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import IconButton from "./IconButton";

// 배열 쓰기
const QuestionList = ({ control, name, idx }: any) => {
    const [option, setOption] = useState<string>('');
    const [optionList, setOptionList] = useState<Array<string>>([]);

    const { register } = useForm();

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
        console.log('drop type &&& fields', value.type, fields, value.options);
    }, [fields]);

    const handleList = (option: string) => {
        setOptionList([
            ...optionList,
            option
        ]);
        setOption('');
    }

    const insertOption = (index: number, e: any) => {
        insert(index, { optionTitle: e });
    }

    const deleteOption = (index: number) => {
        index !== 0 && remove(index);
    }

    return (
        <div className="w-full pl-7">
            {value && fields && fields.map((field, index) => (
                <div className="h-[3rem] flex items-center text-sm relative mb-1" key={field.id}>
                    {
                        value.type === "radio" && <RadioButtonUncheckedRoundedIcon color="disabled" />
                    }
                    {
                        value.type === "checkbox" && <CheckBoxOutlineBlankRoundedIcon color="disabled" />
                    }
                    {
                        value.type === "dropdown" && <span>{index + 1}</span>
                    }

                    <input placeholder="옵션" key={field.id} {...register(`${value}.options.${index}.optionTitle`)}
                        onKeyDown={(e: any) => (e.keyCode === 13 && insertOption(index, e.target.value))}
                        className="ml-2 w-4/5 outline-none hover:border-b placeholder:text-black focus:border-b focus:border-[#673ab7] py-1 z-0 transition duration-0 ease-out hover:duration-150" />
                    <div className="absolute right-8" onClick={() => (deleteOption(index))}>
                        <IconButton>
                            <CloseIcon color="action"/>
                        </IconButton>
                    </div>
                    
                </div>))}
        </div>

    )
}

export default QuestionList;