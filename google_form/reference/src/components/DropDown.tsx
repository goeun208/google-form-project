import ShortTextIcon from "@mui/icons-material/ShortText";
import SubjectIcon from "@mui/icons-material/Subject";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import RippleEffectButton from "./RippleEffectButton";
import { ReactElement, useEffect, useState } from "react";
import { useController } from "react-hook-form";

interface PageProps {
    control: any;
    name: string;
}

interface DropDownItemType {
    id: string;
    label: string;
    icon: ReactElement;
}

const DropDown = ({ control, name }: PageProps) => {
    const {
        field: { value, onChange },
    } = useController({
        control,
        name,
    });

    const [openDropDown, setOpenDropDown] = useState<boolean>(false);

    useEffect(() => {
        const handleClickWindow = () => {
            setOpenDropDown(false);
        };
        window.addEventListener("click", handleClickWindow);
        return () => {
            window.removeEventListener("click", handleClickWindow);
        };
    }, []);

    const dropDownItems: DropDownItemType[] = [
        {
            id: "short",
            label: "단답형",
            icon: <ShortTextIcon className="text-zinc-600" />,
        },
        {
            id: "long",
            label: "장문형",
            icon: <SubjectIcon className="text-zinc-600" />,
        },
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

    const activeDropDownItem = () => {
        return dropDownItems.find((dropDownItem) => dropDownItem.id === value);
    };

    const dropDownWrapPt = 12;
    const dropDownWrapHeight = 48;

    const setDropDownWrapTop = () => {
        const activeDropDownIdx = dropDownItems.findIndex((dropDownItem) => dropDownItem.id === value);
        return -(dropDownWrapPt + activeDropDownIdx * dropDownWrapHeight);
    };

    return (
        <div className="relative">
            <RippleEffectButton
                className="flex items-center border-[1px] rounded-[4px] border-gray-300 w-48 pl-3"
                style={{height: dropDownWrapHeight}}
                rippleSize={12}
                onClick={(e) => {
                    e.stopPropagation();
                    setOpenDropDown(!openDropDown);
                }}
            >
                <>
                    {activeDropDownItem()!!.icon}
                    <span className="text-sm w-[112px] text-left ml-2">{activeDropDownItem()!!.label}</span>
                    <ArrowDropDownOutlinedIcon className="text-zinc-600" />
                </>
            </RippleEffectButton>
            {openDropDown && (
                <ul
                    className="absolute bg-white z-[999] rounded-[4px] py-3 shadow-card-shadow border-[1px]"
                    style={{ top: setDropDownWrapTop(), left: 0 }}
                >
                    {dropDownItems.map((dropdownItem: DropDownItemType) => {
                        const { id, label, icon } = dropdownItem;
                        return (
                            <li key={id}>
                                <RippleEffectButton
                                    className={`flex items-center w-48 pl-3  ${
                                        value === id ? "bg-blue-50 hover:bg-blue-50/[0.5]" : "hover:bg-gray-200"
                                    }`}
                                    style={{height: dropDownWrapHeight}}
                                    rippleSize={12}
                                    onClick={() => {
                                        onChange(id);
                                    }}
                                >
                                    <>
                                        {icon}
                                        <span className="text-sm w-[112px] text-left ml-2">{label}</span>
                                    </>
                                </RippleEffectButton>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default DropDown;
