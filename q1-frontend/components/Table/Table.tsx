/* eslint-disable react/jsx-key */

import { useState } from "react";
import AlertModal from "../AlertModal";
import styles from "./Table.module.css";
import Update from "./Update"

// !!!!!!!!!!!!!!!!!!!!
// TODO is at line 68 !
// !!!!!!!!!!!!!!!!!!!!

export interface AlertUpdate {
  date: string,
  update: string
}

export interface Alert {
  alert: string,
  status: string,
  updates: AlertUpdate[]
}

export interface TableContents {
  columnTitles: string[],
  rowContents: Alert[]
}

export default function Table() {
  const [contents, useContents] = useState<TableContents>({
    columnTitles: ['Alert', 'Status', 'Updates'],
    rowContents: [
      {
        alert: 'food',
        status: 'good!',
        updates: []
      },
      {
        alert: 'water',
        status: 'low',
        updates: [{ update: 'dropped to 10% below normal', date: '11/11/2022' }]
      },
      {
        alert: 'shelter',
        status: 'terrible :(',
        updates: [{ update: 'slept on cold ground', date: '11/11/2022' }, { update: 'slept on hard concrete', date: '13/11/2022' }]
      },
      {
        alert: 'Done!',
        status: 'Dasyure',
        updates: []
      }
    ]
  });

  return (
    <>
      <AlertModal useContents={useContents} content = {contents}/>
      <div className={styles.myTable} id="table">
        <div className={styles.row}>
          {contents.columnTitles.map((item) => <div className={styles.item} key={item}>{item}</div>)}
        </div>
        {contents.rowContents.map((content) => (
          <div data-testid='row' className={styles.row}>
            <div className={styles.item}>
              {content.alert}
            </div>
            <div className={styles.item}>
              {content.status}
            </div>
            <Update updates={content.updates}/>
          </div>
        ))}
      </div>
    </>
  )
}
