import classNames from "classnames/bind";
import styles from "./DateCheckButton.module.scss";

import DateCheckApp from "./DateCheckApp/DateCheckApp";
import { useState } from "react";

const cx = classNames.bind(styles);

function DateCheckButton() {
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(true);
    };

    return (
        <div className={cx("wrapper")}>
            <button className={cx("btn")} onClick={handleClick}>
                <p className={cx("btn-desc")}>Date time checker</p>
            </button>

            {visible ? (
                <DateCheckApp visible={visible} setVisible={setVisible} />
            ) : (
                ""
            )}
        </div>
    );
}

export default DateCheckButton;
