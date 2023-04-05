import { useController } from "react-hook-form";

interface PageProps {
    control: any;
    name: string;
}

const Toggle = ({ control, name } : PageProps) => {
    const {
        field: { value: required, onChange: handleChangeRequired },
    } = useController({
        control,
        name,
    });

    return (
        <button className="px-3 group" onClick={() => {
            handleChangeRequired(!required)
        }}>
            <div className="relative w-[25px] h-[9.5px] rounded-full" style={{
                backgroundColor: required ? "rgb(225, 216, 241)" : "#bbb",
            }}>
                <div
                    className={`absolute -top-[9px] w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                        required
                            ? "group-hover:bg-blue-300/[0.2] group-active:bg-black/[0.2]"
                            : "group-hover:bg-black/[0.1] group-active:bg-[#673ab8]/[0.2]"
                    }`}
                    style={required ? { left: 5.5 } : { left: -8.5, }}
                >
                    <div
                        className="w-[14px] h-[14px] rounded-full shadow-card-shadow transition-all"
                        style={{
                            backgroundColor: required ? "#673ab8" : "white",
                        }}
                    />
                </div>
            </div>
        </button>
    );
};

export default Toggle;
