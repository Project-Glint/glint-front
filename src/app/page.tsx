'use client';

import { useState } from 'react';
import { searchCompanyName } from 'api/register';

/**
 * App HOME
 * @return {JSX}
 */
export default function Home() {
  const [value, setValue] = useState('');

  const clickButton = () => {
    const data = searchCompanyName(value);
    console.log(data);
  };
  return (
    <div>
      <h1>Home</h1>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={clickButton}>검색</button>
    </div>
  );
}
