import React, { CSSProperties, ReactElement, useState } from "react";

interface RippleEffectButtonProps {
    children: ReactElement;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    rippleColor?: string;
    rippleSize?: number;
    style?: CSSProperties
}

const RippleEffectButton = ({
    children,
    className,
    onClick,
    rippleColor = "lightGray",
    rippleSize = 4,
    style,
}: RippleEffectButtonProps) => {
    const [rippleEffectLeftAndTop, setRippleEffectLeftAndTop] = useState<{ left: string; top: string }>({
        left: "0",
        top: "0",
    });
    const [isRippleVisible, setIsRippleVisible] = useState<boolean>(false);

    const handleMouseDownButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setIsRippleVisible(false);
        const button = e.currentTarget;
        const { left, top } = button.getBoundingClientRect();
        setRippleEffectLeftAndTop({ left: e.clientX - left + "px", top: e.clientY - top + "px" });
        setTimeout(() => {
            setIsRippleVisible(true);
        }, 8);
    };

    return (
        <button onMouseDown={handleMouseDownButton} onClick={onClick} className="relative overflow-hidden">
            <div className={`relative z-[1] ${className}`} style={style}>{children}</div>
            {isRippleVisible && (
                <div
                    className="absolute rounded-full -translate-x-2/4 -translate-y-2/4 animate-ripple-effect"
                    style={{
                        ...rippleEffectLeftAndTop,
                        backgroundColor: rippleColor,
                        width: rippleSize,
                        height: rippleSize,
                    }}
                />
            )}
        </button>
    );
};

export default RippleEffectButton;
