import { useAppDispatch } from "../app/hooks";
import { setActiveCardIdx } from "../redux/globalSlice";
import UnderlineInput from "./UnderlineInput";

interface TitleCardProps {
    control: any;
    formTitleName: string;
    formDescriptionName: string;
    active: boolean;
}

const TitleCard = ({ control, formTitleName, formDescriptionName, active }: TitleCardProps) => {
    const dispatch = useAppDispatch();
    return (
        <div
            className={`relative w-full bg-white rounded-lg border-[1px] overflow-hidden pt-[22px] pb-6 pl-5 pr-3 transition-shadow min-w-[230px] ${
                active && "shadow-card-shadow"
            }`}
            onClick={() => {
                dispatch(setActiveCardIdx(-1));
            }}
        >
            {active && <div className="absolute left-0 top-0 w-1.5 h-full bg-[#4285f4]" />}
            <div className="absolute left-0 top-0 w-full h-[10px] bg-[#673ab7]" />
            <UnderlineInput
                containerClassName={`${active && "border-b-[1px]"}`}
                inputClassName="text-3xl"
                placeHolder="설문지 제목"
                control={control}
                name={formTitleName}
            />
            <UnderlineInput
                containerClassName={`${active && "border-b-[1px]"} mt-1.5`}
                placeHolder="설문지 설명"
                control={control}
                name={formDescriptionName}
            />
        </div>
    );
};

export default TitleCard;
