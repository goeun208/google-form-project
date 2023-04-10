import { ReactElement, useEffect, useState } from "react";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import { useRecoilState } from "recoil";
import { dropMenuId } from "../atoms/dropMenuId";
import { useController, useForm } from "react-hook-form";

interface DropDownItemType {
    id: string;
    label: string;
    icon: ReactElement;
}

const DropdownMenu = ({control, name}:any) => {
    const [menu, setMenu] = useRecoilState<string>(dropMenuId);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const {
        field: { value, onChange },
    } = useController({
        control,
        name,
    });

    useEffect(() => {
        console.log('name', name);
    }, []);

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
            { isOpen ?  <ul className="text-sm text-center h-[3rem]">
                {
                    dropDownItems.map((item:DropDownItemType, idx:number) => (
                        <li key={idx} onClick={() => (
                                setIsOpen(!isOpen),
                                onChange(item.id)
                            )} className="border flex items-center w-[12rem] h-[3rem] text-center hover:bg-[#eee]">
                            <span className="mx-2">{item.icon}</span>
                            <span >{item.label}</span>
                        </li>
                    ))
                }
            </ul>
            :
            <ul className="text-sm text-center h-[3rem] overflow-hidden">
                {
                    dropDownItems.map((item:DropDownItemType, idx:number) => (
                        <li key={idx} onClick={() => (
                                setIsOpen(!isOpen),
                                onChange(item.id)
                            )} className="border flex items-center w-[12rem] h-[3rem] text-center hover:bg-[#eee]">
                            <span className="mx-2">{item.icon}</span>
                            <span >{item.label}</span>
                        </li>
                    ))
                }
            </ul> }
        </div>
    );
}

export default DropdownMenu;