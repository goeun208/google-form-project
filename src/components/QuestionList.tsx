import { useController, useFieldArray, useForm } from "react-hook-form";
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from "react";
import IconButton from "./IconButton";

// 배열 쓰기
const QuestionList = ({ control, name, idx }: any) => {
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
        console.log('drop fields',fields);
    }, [fields]);

    useEffect(() => {
        console.log('drop type', value.type);
    }, [value]);

    // const handleList = (option: string) => {
    //     setOptionList([
    //         ...optionList,
    //         option
    //     ]);
    //     setOption('');
    // }

    const insertOption = (index: number, e: any) => {
        insert(index, { optionTitle: e });
    }

    const deleteOption = (index: number) => {
        index !== 0 && remove(index);
    }

    return (
        <div className="w-full pl-7">
            {value && fields && fields.map((field, index) => (
                <div className="h-[3rem] flex items-center text-sm mb-1" key={field.id}>
                    {
                        value.type === "radio" && <RadioButtonUncheckedRoundedIcon color="disabled" />
                    }
                    {
                        value.type === "checkbox" && <CheckBoxOutlineBlankRoundedIcon color="disabled" />
                    }
                    {
                        value.type === "dropdown" && <span>{index + 1}</span>
                    }
                    <div className="w-3/5 relative">
                        <input placeholder="옵션" key={field.id} {...register(`${value}.options.${index}.optionTitle`)}
                        onKeyDown={(e: any) => (e.keyCode === 13 && insertOption(index, e.target.value))}
                        className=" ml-2 w-full outline-none placeholder:text-black py-1 z-0 peer" />
                        <div className="absolute w-full bottom-0 ml-2 peer-focus:animate-bdbottom peer-focus:border-b peer-focus:border-[#673ab7] peer-hover:border-b"></div>
                    </div>
                    
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