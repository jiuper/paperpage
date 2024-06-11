import { useState } from "react";
import cnBind from "classnames/bind";

import { SideBar } from "@/components/SideBar";
import { ROUTING_LEVEL_ONE, ROUTING_LEVEL_TWO } from "@/shared/constants/Routing";

import styles from "./Header.module.scss";

const cx = cnBind.bind(styles);

export const Header = () => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => setIsHovering(true);

    const handleMouseLeave = () => setIsHovering(false);

    return (
        <header className={cx("header")}>
            <div className={cx("wrapper")}>
                <SideBar items={ROUTING_LEVEL_ONE} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} />
                {isHovering && (
                    <SideBar
                        items={ROUTING_LEVEL_TWO}
                        onMouseLeave={handleMouseLeave}
                        onMouseEnter={() =>{}}
                        hidden
                        classNames={cx("context-menu")}
                    />
                )}
            </div>
        </header>
    );
};
