import { useForm } from "react-hook-form";
import UnderlineInput from "./Underlineinput";
import { FormType } from "../pages/QuestionForm";

interface QuestionCardType {
    type: string;
    qnaTitle: string;
    option: Array<string> | null;
}

const cardType = {
    type: "radio",
}

// 배열 쓰기

const QuestionList = ({control}:any) => {
    return (
        <div className="w-11/12 h-16 ml-8 border">
            <UnderlineInput
                    containerClassName="xs:inline-block text-sm mx-7 mt-1 w-[92%]"
                    inputClassName="py-1 focus:border-b-2 focus:border-[#673ab7] border-b-[1px] outline-none"
                    placeHolder="옵션"
                    control={control}
                    name="questionCardList.qnaTitle"
                />
        </div>
        
    )
}

export default QuestionList;