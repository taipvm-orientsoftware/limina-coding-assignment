import { useEffect, useMemo, useState } from 'react';

import { TOTAL_ITEMS } from '../../../../constants';
import { useScrollDetect } from '../../../../hooks';
import User from '../../../../models/user.model';

type DataTableProps = {
  columns: Array<{ name: string; key: string }>;
  data: Array<User>;
};

export default function DataTable({ columns, data }: DataTableProps): JSX.Element {
  /* useState */
  const [items, setItems] = useState<User[]>([]);
  const [rowHeight] = useState<number>(36);
  const [viewportHeight] = useState<number>(rowHeight * 23);
  const [nodePadding] = useState<number>(5);

  /* custom hooks */
  const [scrollTop, ref] = useScrollDetect();

  const totalContentHeight = rowHeight * TOTAL_ITEMS;

  let startRow = Math.floor(scrollTop / rowHeight) - nodePadding;
  startRow = Math.max(0, startRow);

  let visibleRows = Math.ceil(viewportHeight / rowHeight) + 2 * nodePadding;
  visibleRows = Math.min(TOTAL_ITEMS - startRow, visibleRows);

  const endRow = startRow + visibleRows;

  const offsetY = startRow * rowHeight;

  const renderTableHeader = useMemo(() => {
    return columns.map(({ name, key }) => <th key={key}>{name}</th>);
  }, [columns]);

  const renderTableRows = useMemo(() => {
    return items.map(item => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.email}</td>
        <td>{item.phoneNumber}</td>
        <td>{item.dataOfBirth}</td>
        <td>{item.gender}</td>
        <td>{item.address}</td>
        <td>{item.state}</td>
        <td>{item.country}</td>
        <td>{item.zipCode}</td>
        <td>{`$${item.investment}`}</td>
        <td>{item.product}</td>
        <td>{item.job}</td>
        <td>{item.company}</td>
      </tr>
    ));
  }, [items]);

  useEffect(() => {
    setItems(data.slice(startRow, endRow));
  }, [data, startRow, endRow]);

  return (
    <div className="overflow-x-auto flex-1" ref={ref}>
      <div style={{ height: `${totalContentHeight}px` }}>
        <table
          className="table table-compact table-zebra w-full text-sm md:text-xs"
          style={{ transform: `translateY(${offsetY}px)` }}
        >
          <thead>
            <tr>{renderTableHeader}</tr>
          </thead>
          <tbody>{renderTableRows}</tbody>
        </table>
      </div>
    </div>
  );
}
