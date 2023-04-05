import { useController, useFieldArray } from "react-hook-form";
import DragIndicatorSharpIcon from "@mui/icons-material/DragIndicatorSharp";
import IconButton from "./IconButton";
import UnderlineInput from "./UnderlineInput";
import { useAppDispatch } from "../app/hooks";
import { setActiveCardIdx } from "../redux/globalSlice";
import Toggle from "./Toggle";
import DropDown from "./DropDown";
import QuestionList from "./QuestionList";

export interface QuestionCardDataType {
    type: string;
    question: string;
    options?: {
        optionTitle: string;
    }[];
    required: boolean;
}

interface QuestionCardPageProps {
    idx: number;
    control: any;
    active: boolean;
    insertQuestionCard: (index: number, data: QuestionCardDataType) => void;
    removeQuestionCard: (index: number) => void;
}

const QuestionCard = ({
    idx,
    control,
    active = false,
    insertQuestionCard,
    removeQuestionCard,
}: QuestionCardPageProps) => {
    const dispatch = useAppDispatch();
    const name = `questionCardList.${idx}`;

    const {
        field: { value: questionCardData },
    } = useController({
        control,
        name,
    });
    const { type, required, question } = questionCardData;

    return (
        <div
            className={`relative max-w-[677px] min-w-[230px] w-full bg-white rounded-md border-[1px] pb-6 pl-5 pr-6 transition-shadow ${
                active && "shadow-card-shadow"
            } questionCardContainer`}
            onClick={(e) => {
                dispatch(setActiveCardIdx(idx));
                setTimeout(() => {
                    const listDataset = (e.target as HTMLElement).closest('li')?.dataset
                    if(listDataset?.idx) {
                        const {idx} = listDataset;
                        const input = document.querySelector(`#option_${idx}`);
                        input && (input as HTMLInputElement).focus()
                    }
                }, 10);
                
            }}
        >
            {active && (
                <div className="absolute -left-[1px] top-0 w-full h-full overflow-hidden rounded-md bg-transparent border-none">
                    <div className="absolute left-0 top-0 w-1.5 h-full bg-[#4285f4]" />
                </div>
            )}
            <div className="text-center hover:opacity-100 cursor-move" style={{ opacity: active ? 1 : 0 }}>
                <DragIndicatorSharpIcon className="rotate-90 text-gray-400" fontSize="small" />
            </div>
            {active ? (
                <div>
                    <div className="flex items-center gap-3 flex-wrap">
                        <UnderlineInput
                            containerClassName="bg-gray-50 flex-grow px-3 py-4 border-b-[1px] border-zinc-500"
                            inputClassName="bg-gray-50"
                            id={`question_${idx}`}
                            placeHolder="질문"
                            control={control}
                            name={`${name}.question`}
                        />
                        <IconButton iconName={"CropOriginalRoundedIcon"} toolTipLabel="이미지추가" />
                        <DropDown control={control} name={`${name}.type`} />
                    </div>
                    <QuestionList type={type} control={control} name={name} active={active}/>
                    <div className="w-full h-[1px] my-4 bg-gray-300" />
                    <div className="flex items-center justify-end">
                        <IconButton
                            iconName={"ContentCopyOutlinedIcon"}
                            toolTipLabel="복사"
                            onClick={(e) => {
                                e.stopPropagation();
                                insertQuestionCard(idx, questionCardData);
                            }}
                        />
                        <IconButton
                            iconName={"DeleteOutlineOutlinedIcon"}
                            toolTipLabel="삭제"
                            onClick={(e) => {
                                e.stopPropagation();
                                removeQuestionCard(idx);
                            }}
                        />
                        <div className="h-[30px] w-[1px] bg-gray-300 mx-4" />
                        <span className="text-sm">필수</span>
                        <Toggle control={control} name={`${name}.required`} />
                    </div>
                </div>
            ) : (
                <div>
                    <p
                        className={`flex break-all text-sm after:content-['*'] after:text-red-700 after:ml-1 after:leading-[0px] after:text-lg after:relative after:top-2 ${
                            required === false && "after:hidden"
                        }`}
                    >
                        {question === "" ? "질문" : question}
                    </p>
                    <QuestionList type={type} control={control} name={name} active={active}/>
                </div>
            )}
        </div>
    );
};

export default QuestionCard;
