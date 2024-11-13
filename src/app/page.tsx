'use client';

import { useState } from 'react';
import {
  useSearchCompanyName,
  useSearchCompanyId,
} from 'hooks/queries/register';
import { CompanyInfo } from 'types/api/register';

interface Result {
  companyNameResult: CompanyInfo[];
  companyIdResult: Partial<CompanyInfo>;
}

/**
 * App HOME
 * @return {JSX}
 */
export default function Home() {
  const [value, setValue] = useState({
    name: '',
    id: 0,
  });
  const [result, setResult] = useState<Result>({
    companyNameResult: [],
    companyIdResult: {},
  });
  const { mutate: searchCompanyId } = useSearchCompanyId();

  const { mutate: searchCompanyName } = useSearchCompanyName();

  const clickButton = (type: string) => {
    if (type === 'company') {
      searchCompanyName(value.name, {
        onSuccess(response) {
          setResult((prev) => ({ ...prev, companyNameResult: response.data }));
        },
      });
      return;
    }
    searchCompanyId(value.id, {
      onSuccess(response) {
        setResult((prev) => ({ ...prev, companyIdResult: response.data }));
      },
    });
  };
  return (
    <div>
      <h1>회사명 검색</h1>
      <input
        value={value.name}
        onChange={(e) =>
          setValue((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <button onClick={() => clickButton('company')}>검색</button>
      {result.companyNameResult.map((company) => (
        <span key={company.companyId}>{company.companyName}</span>
      ))}
      <h1>회사명 아이디</h1>
      <input
        type="number"
        value={value.id}
        onChange={(e) =>
          setValue((prev) => ({
            ...prev,
            id: Number(e.target.value),
          }))
        }
      />
      <button onClick={() => clickButton('id')}>검색</button>
      <span>{result.companyIdResult.companyName}</span>
    </div>
  );
}
