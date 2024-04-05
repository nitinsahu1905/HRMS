import Link from "next/link";



export default function Home() {
  return (
    <div>
   <div>Welcome to home</div>
   <button className="bg-cyan text-[#0683c6] px-4 font-serif "><Link href="/dashboard">Login</Link></button>
   </div>
  );
}
