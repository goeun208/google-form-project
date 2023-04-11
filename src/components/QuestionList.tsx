import { useController, useFieldArray, useForm } from "react-hook-form";
import UnderlineInput from "./Underlineinput";
import { FormType } from "../pages/QuestionForm";
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import { useEffect, useRef, useState } from "react";
import { dropMenuId } from "../atoms/dropMenuId";
import { useRecoilValue } from "recoil";

interface optionForm {
    optionTitle: string[];
}

// 배열 쓰기
const QuestionList = ({ control, name, idx }: any) => {
    const DropdownIcon = useRecoilValue(dropMenuId);
    const [option, setOption] = useState<string>('');
    const [optionList, setOptionList] = useState<Array<string>>([]);

    const { register, setValue, getValues } = useForm();

    const {
        fields, append, remove
    } = useFieldArray({
        control,
        name: 'questionCardList'
    })

    useEffect(() => {
        console.log('fields', fields);
        console.log('name', name);
    }, [fields])

    const handleList = (option: string) => {
        setOptionList([
            ...optionList,
            option
        ]);
        setOption('');
    }

    const handleOption = (e: any) => {
        setOption(e.target.value)
    }

    const addOptionTitle = (e: any) => {
        // append({ optionTitle: e });
    }

    return (
        <div className="w-3/5 ml-8">
            { fields && fields.map((field, index) => (
            <div className="h-[3rem] flex items-center text-sm">
                {
                    DropdownIcon === "radio" && <RadioButtonUncheckedRoundedIcon color="disabled" />
                }
                {
                    DropdownIcon === "checkbox" && <CheckBoxOutlineBlankRoundedIcon color="disabled" />
                }
                {
                    DropdownIcon === "dropdown" && <span>1</span>
                }
                
                        <input placeholder="옵션" key={field.id} {...register(`${name}`)} 
                            onKeyDown={(e: any) => (e.keyCode === 13 && addOptionTitle(e.target.value))} 
                            onChange={(e: any) => (console.log(e.target.value))} 
                            className="ml-2 w-full outline-none hover:border-b placeholder:text-black focus:border-[#673ab7] py-1" />

                
                {/* <input type="text" placeholder="옵션"
                    value={option}
                    onChange={(e) => handleOption(e)}
                    onKeyDown={(e: any) => (e.keyCode === 13 && handleList(option))}
                    className="ml-2 w-full outline-none hover:border-b placeholder:text-black focus:border-[#673ab7] py-1" /> */}
            </div>))}
        </div>

    )
}

export default QuestionList;