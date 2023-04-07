import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DragIndicatorSharpIcon from "@mui/icons-material/DragIndicatorSharp";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import Switch from '@mui/material/Switch';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useController } from 'react-hook-form';
import UnderlineInput from './Underlineinput';
import DropdownMenu from './DropdownMenu';
import QuestionList from './QuestionList';

const label = { inputProps: { 'aria-label': 'Switch demo' } };
const isFolding = true;


interface QuestionCardPageProps {
    idx: number;
    control: any;
    active: boolean;
    handleActive: any;
}


const QuestionContainer = ({
    idx,
    control,
    active,
    handleActive
}: QuestionCardPageProps) => {
    const name = `questionCardList.${idx}`;

    const {
        field: { value: questionCardData },
    } = useController({
        control,
        name,
    });
    if (active === false) {
        return (
            <div className="w-[48rem] h-[8rem] bg-white mx-auto my-[13px] rounded-lg relative border border-gray-300 peer-box" onClick={handleActive}>
                {active && <div className="z-10 h-full w-1.5 bg-[#4285f4] bg-black absolute top-0 left-0 rounded-tl-lg rounded-bl-lg z-0"></div>}
                <div></div>
            </div>
        );
    }
    return (
        <div className="w-[48rem] h-[17rem] mt-2.5 my-0 mx-auto rounded-lg py-1.5 bg-white relative border border-gray-300 peer-box">
            <div className="text-center peer-box-hover:opacity-100 cursor-move" style={{ opacity: active ? 1 : 0 }}  onClick={handleActive}>
                <DragIndicatorSharpIcon className="rotate-90 text-gray-400" fontSize="small" />
            </div>
            {/* 제목, 사진, 드롭다운 */}
            <div>
                <div className="w-11/12 mx-auto mt-0 mb-5 flex justify-between items-center h-[3.5rem]">
                    <div className="w-[446px]">
                        <UnderlineInput
                            containerClassName="bg-gray-50 flex-grow px-3 py-4 border-box border-b-[1px] border-zinc-500"
                            inputClassName="bg-gray-50 outline-none"
                            id={`question_${idx}`}
                            placeHolder="질문"
                            control={control}
                            name={`${name}.question`}
                        />
                    </div>
                    <IconButton>
                        <CropOriginalIcon color="action" />
                    </IconButton>
                    <DropdownMenu />
                </div>
                {/* 질문 리스트 */}
                <QuestionList control={control} />
                {/* 하단 아이콘 */}
                <div className="w-11/12 h-16 pl-6 pr-4 text-right border-t border-gray-300 absolute bottom-0 left-7 rounded-b-lg flex items-center justify-end">
                    <span><ContentCopyIcon color="action" /></span>
                    <IconButton aria-label="delete" size="large">
                        <DeleteOutlineIcon fontSize="inherit" />
                    </IconButton>
                    <span className="border-l h-8 inline-block align-middle pr-4 "></span>
                    <span>필수 <Switch {...label} /></span>
                    <MoreVertIcon />
                </div>
            </div>
        </div>
    );
}

export default QuestionContainer;