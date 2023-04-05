import { useEffect, useRef } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useAppSelector } from "./app/hooks";
import IconButton from "./components/IconButton";
import QuestionCard, { QuestionCardDataType } from "./components/QuestionCard";
import HeaderTabList from "./components/HeaderTabList";
import TitleCard from "./components/TitleCard";
import UnderlineInput from "./components/UnderlineInput";
import { globalState, setActiveCardIdx, setAddButtonTop, setContentsWrapPt } from "./redux/globalSlice";
// import uuid from "react-uuid";

function App() {
    const dispatch = useDispatch();
    const { activeCardIdx, addButtonTop, contentsWrapPt, activeHeaderTabId } = useAppSelector(globalState);

    const header = useRef<HTMLDivElement>(null);
    const { control, watch } = useForm<any>({
        mode: "onChange",
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
    });
    const {
        fields: questionCardListFields,
        insert,
        remove,
    } = useFieldArray({
        control,
        name: "questionCardList",
    });

    const defaultCardData = {
        type: "radio",
        question: "",
        options: [
            {
                optionTitle: "옵션 1",
            },
        ],
        required: false,
    };

    useEffect(() => {
        if (activeCardIdx >= 0) {
            const questionCardElList = Array.from(document.querySelectorAll(`.questionCardContainer`));
            const activeQuestionCard = questionCardElList[activeCardIdx];
            const { top } = activeQuestionCard.getBoundingClientRect();
            dispatch(setAddButtonTop(top - contentsWrapPt));
            document.getElementById(`question_${activeCardIdx}`)!!.focus();
        } else {
            dispatch(setAddButtonTop(0));
        }
    }, [activeCardIdx]);

    useEffect(() => {
        const setContentsWrapPaddingTop = () => {
            const ptOffset = 7;
            const pt = header.current!!.getBoundingClientRect()?.height + ptOffset;
            dispatch(setContentsWrapPt(pt));
        };
        window.addEventListener("resize", setContentsWrapPaddingTop);
        window.addEventListener("load", setContentsWrapPaddingTop);
        return () => {
            window.removeEventListener("resize", setContentsWrapPaddingTop);
            window.removeEventListener("load", setContentsWrapPaddingTop);
        };
    }, []);

    const insertQuestionCard = (index: number, data: QuestionCardDataType) => {
        insert(index + 1, JSON.parse(JSON.stringify(data)));
        dispatch(setActiveCardIdx(index + 1));
    };

    const removeQuestionCard = (index: number) => {
        remove(index);
        if (questionCardListFields.length === 1) {
            dispatch(setActiveCardIdx(-1));
        } else {
            dispatch(setActiveCardIdx(index === 0 ? 0 : index - 1));
        }
    };

    useEffect(() => {
        // console.log(watch())
    }, [watch()]);

    return (
        <>
            <header className="fixed w-screen bg-white border-b-[1px] z-[100]" ref={header}>
                <div className="flex items-center pt-1.5 px-3 gap-1">
                    <IconButton
                        iconName="DescriptionIcon"
                        toolTipLabel="설문지 홈"
                        buttonSize="large"
                        className="text-[#673ab7]"
                    />
                    <div className="flex items-center flex-grow ml-1">
                        <UnderlineInput
                            containerClassName="xs:inline-block hidden"
                            underlineColor="#000"
                            placeHolder="설문지 제목"
                            control={control}
                            name="formTitle"
                        />
                        <span className="hidden sm:inline">
                            <IconButton iconName="FolderOpenIcon" toolTipLabel="폴더로 이동" />
                        </span>
                        <span className="hidden sm:inline">
                            <IconButton iconName="StarBorderIcon" toolTipLabel="별표" />
                        </span>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                        <IconButton iconName="ColorLensOutlinedIcon" toolTipLabel="테마 맞춤설정" />
                        <IconButton iconName="RemoveRedEyeOutlinedIcon" toolTipLabel="미리보기" />
                        <IconButton iconName="UTurnLeftOutlinedIcon" toolTipLabel="실행취소" />
                        <IconButton iconName="UTurnRightOutlinedIcon" toolTipLabel="다시실행" />
                        <button className="bg-[#673ab7] hover:opacity-90 text-white text-xs font-bold px-5 py-2 rounded-md whitespace-nowrap">
                            보내기
                        </button>
                    </div>
                </div>
                <UnderlineInput
                    containerClassName="xs:hidden mx-6 pt-1.5"
                    underlineColor="#000"
                    placeHolder="설문지 제목"
                    control={control}
                    name="formTitle"
                />
                <HeaderTabList />
            </header>
            <main
                className="h-screen bg-purple-50 overflow-y-scroll flex flex-col items-center pb-10"
                style={{
                    paddingTop: contentsWrapPt,
                }}
            >
                <div className="relative flex flex-col max-w-[677px] w-full gap-3">
                    {activeHeaderTabId === "question" ? (
                        <>
                            <TitleCard
                                control={control}
                                formTitleName="formTitle"
                                formDescriptionName="formDescription"
                                active={activeCardIdx === -1}
                            />
                            {questionCardListFields.map((questionCard, questionCardIdx) => {
                                const { id } = questionCard;
                                return (
                                    <QuestionCard
                                        key={id}
                                        control={control}
                                        idx={questionCardIdx}
                                        active={questionCardIdx === activeCardIdx}
                                        insertQuestionCard={insertQuestionCard}
                                        removeQuestionCard={removeQuestionCard}
                                    />
                                );
                            })}
                            <div
                                className="absolute -right-12 bg-white shadow-card-shadow rounded-md border-[1px] p-0.5 hidden md:block transition-['top']"
                                style={{ top: addButtonTop + "px" }}
                            >
                                <IconButton
                                    iconName="AddCircleOutlineOutlinedIcon"
                                    toolTipLabel="질문추가"
                                    buttonSize="small"
                                    onClick={() => {
                                        insertQuestionCard(activeCardIdx, defaultCardData);
                                    }}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div>작업중</div>
                        </>
                    )}
                </div>
            </main>
        </>
    );
}

export default App;
