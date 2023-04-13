import { ReactElement, useState } from "react";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import { useController} from "react-hook-form";

interface DropDownItemType {
    id: string;
    label: string;
    icon: ReactElement;
}

const DropdownMenu = ({control, name}:any) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [menu, setMenu] = useState<any>([{
        id: "radio",
        label: "객관식 질문",
        icon: <RadioButtonCheckedIcon className="text-zinc-600" />,
    }]);
    const {
        field: { value, onChange },
    } = useController({
        control,
        name,
    });

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

    const selectDropdownMenu = (item:DropDownItemType) => {
        setMenu(dropDownItems.filter((dropdownItem) => dropdownItem.id === item.id))
    }

    const handleChange = () => {
        setIsOpen(!isOpen)
      };
    return (
        <div>
            { isOpen ?  
            <div className="ml-2 shadow-lg absolute -top-6 right-[15rem] rounded-[4px] z-10">
                <div className="text-sm text-center w-[13rem] h-[3rem] absolute top-0" onClick={handleChange}>
                {
                    dropDownItems.map((item:DropDownItemType, idx:number) => (
                        <div key={idx} onClick={() => (
                                selectDropdownMenu(item),
                                onChange(item.id)
                            )} className="flex items-center h-[3rem] text-center hover:bg-[#eee] border bg-white">
                            <span className="mx-3">{item.icon}</span>
                            <span >{item.label}</span>
                        </div>
                    ))
                }
            </div>
            </div>
            
            :
            <div className="text-sm text-center w-[13rem] h-[3rem] border overflow-hidden flex items-center h-[3rem] hover:bg-[#eee] rounded-[4px]" onClick={handleChange}>
                <span className="mx-3">{menu[0].icon}</span>
                <span >{menu[0].label}</span>
            </div>
            // <ul className="text-sm text-center w-[13rem] h-[3rem] overflow-hidden">
            //     {
            //         dropDownItems.map((item:DropDownItemType, idx:number) => (
            //             <li key={idx} onClick={() => (
            //                     setIsOpen(!isOpen),
            //                     onChange(item.id)
            //                 )} className="border flex items-center h-[3rem] text-center hover:bg-[#eee]">
            //                 <span className="mx-3">{item.icon}</span>
            //                 <span >{item.label}</span>
            //             </li>
            //         ))
            //     }
            // </ul> 
            }
        </div>
    );
}

export default DropdownMenu;