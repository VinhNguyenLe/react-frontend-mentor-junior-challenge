import React from "react"
import styles from "./ECC.module.scss"
import { data } from "./data"

const ECC = () => {
    document.title = "Expenses Chart Component"
    const date = new Date()
    const day = date.getDay()
    return (
        <div className={styles.wrap}>
            <div className={styles.component}>
                <div className={styles.top}>
                    <div className={styles.title}>
                        <p>My balance</p>
                        <h2>$921.48</h2>
                    </div>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.main}>
                    <h2>Spending - Last 7 days</h2>
                    <div className={styles.chartWrap}>
                        <div className={styles.chart}>
                            {data.map((item) => (
                                <div
                                    style={{ height: item.amount * 3 }}
                                    key={item.index}
                                    className={
                                        day === item.index
                                            ? `${styles.column} ${styles.active}`
                                            : styles.column
                                    }
                                >
                                    <p>{item.day}</p>
                                    <h4>${item.amount}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.result}>
                        <div className={styles.resultItem}>
                            <p>Total this month</p>
                            <h1>$478.33</h1>
                        </div>
                        <div className={styles.resultItem}>
                            <h4>+2.4%</h4>
                            <p>from last month</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ECC
