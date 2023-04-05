import { ReactElement, useRef } from "react";
import UnderlineInput from "./UnderlineInput";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import IconButton from "./IconButton";
import { useFieldArray } from "react-hook-form";

type listType = "radio" | "checkbox" | "dropdown";

interface option {
    id: string;
    optionTitle?: string;
}

interface QuestionListPageProps {
    type: "short" | "long" | listType;
    control: any;
    name: string;
    active: boolean;
}

interface ActiveListProps {
    type: listType;
    options: option[];
    control: any;
    name: string;
    insertOption: (index: number, data: any) => void;
    removeOption: (index: number) => void;
}

interface UnActiveListProps {
    type: listType;
    options: option[];
}

const ListIcon = ({type} : {type: string}) => {
    const listIconObject: { [key: string]: ReactElement } = {
        radio: <RadioButtonUncheckedOutlinedIcon className="text-zinc-400 mr-2" fontSize="small" />,
        checkbox: <CheckBoxOutlineBlankOutlinedIcon className="text-zinc-400 mr-2" fontSize="small" />,
        dropdown: <ArrowDropDownCircleOutlinedIcon className="text-zinc-400 mr-2" fontSize="small" />,
    };
    return listIconObject[type];
};

const Short = () => {
    return (
        <p className="text-xs text-gray-500 border-b-[1px] border-b-black/[0.5] border-dotted py-2 mt-3 mb-9 mr-[50%]">
            단답형 텍스트
        </p>
    );
};
const Long = () => {
    return (
        <p className="text-xs text-gray-500 border-b-[1px] border-b-black/[0.5] border-dotted py-2 mt-3 mb-9 mr-[15%]">
            장문형 텍스트
        </p>
    );
};
const ActiveList = ({ type, options, control, name, insertOption, removeOption }: ActiveListProps) => {
    const optionsRef = useRef<HTMLUListElement>(null);
    
    return (
        <ul ref={optionsRef}>
            {options.map((option, optionIdx) => {
                const { id } = option;
                const optionsEl = optionsRef.current as HTMLUListElement;
                return (
                    <li key={id} className="relative flex items-center h-12 first:mt-3 group/question">
                        <ListIcon type={type}/>
                        <UnderlineInput
                            containerClassName="flex w-[80%] group-hover/question:border-b-[1px] peer/underline-input"
                            control={control}
                            name={`${name}.options.${optionIdx}.optionTitle`}
                            id={`option_${optionIdx}`}
                            index={options.length}
                            onEnter={() => {
                                insertOption(optionIdx, {
                                    optionTitle: `옵션 ${options.length + 1}`,
                                });
                                setTimeout(() => {
                                    (
                                        optionsEl.children[optionIdx + 1].querySelector(`#option_${optionIdx+1}`) as HTMLInputElement
                                    ).focus();
                                }, 10);
                            }}
                            onBackspace={() => {
                                if (options.length >= 2) {
                                    removeOption(optionIdx);
                                    setTimeout(() => {
                                        const focusOptionIdx = optionIdx !==0 ? optionIdx-1 : optionIdx;
                                        (
                                            optionsEl.children[focusOptionIdx].querySelector(`#option_${focusOptionIdx}`) as HTMLInputElement
                                        ).focus();
                                    }, 10);
                                }
                            }}
                        />
                        <div className="hidden group-hover/question:block peer-focus-within/underline-input:block">
                            <IconButton iconName={"CropOriginalRoundedIcon"} toolTipLabel="이미지추가" />
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};
const UnActiveList = ({ type, options }: UnActiveListProps) => {
    return (
        <ul>
            {options.map((option, optionIdx) => {
                const { id, optionTitle } = option;
                return (
                    <li key={id} className="relative flex items-center h-12 first:mt-3 group/question cursor-text" data-idx={optionIdx}>
                        <ListIcon type={type}/>
                        <div className="text-sm truncate">{optionTitle}</div>
                    </li>
                );
            })}
        </ul>
    );
};

const QuestionList = ({ type, control, name, active }: QuestionListPageProps) => {
    const {
        fields: options,
        insert,
        remove,
    } = useFieldArray({
        control,
        name: `${name}.options`,
    });

    const insertOption = (index: number, data: any) => {
        insert(index + 1, JSON.parse(JSON.stringify(data)));
    };

    const removeOption = (index: number) => {
        remove(index);
    };

    const activeQuestionListByType: { [key: string]: ReactElement } = {
        short: <Short />,
        long: <Long />,
        radio: (
            <ActiveList
                type={type as listType}
                options={options}
                control={control}
                name={name}
                insertOption={insertOption}
                removeOption={removeOption}
            />
        ),
        checkbox: (
            <ActiveList
                type={type as listType}
                options={options}
                control={control}
                name={name}
                insertOption={insertOption}
                removeOption={removeOption}
            />
        ),
        dropdown: (
            <ActiveList
                type={type as listType}
                options={options}
                control={control}
                name={name}
                insertOption={insertOption}
                removeOption={removeOption}
            />
        ),
    };

    const unActiveQuestionListByType: { [key: string]: ReactElement } = {
        short: <Short />,
        long: <Long />,
        radio: (
            <UnActiveList
                type={type as listType}
                options={options}
            />
        ),
        checkbox: (
            <UnActiveList
                type={type as listType}
                options={options}
            />
        ),
        dropdown: (
            <UnActiveList
                type={type as listType}
                options={options}
            />
        ),
    };

    return active ? activeQuestionListByType[type] : unActiveQuestionListByType[type];
};

export default QuestionList;
