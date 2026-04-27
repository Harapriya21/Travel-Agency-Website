export default function DestinationCard({ place }) {
  return (
    <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
      <img src={place.image} alt={place.name} className='w-full h-52 object-cover' />
      <div className='p-4'>
        <h2 className='text-xl font-bold'>{place.name}</h2>
        <p>{place.description}</p>
      </div>
    </div>
  );
}