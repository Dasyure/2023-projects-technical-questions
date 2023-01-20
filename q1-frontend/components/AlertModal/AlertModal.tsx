import { useContext } from "react";
import { SetStateAction, Dispatch, FormEvent } from "react";
import { TableContents } from "../Table/Table";

interface AlertModalProps {
  useContents: Dispatch<SetStateAction<TableContents>>,
  content: TableContents
}

export default function AlertModal({useContents, content}: AlertModalProps) {
  function onSubmitEvent(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // hint: the alert given is at (e.target as any).elements[0].value - ignore typescript being annoying
    content.rowContents.push({
        alert: (e.target as any)[0].value,
        status: "",
        updates: []
      }
    )
    useContents({
      columnTitles: content.columnTitles,
      rowContents: content.rowContents
    });
    (e.target as any)[0].value = "";
  }
  
  return (
    <form data-testid='form' onSubmit={onSubmitEvent}>
      <label> Add new alert: </label>
      <input type='text' id='alert' name='alert' />
      <button type='submit'> Add </button>
    </form>
  )
}
