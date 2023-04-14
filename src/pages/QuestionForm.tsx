import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { useEffect, useState } from 'react';
import QuestionContainer from '../components/QuestionContainer';
import UnderlineInput from '../components/Underlineinput';
import { useFieldArray, useForm } from 'react-hook-form';
import Header from '../components/Header';

// interface optionForm {
//     id?: string;
//     optionTitle: string;
// }

interface CardType {
    type: string
    question: string;
    options: any;
    required: boolean;
}

export interface FormType {
    formTitle: string;
    formDescription: string;
    questionCardList: CardType[];
}

const QuestionForm = () => {
    const [active, setActive] = useState<number | null>(null);
    const {control, handleSubmit, watch} = useForm<FormType>({
        defaultValues: {
            formTitle: "제목 없는 설문지",
            formDescription: "",
            questionCardList: [
                {
                    type: "radio",
                    question: "질문",
                    options: [{
                        optionTitle: ""
                    }],
                    required: false,
                }
            ],
        },
        mode: "onChange"
    });

    const {fields, append, insert, remove}
    = useFieldArray({
        control,
        name: 'questionCardList'
    });
    const onSubmit = (data: FormType) => console.log('data',data);

    const insertQuestionCard = () => {
        append({type: "radio", question: "질문", options: [{
            optionTitle: ""
        }], required: false});
    }

    const copyQuestionCard = (index:number) => {
        insert(index + 1, fields[index]);
    }

    const deleteQuestionCard = (index:number) => {
        remove(index);
    }

    useEffect(() => {

    }, [watch()]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
           <Header control={control} handleSubmit={handleSubmit}/>
            <div className="pt-2.5">
                {/* 타이틀 */}
            <div className="w-[48rem] h-36 my-0 mx-auto rounded-lg pt-2.5 bg-white relative shadow-sm shadow-[#888] relative">
                <div className="w-full h-2.5 bg-[#673ab7] absolute top-0 rounded-t-lg z-10"></div>
                <div className="h-full w-1.5 bg-[#4285f4] absolute top-0 left-0 rounded-tl-lg rounded-bl-lg z-0"></div>
                <UnderlineInput
                    containerClassName="xs:inline-block text-[2rem] mx-7 mt-5 w-[92%] flex peer/underline-input"
                    inputClassName="leading-10 outline-none"
                    control={control} 
                    name="formTitle"
                />
                <UnderlineInput
                    containerClassName="xs:inline-block text-sm mx-7 mt-1 w-[92%]"
                    inputClassName="pt-1 outline-none"
                    placeHolder="설문지 설명"
                    control={control}
                    name="formDescription"
                />
                <button type="button" className="rounded-md w-10 h-10 bg-white shadow-sm shadow-[#999] absolute top-3 -right-12" onClick={insertQuestionCard}> 
                    <ControlPointIcon />
                </button>
            </div>
            <div >
                { fields && fields.map((field, idx) => (
                    <QuestionContainer 
                        idx={idx} 
                        control={control} 
                        active={active} setActive={setActive} 
                        key={field.id} 
                        deleteQuestionCard={deleteQuestionCard} 
                        copyQuestionCard={copyQuestionCard} />  
                ))}
            </div>
        </div>
        </form>
    );
}

export default QuestionForm;