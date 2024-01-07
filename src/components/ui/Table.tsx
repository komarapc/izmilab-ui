import { TableHTMLAttributes } from "react";

interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  bordered?: boolean;
  borderStyle?: "border-collapse" | "border-separate";
  responsive?: boolean;
  rounded?: number;
}

type CellProps = {
  bordered?: boolean;
  textAlignment?: "text-left" | "text-center" | "text-right" | "text-justify";
};

const Table = (props: TableProps) => {
  const {
    className = "",
    children,
    bordered,
    borderStyle,
    responsive,
    rounded = 0,
    ...rest
  } = props;
  return (
    <table
      {...rest}
      className={`table ${responsive ? "table-auto" : ""} ${
        bordered ? `border ${borderStyle}` : ""
      }  ${className}`}
      style={{ borderRadius: `${rounded * 0.125}rem` }}
    >
      {children}
    </table>
  );
};

const TableHead = ({
  className = "",
  children,
  bordered,
  ...rest
}: React.HTMLAttributes<HTMLTableSectionElement> & CellProps) => {
  return (
    <thead
      {...rest}
      className={`${className} ${
        bordered ? "border" : ""
      } font-medium px-6 py-3 uppercase`}
    >
      {children}
    </thead>
  );
};
const TableBody = ({
  className = "",
  bordered,
  children,
  ...rest
}: React.HTMLAttributes<HTMLTableSectionElement> & CellProps) => {
  return (
    <tbody {...rest} className={`${className} ${bordered ? "border" : ""}`}>
      {children}
    </tbody>
  );
};
const TableFooter = ({
  className = "",
  children,
  ...rest
}: React.HTMLAttributes<HTMLTableSectionElement>) => {
  return (
    <tfoot {...rest} className={`${className}`}>
      {children}
    </tfoot>
  );
};
const TableRow = ({
  className = "",
  children,
  ...rest
}: React.HTMLAttributes<HTMLTableRowElement>) => {
  return (
    <tr {...rest} className={`${className}`}>
      {children}
    </tr>
  );
};
const TableCell = ({
  className = "",
  bordered,
  children,
  textAlignment = "text-left",
  ...rest
}: React.TdHTMLAttributes<HTMLTableCellElement> & CellProps) => {
  return (
    <td
      {...rest}
      className={`${className} ${textAlignment} ${
        bordered ? "border" : ""
      } px-6 py-3`}
    >
      {children}
    </td>
  );
};
const TableHeaderCell = ({
  className = "",
  children,
  bordered,
  textAlignment = "text-left",
  ...rest
}: React.ThHTMLAttributes<HTMLTableCellElement> & CellProps) => {
  return (
    <th
      {...rest}
      className={`${className} ${textAlignment} ${
        bordered ? "border" : ""
      } text-sm py-3 px-6`}
    >
      {children}
    </th>
  );
};

const TableCaption = ({
  className = "",
  children,
  ...rest
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <caption {...rest} className={`${className}`}>
      {children}
    </caption>
  );
};

Table.Caption = TableCaption;
Table.Head = TableHead;
Table.Body = TableBody;
Table.Footer = TableFooter;
Table.HeadCell = TableHeaderCell;
Table.Row = TableRow;
Table.Cell = TableCell;
export default Table;
