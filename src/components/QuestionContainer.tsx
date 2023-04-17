
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DragIndicatorSharpIcon from "@mui/icons-material/DragIndicatorSharp";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import Switch from '@mui/material/Switch';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { useController } from 'react-hook-form';
import UnderlineInput from './Underlineinput';
import DropdownMenu from './DropdownMenu';
import QuestionList from './QuestionList';
import { useCallback, useEffect, useState } from 'react';
import { CardType } from '../pages/QuestionForm';
import IconButton from './IconButton';

interface QuestionCardPageProps {
    idx: number;
    control: any;
    active: number | null;
    setActive: any;
    insertQuestionCard: any;
    copyQuestionCard: (index: number, card: CardType) => void;
    deleteQuestionCard: (index: number) => void;
}

const QuestionContainer = ({
    idx,
    control,
    active,
    setActive,
    insertQuestionCard,
    copyQuestionCard,
    deleteQuestionCard,
}: QuestionCardPageProps) => {
    const name = `questionCardList.${idx}`;
    const [isCollapse, setIsCollapse] = useState<boolean>(false);
    const [check, setCheck] = useState<boolean>(false);

    const handleActiveClick = () => {
        setActive(idx);
    };

    const handleCollapse = () => {
        setIsCollapse(!isCollapse);
    };

    useEffect(() => {
        handleCollapse();
    }, [active]);

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

    }, [value]);


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
                            <div className="py-1 text-base">{value.question}</div>
                            {
                                value.options && value.options.map((option: any, idx: number) => (
                                    <div className="h-[3rem] flex items-center" key={idx}>
                                        <span>
                                            {
                                                value.type === "radio" && <RadioButtonUncheckedRoundedIcon color="disabled" className="w-[20px] h-[20px]" />
                                            }
                                            {
                                                value.type === "checkbox" && <CheckBoxOutlineBlankRoundedIcon color="disabled" className="w-[20px] h-[20px]" />
                                            }
                                            {
                                                value.type === "dropdown" && <span>{idx + 1}</span>
                                            }
                                        </span>
                                        <div className='ml-2 text-sm'> {option.optionTitle}</div>
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
                    <div className="rounded-md w-10 h-10 bg-white shadow-sm shadow-[#999] absolute top-3 -right-12" onClick={insertQuestionCard}>
                        <IconButton >
                            <ControlPointIcon  color="action" />
                        </IconButton>
                    </div>
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
                        <div className="w-11/12 h-full text-right border-t border-gray-300 absolute bottom-0 left-8 rounded-b-lg flex items-center justify-end">
                            <IconButton size="large" onClick={() => (copyQuestionCard(idx, value))}>
                                <ContentCopyIcon color="action" />
                            </IconButton>
                            <IconButton label="삭제" onClick={() => (deleteQuestionCard(idx))}>
                                <DeleteOutlineIcon color="action" />
                            </IconButton>
                            <span className="border-l h-8 inline-block align-middle pr-4 "></span>
                            <span className='text-sm'>필수 <Switch name={`${name}.required`} onChange={(e) => (handleSwitch(e.target.checked), setCheck(e.target.checked))} checked={check ? true : false} />
                            </span>
                            <IconButton label="더보기">
                                <MoreVertIcon color="action" />
                            </IconButton>
                        </div>
                    </div>

                </div>
            }
        </div>
    );
}

export default QuestionContainer;