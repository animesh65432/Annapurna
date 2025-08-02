'use client';
import { useSearchParams } from 'next/navigation';
import SearchresultResult from '@/components/Explore/SearchresultResult';

export default function SearchPage() {
    const searchParams = useSearchParams();

    const diet = searchParams.get('diet');
    const cuisine = searchParams.get('cuisine');
    const q = searchParams.get('q')

    console.log(diet, cuisine, q);

    return (
        <SearchresultResult diet={diet} cuisine={cuisine} q={q} />
    );
}
