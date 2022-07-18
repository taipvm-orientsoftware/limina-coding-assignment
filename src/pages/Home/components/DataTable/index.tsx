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
  const [rowHeight] = useState<number>(36);
  const [viewportHeight] = useState<number>(rowHeight * 21);
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
          className="table table-zebra w-full text-xs lg:text-sm"
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
