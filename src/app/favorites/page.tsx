import FavoritesGrid from '../../components/favorites/grid';

export default function Favorites() {
    return (
      <div className='h-screen w-screen flex flex-col items-center p-20 pt-32 gap-8 justify-start'>
        <h1 className="text-2xl text-center font-medium w-full">Saved cities</h1>
        <FavoritesGrid/>
      </div>
    );
  }