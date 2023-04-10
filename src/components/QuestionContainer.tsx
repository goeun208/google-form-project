import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DragIndicatorSharpIcon from "@mui/icons-material/DragIndicatorSharp";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import Switch from '@mui/material/Switch';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import { useController, useFieldArray, useWatch } from 'react-hook-form';
import UnderlineInput from './Underlineinput';
import DropdownMenu from './DropdownMenu';
import QuestionList from './QuestionList';
import { useRecoilState, useRecoilValue } from 'recoil';
import { dropMenuId } from '../atoms/dropMenuId';
import { useEffect, useRef, useState } from 'react';

interface CardType {
    type: string;
    title: string;
    options: Array<string>;
    required: boolean;
}

const label = { inputProps: { 'aria-label': 'Switch demo' } };


interface QuestionCardPageProps {
    idx: number;
    control: any;
    active: number | null;
    setActive: any;
}


const QuestionContainer = ({
    idx,
    control,
    active,
    setActive
}: QuestionCardPageProps) => {
    const name = `questionCardList.${idx}`;
    const DropdownIcon = useRecoilValue(dropMenuId);
    const [isCollapse, setIsCollapse] = useState<boolean>(false);
    const cardBox:any = useRef();
    

    useEffect(() => {
        console.log(active, 'active');
    },[active]);

    const handleClick = () => {
        setActive(idx);
      };

      const handleCollapse = () => {
        setIsCollapse(!isCollapse);
      }

      useEffect(() => {
        handleCollapse();
      },[active])


      const {
        field: {value }
    } = useController({
        control,
        name,
    });
    
    const { fields, append, remove } = useFieldArray({
        name: "questionCardList",
        control
      });


    if (idx !== active) {
        {console.log('field', fields)}
        return (
            <div className="w-[48rem] h-[8rem] bg-white mx-auto my-[13px] rounded-lg relative border border-gray-300 peer-box" onClick={handleClick}>
                <div className="w-11/12 h-[3.25rem] mx-auto mb-5">
                    <div className="pt-5 pb-2">질문1</div>
                    {/* {fields[idx] && <div className="pt-5 pb-2">fields</div>} */}
                    <div>
                    {  
                        DropdownIcon === "radio" && <RadioButtonUncheckedRoundedIcon color="action"/> 
                    }
                    {
                        DropdownIcon === "checkbox" && <CheckBoxOutlineBlankRoundedIcon color="action"/>
                    }
                    { 
                        DropdownIcon === "dropdown" && <span>1</span> 
                    } 
                    </div>
                
                </div>
            </div>
        );
    }
    return (
        <div className="w-[48rem] mt-2.5 my-0 mx-auto rounded-lg py-1.5 bg-white relative border border-gray-300 peer-box" onClick={handleClick} >
                <div className="h-full w-1.5 bg-[#4285f4] absolute top-0 left-0 rounded-tl-lg rounded-bl-lg z-0"></div>  
                <div className="text-center peer-box-hover:opacity-100 cursor-move" >
                    <DragIndicatorSharpIcon className="rotate-90 text-gray-400" fontSize="small"/>
                </div> 
            {/* 제목, 사진, 드롭다운 */}
                <div className="w-11/12 h-[3.25rem] mx-auto mt-0 mb-5 flex justify-between items-center">
                    <div className="w-[446px]">
                        <UnderlineInput
                            containerClassName="bg-gray-50 flex-grow px-3 py-4 border-box border-b-[1px] border-zinc-500"
                            inputClassName="bg-gray-50 outline-none"
                            placeHolder="질문"
                            control={control}
                            name={`${name}.question`}
                        />
                    </div>
                    <IconButton>
                        <CropOriginalIcon color="action" />
                    </IconButton>
                    <DropdownMenu control={control} name={`${name}.type`}/>
                </div>
                {/* 질문 리스트 */}
                <QuestionList control={control} name={`${name}.options`} />
            {/* 하단 아이콘 */}
            <div className='relative h-16'>
                <div className="w-11/12 pr-4 text-right border-t border-gray-300 absolute bottom-0 left-8 rounded-b-lg flex items-center justify-end">
                                <IconButton size="large">
                                    <ContentCopyIcon color="action" />
                                </IconButton>
                                <IconButton aria-label="delete" size="large">
                                    <DeleteOutlineIcon fontSize="inherit" />
                                </IconButton>
                                <span className="border-l h-8 inline-block align-middle pr-4 "></span>
                                <span>필수 <Switch {...label} />
                                   </span>
                                <MoreVertIcon />
                            </div>
            </div>
            
        </div>
    );
}

export default QuestionContainer;