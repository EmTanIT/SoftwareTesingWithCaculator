import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./DateCheckApp.module.scss";
import {
    faCheck,
    faExclamationTriangle,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import axios from "axios";

const cx = classNames.bind(styles);

function DateCheckApp({ visible, setVisible }) {
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [detail, setDetail] = useState(false);
    const [mess, setMess] = useState(false);
    const [success, setSuccess] = useState(false);
    const [fail, setFail] = useState(false);
    const [messDesc, setMessDesc] = useState("");

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

    const handleMess = () => {
        setMess(!mess);
    };

    function padValue(value) {
        if (value.length === 1) {
            return "0" + value;
        }
        return value;
    }

    const handleSubmit = () => {
        axios
            .post("http://localhost:3000/checkDateTime", {
                day: day,
                month: month,
                year: year,
            })
            .then((res) => {
                console.log(res);

                if (res.status === 200) {
                    setMess(!mess);
                    setSuccess(true);
                    setFail(false);
                    setMessDesc(res.data);
                }
            })
            .catch((error) => {
                let res = error.response
                setMess(!mess);
                setSuccess(false);
                setFail(true);
                setMessDesc(res.data);
            });
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
                                onBlur={(e) => setDay(padValue(e.target.value))}
                                value={day}
                            />
                        </div>
                        <div className={cx("item")}>
                            <p className={cx("item-heading")}>Month</p>
                            <input
                                className={cx("input")}
                                placeholder="Input a month"
                                onChange={(e) => setMonth(e.target.value)}
                                onBlur={(e) =>
                                    setMonth(padValue(e.target.value))
                                }
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
                        <button className={cx("btn")} onClick={handleSubmit}>
                            Check
                        </button>
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

            {mess ? (
                <div className={cx("message")}>
                    <div className={cx("message-wrapper")}>
                        <div className={cx("message-header")}>
                            <div className={cx("message-title")}>
                                {success ? "Success" : "Error"}
                            </div>
                            <FontAwesomeIcon
                                onClick={handleMess}
                                className={cx("message-btn")}
                                icon={faXmark}
                            />
                        </div>
                        <div className={cx("message-content")}>
                            <div className={cx("message-content-wrapper")}>
                                {success ? (
                                    <FontAwesomeIcon
                                        className={cx("message-icon-success")}
                                        icon={faCheck}
                                    />
                                ) : (
                                    ""
                                )}
                                {fail ? (
                                    <FontAwesomeIcon
                                        className={cx("message-icon-error")}
                                        icon={faExclamationTriangle}
                                    />
                                ) : (
                                    ""
                                )}

                                <div className={cx("message-desc")}>
                                    {messDesc}
                                </div>
                            </div>
                            <div className={cx("message-footer")}>
                                <button
                                    className={cx("message-submit")}
                                    onClick={handleMess}
                                >
                                    OK
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
