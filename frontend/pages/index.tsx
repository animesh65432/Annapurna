import Dashboard from "@/components/Dashboard"
import { useSearchParams } from 'next/navigation';
import FoodLoading from "@/components/Foodloading";

export default function Home() {
  const searchParams = useSearchParams();
  const dishname = searchParams.get('dishname');
  return (
    <>
      <FoodLoading />
    </>
  );
}
