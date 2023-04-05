import DescriptionIcon from "@mui/icons-material/Description";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import UTurnLeftOutlinedIcon from "@mui/icons-material/UTurnLeftOutlined";
import UTurnRightOutlinedIcon from "@mui/icons-material/UTurnRightOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import FormatBoldOutlinedIcon from "@mui/icons-material/FormatBoldOutlined";
import FormatItalicOutlinedIcon from "@mui/icons-material/FormatItalicOutlined";
import FormatUnderlinedOutlinedIcon from "@mui/icons-material/FormatUnderlinedOutlined";
import CropOriginalRoundedIcon from "@mui/icons-material/CropOriginalRounded";
import { ReactElement } from "react";

interface IconButtonProps {
    iconName:
        | "DescriptionIcon"
        | "AcUnitIcon"
        | "FolderOpenIcon"
        | "StarBorderIcon"
        | "RemoveRedEyeOutlinedIcon"
        | "ColorLensOutlinedIcon"
        | "UTurnLeftOutlinedIcon"
        | "UTurnRightOutlinedIcon"
        | "AddCircleOutlineOutlinedIcon"
        | "DeleteOutlineOutlinedIcon"
        | "ContentCopyOutlinedIcon"
        | "FormatBoldOutlinedIcon"
        | "FormatItalicOutlinedIcon"
        | "FormatUnderlinedOutlinedIcon"
        | "CropOriginalRoundedIcon";
    toolTipLabel: string;
    className?: string;
    buttonSize?: "small" | "large" | "medium";
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const IconButton = ({
    iconName,
    toolTipLabel,
    className = "",
    buttonSize = "medium",
    onClick,
    ...rest
}: IconButtonProps) => {
    const buttonSizeObject = {
        small: {
            width: 32,
            height: 32,
        },
        medium: {
            width: 40,
            height: 40,
        },
        large: {
            width: 48,
            height: 48,
        },
    };
    className = "text-zinc-600 " + className;
    Object.assign(rest, { className, fontSize: buttonSize });

    const setIcon = (): ReactElement => {
        const iconObject: { [key: string]: ReactElement } = {
            DescriptionIcon: <DescriptionIcon {...rest} />,
            AcUnitIcon: <AcUnitIcon {...rest} />,
            FolderOpenIcon: <FolderOpenIcon {...rest} />,
            StarBorderIcon: <StarBorderIcon {...rest} />,
            RemoveRedEyeOutlinedIcon: <RemoveRedEyeOutlinedIcon {...rest} />,
            ColorLensOutlinedIcon: <ColorLensOutlinedIcon {...rest} />,
            UTurnLeftOutlinedIcon: <UTurnLeftOutlinedIcon {...rest} className={`rotate-90 ${className}`} />,
            UTurnRightOutlinedIcon: <UTurnRightOutlinedIcon {...rest} className={`-rotate-90 ${className}`} />,
            AddCircleOutlineOutlinedIcon: <AddCircleOutlineOutlinedIcon {...rest} />,
            DeleteOutlineOutlinedIcon: <DeleteOutlineOutlinedIcon {...rest} />,
            ContentCopyOutlinedIcon: <ContentCopyOutlinedIcon {...rest} />,
            FormatBoldOutlinedIcon: <FormatBoldOutlinedIcon {...rest} />,
            FormatItalicOutlinedIcon: <FormatItalicOutlinedIcon {...rest} />,
            FormatUnderlinedOutlinedIcon: <FormatUnderlinedOutlinedIcon {...rest} />,
            CropOriginalRoundedIcon: <CropOriginalRoundedIcon {...rest} />,
        };
        return iconObject[iconName];
    };
    return (
        <button
            className="relative flex flex-col items-center justify-center rounded-full hover:bg-zinc-100 group/icon-button"
            style={{...buttonSizeObject[buttonSize]}}
            onClick={onClick}
        >
            {setIcon()}
            <div className="absolute -bottom-3 text-2xs bg-zinc-500 text-white px-1 py-0.5 rounded-sm whitespace-nowrap scale-0 group-hover/icon-button:animate-fade-in-bottom">
                {toolTipLabel}
            </div>
        </button>
    );
};

export default IconButton;
