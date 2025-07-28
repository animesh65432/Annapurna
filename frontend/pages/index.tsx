import Dashboard from "@/components/Dashboard"
import { useSearchParams } from 'next/navigation';



export default function Home() {
  const searchParams = useSearchParams();
  const dishname = searchParams.get('dishname');
  return (
    <>
      <Dashboard dishname={dishname} />

    </>
  );
}
