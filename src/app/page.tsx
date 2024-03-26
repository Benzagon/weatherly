import Indexbody from "@/components/main/IndexBody";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function Home() {
  return (
    <div className='h-screen w-screen flex flex-col gap-8 items-center p-20 pt-32 justify-start'>
      <div className="flex justify-center items-center gap-2 h-fit">
          <ThunderstormIcon className="text-blue-500"></ThunderstormIcon>
          <h1 className="text-2xl text-center font-medium">Weatherly!</h1>
      </div>
      <Indexbody></Indexbody>
    </div>
  );
}
