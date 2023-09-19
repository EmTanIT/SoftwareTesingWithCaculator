import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./DateCheckApp.module.scss";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const cx = classNames.bind(styles);

function DateCheckApp({ visible, setVisible }) {
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [detail, setDetail] = useState(false);

    const handleClick = () => {
        setVisible(!visible);
    };

    const handleDetail = () => {
        setDetail(!detail);
    };

    const handleClear = () => {
        setDay("");
        setMonth("");
        setYear("");
    };

    return (
        <div className={cx("background")}>
            <div className={cx("wrapper")}>
                <div className={cx("top")}>
                    <div className={cx("top-logo")}></div>
                    <div className={cx("close-btn")} onClick={handleDetail}>
                        <FontAwesomeIcon
                            className={cx("close")}
                            icon={faXmark}
                        />
                    </div>
                </div>
                <div className={cx("bottom")}>
                    <h1 className={cx("heading")}>Date time checker</h1>
                    <div className={cx("list")}>
                        <div className={cx("item")}>
                            <p className={cx("item-heading")}>Day</p>
                            <input
                                className={cx("input")}
                                placeholder="Input a day"
                                onChange={(e) => setDay(e.target.value)}
                                value={day}
                            />
                        </div>
                        <div className={cx("item")}>
                            <p className={cx("item-heading")}>Month</p>
                            <input
                                className={cx("input")}
                                placeholder="Input a month"
                                onChange={(e) => setMonth(e.target.value)}
                                value={month}
                            />
                        </div>
                        <div className={cx("item")}>
                            <p className={cx("item-heading")}>Year</p>
                            <input
                                className={cx("input")}
                                placeholder="Input a year"
                                onChange={(e) => setYear(e.target.value)}
                                value={year}
                            />
                        </div>
                    </div>
                    <div className={cx("button-wrapper")}>
                        <button className={cx("btn")} onClick={handleClear}>
                            Clear
                        </button>
                        <button className={cx("btn")}>Check</button>
                    </div>
                </div>
            </div>
            {detail ? (
                <div className={cx("detail")}>
                    <div className={cx("detail-wrapper")}>
                        <div className={cx("detail-header")}>
                            <h2 className={cx("detail-header-title")}>
                                Confirm
                            </h2>
                            <FontAwesomeIcon
                                className={cx("detail-icon")}
                                icon={faXmark}
                                onClick={handleDetail}
                            />
                        </div>
                        <div className={cx("detail-content")}>
                            <h2 className={cx("detail-content-title")}>
                                Do you want to exit !
                            </h2>
                            <div className={cx("detail-button")}>
                                <button
                                    className={cx("button-close")}
                                    onClick={handleClick}
                                >
                                    Ok
                                </button>
                                <button
                                    className={cx("button-cancel")}
                                    onClick={handleDetail}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}

export default DateCheckApp;
