import { useEffect } from 'react';

import { TABLE_HEADER, TOTAL_ITEMS } from '../../constants';
import { generateUsers } from '../../utils';
import { DataTable } from './components';

export default function Home(): JSX.Element {
  const data = generateUsers(TOTAL_ITEMS);

  /* useEffect */
  useEffect(() => {
    document.title = 'Limina Coding Assignment';
  }, []);

  return (
    <div className="mx-auto flex flex-col h-screen">
      <h1 className="text-center font-bold py-8">Limina Coding Assignment</h1>
      <DataTable columns={TABLE_HEADER} data={data} />
    </div>
  );
}
