import { packages } from '../assets/assets';
import PackagesCard from '../component/PackagesCard';

export default function Packages() {
  return (
    <div className='p-10'>
      <h1 className='text-4xl font-bold mb-6'>Packages</h1>
      <div className='grid md:grid-cols-3 gap-6'>
        {packages.map((pack) => (
          <PackagesCard key={pack.id} pack={pack} />
        ))}
      </div>
    </div>
  );
}