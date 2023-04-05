import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../app/hooks";
import { globalState, setActiveHeaderTabId } from "../redux/globalSlice";
import RippleEffectButton from "./RippleEffectButton";

interface headerTabItem {
    id: "question" | "response";
    label: string;
}

const HeaderTabList = () => {
    const dispatch = useDispatch();

    const { activeHeaderTabId } = useAppSelector(globalState);
    const tabListRef = useRef<HTMLUListElement>(null);
    const [tabBarTransition, setTabBarTransition] = useState<string>("none");
    const [tabBarLeftAndWidth, setTabBarLeftAndWidth] = useState<{ left: number; width: number }>({
        left: 0,
        width: 0,
    });

    useEffect(() => {
        setTabBarLeftAndWidthWithLi();
        window.addEventListener("resize", () => {
            setTabBarTransition("none");
            setTabBarLeftAndWidthWithLi();
        });
        return () => {
            window.removeEventListener("resize", () => {
                setTabBarTransition("none");
                setTabBarLeftAndWidthWithLi();
            });
        };
    }, [activeHeaderTabId]);

    const headerTabList: headerTabItem[] = [
            {
                id: "question",
                label: "질문",
            },
            {
                id: "response",
                label: "응답",
            },
        ],
        responseCount = 0;

    const setTabBarLeftAndWidthWithLi = (li?: HTMLLIElement) => {
        if (li === undefined) {
            const activeTabItemIndex = headerTabList.findIndex(
                (tabItem: headerTabItem) => tabItem.id === activeHeaderTabId
            );
            li = Array.from(tabListRef.current!!.children)[activeTabItemIndex] as HTMLLIElement;
        }
        const { left, width } = li.getBoundingClientRect();
        setTabBarLeftAndWidth({ left, width });
    };

    const handleClickTabItem = (li: HTMLLIElement, headerTabId: "question" | "response") => {
        dispatch(setActiveHeaderTabId(headerTabId));
        setTabBarTransition("0.25s");
        setTabBarLeftAndWidthWithLi(li);
    };

    return (
        <div className="relative pt-1.5">
            <ul ref={tabListRef} className="flex items-center justify-center text-xs relative">
                {headerTabList.map((tabItem: headerTabItem) => {
                    const { id, label } = tabItem;
                    return (
                        <li key={id} className={"flex items-center"}>
                            <RippleEffectButton
                                className="px-2 py-2"
                                onClick={(e) => {
                                    const li = e.currentTarget.closest("li") as HTMLLIElement;
                                    handleClickTabItem(li, id);
                                }}
                                rippleColor="#f0ebf8"
                                rippleSize={2}
                            >
                                <>
                                    <span
                                        style={id === activeHeaderTabId ? { color: "#4c2b87", fontWeight: 'bold' } : undefined}
                                    >
                                        {label}
                                    </span>
                                    {!!responseCount && (
                                        <span className="text-white bg-zinc-700 px-1 py-0.5 rounded-full font-bold ml-2 text-2xs">
                                            {responseCount}
                                        </span>
                                    )}
                                </>
                            </RippleEffectButton>
                        </li>
                    );
                })}
            </ul>
            <div
                className="absolute bottom-0 h-[3px] rounded-full bg-[#4c2b87]"
                style={{ ...tabBarLeftAndWidth, transition: tabBarTransition }}
            />
        </div>
    );
};

export default HeaderTabList;
