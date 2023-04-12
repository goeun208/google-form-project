import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DragIndicatorSharpIcon from "@mui/icons-material/DragIndicatorSharp";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import Switch from '@mui/material/Switch';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import { useController, useFieldArray } from 'react-hook-form';
import UnderlineInput from './Underlineinput';
import DropdownMenu from './DropdownMenu';
import QuestionList from './QuestionList';
import { useEffect, useState } from 'react';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

interface QuestionCardPageProps {
    idx: number;
    control: any;
    active: number | null;
    setActive: any;
    copyQuestionCard: any;
    deleteQuestionCard: any;
}

const QuestionContainer = ({
    idx,
    control,
    active,
    setActive,
    copyQuestionCard,
    deleteQuestionCard
}: QuestionCardPageProps) => {
    const name = `questionCardList.${idx}`;
    const [isCollapse, setIsCollapse] = useState<boolean>(false);
    const [check, setCheck] = useState<boolean>(false);

    useEffect(() => {
        handleCollapse();
    }, [active])

    const handleActiveClick = () => {
        setActive(idx);
    };
    const handleCollapse = () => {
        setIsCollapse(!isCollapse);
    }

    const {
        field: { value }
    } = useController({
        control,
        name
    });

    const {
        field: { onChange: handleSwitch }
    } = useController({
        control,
        name: `${name}.required`
    });

    useEffect(() => {
        console.log('value', value);
         console.log('name', `${name}.required`);
    }, [value]);

    useEffect(() => {
        console.log('checked', check);
        // onChange(checked)
    }, [check]);
    

    if (idx !== active) {
        return (
            <div>
            {
                value &&
                <div className="w-[48rem] bg-white mx-auto my-[13px] rounded-lg relative border border-gray-300" onClick={handleActiveClick}>
                <div className="w-full h-[24px] flex items-center justify-center hover:opacity-100 cursor-move opacity-0" >
                    <DragIndicatorSharpIcon className="rotate-90 text-gray-400" fontSize="small" />
                </div>
                <div className="w-11/12 mx-auto mb-[24px]">
                    <div className="pb-2 text-base">{value.question}</div>
                    {
                        value.options && value.options.map((option:any, idx:number) => (
                            <div className="h-[3rem] flex items-center" key={idx}>
                                <span>
                                    {
                                        value.type === "radio" && <RadioButtonUncheckedRoundedIcon color="disabled" className="w-[30px] h-[20px]" />
                                    }
                                    {
                                        value.type === "checkbox" && <CheckBoxOutlineBlankRoundedIcon color="disabled" className="w-[30px] h-[20px]" />
                                    }
                                    {
                                        value.type === "dropdown" && <span>{idx + 1}</span>
                                    }
                                </span>
                                <div className='ml-2'> {option.optionTitle}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
            }
            </div>

            
        );
    }
    return (
        <div>
            {
                value &&
        <div className="w-[48rem] mt-2.5 my-0 mx-auto rounded-lg bg-white relative border border-gray-300 peer-box" onClick={handleActiveClick} >
            <div className="h-full w-1.5 bg-[#4285f4] absolute top-0 left-0 rounded-tl-lg rounded-bl-lg z-0"></div>
            <div className="w-full h-[24px] flex items-center justify-center cursor-move" >
                <DragIndicatorSharpIcon className="rotate-90 text-gray-400" fontSize="small" />
            </div>
            {/* 제목, 사진, 드롭다운 */}
            <div className="w-11/12 h-[4rem] mx-auto mt-0  flex items-start">
                <div className="w-[414px]">
                    <UnderlineInput
                        containerClassName="h-[56px] bg-gray-50 flex-grow px-3 py-5 border-box border-b-[1px] border-zinc-500"
                        inputClassName="bg-gray-50 outline-none"
                        placeHolder="질문"
                        control={control}
                        name={`${name}.question`}
                    />
                </div>
                <div className='w-[5rem] flex justify-center'>
                    <IconButton>
                        <CropOriginalIcon color="action" />
                    </IconButton>
                </div>


                <DropdownMenu control={control} name={`${name}.type`} />
            </div>
            {/* 질문 리스트 */}
            <QuestionList control={control} name={`${name}`} />
            {/* 하단 아이콘 */}
            <div className='relative h-[4rem]'>
                <div className="w-11/12 h-full pr-4 text-right border-t border-gray-300 absolute bottom-0 left-8 rounded-b-lg flex items-center justify-end">
                    <IconButton size="large" onClick={() => (copyQuestionCard(idx))}>
                        <ContentCopyIcon color="action" />
                    </IconButton>
                    <IconButton aria-label="delete" size="large" onClick={() => (deleteQuestionCard(idx))}>
                        <DeleteOutlineIcon fontSize="inherit" />
                    </IconButton>
                    <span className="border-l h-8 inline-block align-middle pr-4 "></span>
                    <span>필수 <Switch  {...label} name={`${name}.required`} onChange={(e) => (handleSwitch(e.target.checked), setCheck(e.target.checked))} defaultChecked={ check ? true : false} />
                    </span>
                    <MoreVertIcon />
                </div>
            </div>

        </div>
         }
         </div>
    );
}

export default QuestionContainer;