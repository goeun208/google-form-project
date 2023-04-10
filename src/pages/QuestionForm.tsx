import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { useEffect, useRef, useState } from 'react';
import QuestionContainer from '../components/QuestionContainer';
import UnderlineInput from '../components/Underlineinput';
import { useFieldArray, useForm, UseControllerProps } from 'react-hook-form';
import Header from '../components/Header';
import { RecoilState, useRecoilState } from 'recoil';
export interface FormType {
    formTitle: string;
    formDescription: string;
    questionCardList: any;
}

const QuestionForm = () => {
    const {control, handleSubmit} = useForm<FormType>({
        defaultValues: {
            formTitle: "제목 없는 설문지",
            formDescription: "",
            questionCardList: [
                {
                    type: "radio",
                    question: "",
                    options: [
                        {
                            optionTitle: "옵션 1",
                        },
                    ],
                    required: false,
                },
            ],
        },
        mode: "onChange"
    });
    const onSubmit = (data: FormType) => console.log('data',data);
    const [qnaForms, setQnaForms] = useState<Array<any>>([]);
    const [active, setActive] = useState<number | null>(null);
    const questionBox:any = useRef();

    const handleQuestionForm = () => {
        const ex = {
            title: "",
            isFocus: true,
        }
        setQnaForms(qnaForms => qnaForms.concat(ex));
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Header control={control} handleSubmit={handleSubmit}/>
            <div className="pt-2.5">
                {/* 타이틀 */}
            <div className="w-[48rem] h-36 my-0 mx-auto rounded-lg pt-2.5 bg-white relative shadow-sm shadow-[#888] relative">
                <div className="w-full h-2.5 bg-[#673ab7] absolute top-0 rounded-t-lg z-10"></div>
                {/* 지금 선택한 컴포넌트 옆에 붙어있게 수정하기 */}
                <div className="h-full w-1.5 bg-[#4285f4] absolute top-0 left-0 rounded-tl-lg rounded-bl-lg z-0"></div>
                <UnderlineInput
                    containerClassName="xs:inline-block text-[2rem] mx-7 mt-5 w-[92%] flex peer/underline-input"
                    inputClassName="leading-10 pb-2 focus:border-b-2 focus:border-[#673ab7] border-b-[1px] outline-none"
                    control={control} 
                    name="formTitle"
                />
                <UnderlineInput
                    containerClassName="xs:inline-block text-sm mx-7 mt-1 w-[92%]"
                    inputClassName="py-1 focus:border-b-2 focus:border-[#673ab7] border-b-[1px] outline-none"
                    placeHolder="설문지 설명"
                    control={control}
                    name="formDescription"
                />
                <button className="rounded-md w-10 h-10 bg-white shadow-sm shadow-[#999] absolute top-3 -right-12" onClick={handleQuestionForm}>
                    <ControlPointIcon />
                </button>
            </div>
            <div >
                {qnaForms.map((item, idx) => (
                    <QuestionContainer idx={idx} control={control} active={active} setActive={setActive} key={idx} />
                ))}
            </div>
        </div>
        </form>
    )
}

export default QuestionForm;