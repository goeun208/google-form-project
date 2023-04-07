import { ReactElement, useEffect, useState } from "react";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";

interface DropDownItemType {
    id: string;
    label: string;
    icon: ReactElement;
}

const DropdownMenu = () => {
    const [view, setView] = useState<boolean>(false); // 숨겼다가 펼치는 메뉴
    const [menu, setMenu] = useState<string>('radio');

    useEffect(() => {
        console.log('menu', menu);
    }, [menu]);

    const dropDownItems: DropDownItemType[] = [
        {
            id: "radio",
            label: "객관식 질문",
            icon: <RadioButtonCheckedIcon className="text-zinc-600" />,
        },
        {
            id: "checkbox",
            label: "체크박스",
            icon: <CheckBoxOutlinedIcon className="text-zinc-600" />,
        },
        {
            id: "dropdown",
            label: "드롭다운",
            icon: <ArrowDropDownCircleOutlinedIcon className="text-zinc-600" />,
        },
    ];

    // const selectDropDownMenu = () => {
    //     setMenu(dropDownItems.find((dropDownItem) => dropDownItem.id === menu));
    // }
    return (
        <div>
            <label className="text-sm"></label>
            <ul className="text-sm text-center h-[3rem] border-[#000] overflow-auto">
                {
                    dropDownItems.map((item:DropDownItemType, idx:number) => (
                        <li key={idx} onClick={() => setMenu(item.id)} className="border flex items-center w-[12rem] h-[3rem] text-center hover:bg-[#eee]">
                            <span className="mx-2">{item.icon}</span>
                            <span >{item.label}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default DropdownMenu;