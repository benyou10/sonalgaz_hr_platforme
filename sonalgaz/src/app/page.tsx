import Grid from "./components/Grid";
import Image from "next/image"
import './globals.css'
import { AspectRatio } from "@/components/ui/aspect-ratio"
import TopNavBar from "./components/topnavbar";
import SideNav from "./components/sideNave";

export default function Home() {
  return (
    <div className="background bg-[#efefef] grid grid-cols-12 w-full h-full">
      <div className="col-span-12 bg-white px-6 row-span-1"><TopNavBar/></div>
      <div className="col-span-2 pl-7 bg-white mr-5 row-span-12"><SideNav/></div>
    <main className=" col-span-9 row-span-11   antialiased ">
      <div >
  <Grid/>
</div>

      
    </main>
    </div>
  );
}
