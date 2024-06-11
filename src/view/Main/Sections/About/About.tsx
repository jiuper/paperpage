import cnBind from "classnames/bind";

import ABOUT from "@/shared/assests/about.png";
import COMPLETED from "@/shared/assests/svg/completed.svg";
import DEAL from "@/shared/assests/svg/deal.svg";
import DELIVERY from "@/shared/assests/svg/delivery.svg";
import RECT from "@/shared/assests/svg/rect.svg";
import { CustomImage } from "@/shared/ui/CustomImage";

import styles from "./About.module.scss";

const cx = cnBind.bind(styles);
const arrList = [
    { icon: DELIVERY as string, caption: "Доставка", desc: "Своевременное исполнение заказа и быстрая доставка" },
    {
        icon: DEAL as string,
        caption: "Условия",
        desc: "Индивидуальный подход к ценообразованию, выгодный для обеих сторон",
    },
    {
        icon: COMPLETED as string,
        caption: "Полный цикл",
        desc: "Наша компания предоставляет услуги полного цикла: заказ - производство - доставка",
    },
    { icon: RECT as string, caption: "Ассортимент", desc: "Широкий ассортимент" },
];
export const About = () => {
    return (
        <div className={cx("about")}>
            <div className={cx("wrapper", "container")}>
                <div className={cx("top")}>
                    <CustomImage src={ABOUT} alt="ABOUT" className={cx("image")} />
                    <div className={cx("text")}>
                        <h2>О компании</h2>
                        <p>
                            Наша компания осуществляет свою деятельность с 2004 года. В 2013 была реорганизация и мы
                            приступили к работе с новыми силами и смыслами.
                        </p>
                        <span>
                            Нашу продукцию покупают научные институты, художники, сети канцелярских товаров,
                            художественные школы, производители пищевых продуктов и многие другие.
                        </span>
                        <span>
                            Также наша продукция активно отгружается зарубеж. Мы сотрудничаем со многими странами, в том
                            числе: Иран, Молдавия, Польша, Белоруссия Армения, Азербайджан, Казахстан, Грузия...
                        </span>
                        <span>
                            В нашей команде настоящие профессионалы, которые работают с момента открытия компании. Мы
                            знаем всё нюансы и особенности нашего производства и можем предложить наилучший вариант
                            вашего заказа. Ответим на все вопросы о нашей продукции и условиях работы.
                        </span>
                    </div>
                </div>
                <div className={cx("bottom")}>
                    {arrList.map((el) => (
                        <div className={cx("item")} key={el.caption}>
                            <CustomImage width={40} height={40} src={el.icon} alt={el.caption} />
                            <div className={cx("text")}>
                                <span>{el.caption}</span>
                                <span>{el.desc}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
