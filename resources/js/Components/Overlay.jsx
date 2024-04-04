import styles from "../../module/Overlay.module.css"

export const Overlay = ({className=''}) => {
 return <div className={`${styles.overlay} ${className}`}></div>
}
