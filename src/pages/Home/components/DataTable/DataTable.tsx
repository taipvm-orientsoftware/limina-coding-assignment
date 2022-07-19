import { useMemo, useState } from 'react';

import { TOTAL_ITEMS } from '../../../../constants';
import { useScrollDetect } from '../../../../hooks';
import User from '../../../../models/user.model';

type DataTableProps = {
  columns: Array<{ name: string; key: string }>;
  data: Array<User>;
};

export default function DataTable({ columns, data }: DataTableProps): JSX.Element {
  /* useState */
  const [rowHeight] = useState<number>(32);
  const [viewportHeight] = useState<number>(window.innerHeight - 96); // 96px is the clientHeight off the page heading
  const [nodePadding] = useState<number>(2);

  /* custom hooks */
  const [scrollTop, ref] = useScrollDetect();

  const totalContentHeight: number = rowHeight * TOTAL_ITEMS;

  let startRow: number = Math.floor(scrollTop / rowHeight) - nodePadding;
  startRow = Math.max(0, startRow);

  let visibleRows: number = Math.ceil(viewportHeight / rowHeight) + 2 * nodePadding;
  visibleRows = Math.min(TOTAL_ITEMS - startRow, visibleRows);

  const endRow: number = startRow + visibleRows;

  const offsetY: number = startRow * rowHeight;

  const renderTableHeader = useMemo(() => {
    return columns.map(({ name, key }) => (
      <th key={key} className="p-2">
        {name}
      </th>
    ));
  }, [columns]);

  const renderTableRows = useMemo(() => {
    const visibleItems = data.slice(startRow, endRow);

    return visibleItems.map(item => (
      <tr key={item.id}>
        <td className="p-2">{item.id}</td>
        <td className="p-2">{item.firstName}</td>
        <td className="p-2">{item.lastName}</td>
        <td className="p-2">{item.email}</td>
        <td className="p-2">{item.phoneNumber}</td>
        <td className="p-2">{item.dataOfBirth}</td>
        <td className="p-2">{item.gender}</td>
        <td className="p-2">{item.address}</td>
        <td className="p-2">{item.state}</td>
        <td className="p-2">{item.country}</td>
        <td className="p-2">{item.zipCode}</td>
        <td className="p-2">{`$${item.investment}`}</td>
        <td className="p-2">{item.product}</td>
        <td className="p-2">{item.job}</td>
        <td className="p-2">{item.company}</td>
      </tr>
    ));
  }, [data, startRow, endRow]);

  return (
    <div className="overflow-x-auto flex-1" ref={ref}>
      <div style={{ height: `${totalContentHeight}px` }}>
        <table
          className="table table-zebra w-full text-xs xl:text-sm"
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
