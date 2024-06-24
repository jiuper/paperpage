import { Map, Placemark, TypeSelector, YMaps, ZoomControl } from "@pbe/react-yandex-maps";
import cnBind from "classnames/bind";

import { FormMain } from "@/components/_Forms/FormMain";

import styles from "./Location.module.scss";

const cx = cnBind.bind(styles);
export const Location = () => {
    return (
        <div className={cx("location")}>
            <div className={cx("header")}>
                <div className={cx("map", "container")}>
                    <h1>Контакты</h1>
                    <div className={cx("contacts")}>
                        <div className={cx("phone")}>
                            <span>+7 (812) 244-10-37</span>
                            <span className={cx("work-time")}>
                                Работаем ПН-ПТ <span>с 9:00 до 18:00</span>
                            </span>
                        </div>
                        <div className={cx("email")}>
                            <span>info@tpaper.ru</span>
                            <span>Почта</span>
                        </div>
                        <div className={cx("location-info")}>
                            <span className={cx("address")}>
                                196644, г. Санкт-Петербург, пос. Сапёрный, территория предприятия &quot;Балтика&quot;,
                                дом без №, стр. литера К
                            </span>
                            <span className={cx("gps")}>GPS: N59°46.374 E30°42.993</span>
                        </div>
                    </div>
                    <YMaps enterprise query={{ apikey: "afef66c1-8caa-48c3-b88d-a01c82578b02" }}>
                        <Map
                            onLoad={() => {}}
                            instanceRef={(ref) => {
                                // eslint-disable-next-line no-unused-expressions
                                ref && ref.behaviors.disable("scrollZoom");
                            }}
                            className={cx("cn-left")}
                            defaultState={{ center: [59.46374, 30.42993], zoom: 11 }}
                        >
                            <Placemark geometry={[59.46374, 30.42993]} />
                            <ZoomControl />
                            <TypeSelector />
                        </Map>
                    </YMaps>
                </div>
            </div>

            <div className={cx("form", "container")}>
                <FormMain />
            </div>
        </div>
    );
};
