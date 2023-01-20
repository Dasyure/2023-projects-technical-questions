import styles from "./Table.module.css";
import { AlertUpdate } from "./Table";

const UpdateRow = (props: {update: AlertUpdate}) => {
  return (
    <div className={styles.rowUpdate}>
      <div>{props.update.update}</div>
      <div className={styles.rowUpdateDate}>{props.update.date}</div>
    </div>
  )
}

const Update = (props: {updates: AlertUpdate[]}) => {
  const rows = [];
    for (const update of props.updates) rows.push(<UpdateRow update={update}/>);
  return (
    <div className={styles.updateContainer}>
      {rows}
    </div>
  )
}

export default Update;