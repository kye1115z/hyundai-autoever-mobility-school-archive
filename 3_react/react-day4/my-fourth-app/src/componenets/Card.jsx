import styles from "./Card.module.css";
import classNames from "classnames";

function Card({ title, children, variant = "card" }) {
  return (
    <div className={classNames(styles.card, styles[variant])}>
      {title && <h2 className="title">{title}</h2>}
      <p className={styles.content}>{children}</p>
    </div>
  );
}
export default Card;
