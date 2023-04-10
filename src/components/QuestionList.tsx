import { useController, useForm } from "react-hook-form";
import UnderlineInput from "./Underlineinput";
import { FormType } from "../pages/QuestionForm";
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import { useEffect, useRef, useState } from "react";
import { dropMenuId } from "../atoms/dropMenuId";
import { useRecoilValue } from "recoil";

interface QuestionCardType
 {
    type: string;
    qnaTitle: string;
    option: Array<string> | null;
}

// 배열 쓰기
const QuestionList = ({control,name}:any) => {
    const DropdownIcon = useRecoilValue(dropMenuId);
    const [option, setOption] = useState<string>('');
    const [optionList, setOptionList] = useState<Array<string>>([]);

    const {
        field : {value, onChange: onChange}
    } = useController({
        control,
        name,
    });
    const handleList = (option:string) => {
        setOptionList([
            ...optionList,
            option
        ]);
        setOption('');
    }

    const handleOption = (e: any) => {
        setOption(e.target.value)
    }

    return (
        <div className="w-3/5 ml-8">
            {optionList && optionList.map((item, key) => (
                <div key={key} className="h-10 flex items-center text-sm">
                {  
                    DropdownIcon === "radio" && <RadioButtonUncheckedRoundedIcon color="action"/> 
                }
                {
                    DropdownIcon === "checkbox" && <CheckBoxOutlineBlankRoundedIcon color="action"/>
                }
                { 
                    DropdownIcon === "dropdown" && <span>1</span> 
                } 
                    <span className="ml-2">{item}</span>
                {/* {   
                    value ? <div>{value[0].optionTitle}</div> : null
                } */}
                </div>    
            ))}
           <div className="h-10 flex items-center text-sm">
                {  
                    DropdownIcon === "radio" && <RadioButtonUncheckedRoundedIcon color="action"/> 
                }
                {
                    DropdownIcon === "checkbox" && <CheckBoxOutlineBlankRoundedIcon color="action"/>
                }
                { 
                    DropdownIcon === "dropdown" && <span>1</span> 
                } 
                <input type="text" placeholder="옵션" 
                 value={option}
                 onChange={(e) => handleOption(e)}
                 onKeyDown={(e:any) => (e.keyCode === 13 && handleList(option))}
                 className="ml-2 w-full outline-none border-b-2 focus:border-[#673ab7] pb-1"/>
            </div>    
        </div>
        
    )
}

export default QuestionList;