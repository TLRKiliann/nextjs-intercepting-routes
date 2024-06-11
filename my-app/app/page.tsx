import Link from "next/link";
import Image from "next/image";
import { FaLink } from "react-icons/fa";
import interceptImg from "@/public/assets/intercepting_route.png";

export default function Home() {
  return (
    <main className="w-full min-h-screen text-lg text-gray-600/80 
    dark:text-zinc-400 bg-page dark:bg-page-dark p-10">

      <h1 className='w-[420px] text-2xl font-bold bg-clip-text text-transparent text-gradients 
        dark:text-gradients-dark'>
        Next.js 14 intercepting routes
      </h1>
      
      <h2 className="flex flex-row items-center text-slate-50 font-bold bg-blue-500 dark:bg-slate-800
        border border-slate-400 dark:border-slate-700 ml-4 mr-4 mt-10 mb-6 p-4 rounded-lg">
        Intercepting Routes 
        <Link href="https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes"
          target="_blank" rel="noopener noreferrer"
          className="text-sm text-blue-300 hover:text-blue-400 active:text-blue-200 ml-2"
        >
          <FaLink size={18}/>
        </Link>
      </h2>

      <p className="bg-slate-50 dark:bg-slate-900 text-justify light:border-none 
        dark:border dark:border-slate-700 shadow-inset m-4 p-4 rounded-lg">
        Intercepting routes allows you to load a route from another part of your application within 
        the current layout. This routing paradigm can be useful when you want to display the content 
        of a route without the user switching to a different context.
      </p>

      {/*bg green splash*/}
      <div className="relative w-full h-auto">
        <span className="absolute top-28 left-64 dark:shadow-darkgulp rounded-full"></span>
      </div>


      <ul className="mx-10 mt-12 mb-14">
        <li className="list-disc text-purplecolor dark:text-bluecolor ml-4">
          <Link href="/images/city">Explore City</Link>
        </li>
        <p className="text-sm text-slate-500/80 dark:text-slate-400 mt-1">Some images on city</p>
        
        <hr className="w-3/5 border-t border-purple-300 dark:border-slate-600 my-4" />

        <li className="list-disc text-purplecolor dark:text-bluecolor ml-4">
          <Link href="/images/holliday">Explore Holliday</Link>
        </li>
        <p className="text-sm text-slate-500/80 dark:text-slate-400 mt-1">Some images on holliday</p>
        
        <hr className="w-3/5 border-t border-purple-300 dark:border-slate-600 my-4" />

      </ul>

      <h2 className="text-slate-50 font-bold bg-blue-500 dark:bg-slate-800
        border border-slate-400 dark:border-slate-700 ml-4 mr-4 mt-10 mb-6 p-4 rounded-lg">
        Convention
      </h2>

      <div className="dark:text-slate-300 bg-slate-50 dark:bg-slate-900 text-justify light:border-none 
        dark:border dark:border-slate-700 shadow-inset m-4 p-4 rounded-lg">

          <p className="text-orange-600 dark:text-teal-500 mb-1">
            (.) to match segments on the same level
          </p>
          <p className="text-orange-600 dark:text-teal-500 mb-1">
            (..) to match segments one level above
          </p>
          <p className="text-orange-600 dark:text-teal-500 mb-1">
            (..)(..) to match segments two levels above
          </p>
          <p className="text-orange-600 dark:text-teal-500 mb-1">
            (...) to match segments from the root app directory
          </p>

      </div>

      <hr className="border-t border-purple-300 dark:border-slate-600 mx-40 my-10" />

      <h2 className="text-slate-50 font-bold bg-blue-500 dark:bg-slate-800
        border border-slate-400 dark:border-slate-700 ml-4 mr-4 mt-10 mb-6 p-4 rounded-lg">
        Modal
      </h2>

      <div className="bg-slate-50 dark:bg-slate-900 text-justify light:border-none 
        dark:border dark:border-slate-700 shadow-inset m-4 p-4 rounded-lg">

        <p className="text-justify mb-1">
          Intercepting Routes can be used together with Parallel Routes to create modals. This allows you 
          to solve common challenges when building modals, such as:
        </p>

        <ul className="m-4">
          <li className="list-disc mx-10">
            Making the modal content shareable through a URL.
          </li>
          <li className="list-disc mx-10">
            Preserving context when the page is refreshed, instead of closing the modal.
          </li>
          <li className="list-disc mx-10">
            Closing the modal on backwards navigation rather than going to the previous route.
          </li>
          <li className="list-disc mx-10">
            Reopening the modal on forwards navigation.
          </li>
        </ul>

        <p className="text-justify mb-1">
          Consider the following UI pattern, where a user can open a photo modal from a gallery using 
          client-side navigation, or navigate to the photo page directly from a shareable URL:
        </p>

      </div>

      <div className="bg-slate-50 dark:bg-slate-700/70 shadow-inset mx-4 my-10 p-10 rounded-lg">
        <Image src={interceptImg} width={1274} height={773} alt="intercepting" 
          className="object-fit shadow-blackbg m-auto rounded-lg" />
      </div>

      <div className="bg-slate-50 dark:bg-slate-900 text-justify light:border-none 
        dark:border dark:border-slate-700 shadow-inset m-4 p-4 rounded-lg">
        <p>
          In the above example, the path to the photo segment can use the (..) matcher since @modal is a 
          slot and not a segment. This means that the photo route is only one segment level higher, despite 
          being two file-system levels higher.
        </p>

        <p className="mt-4">
          See the <Link href="https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#modals"
          className="text-purplecolor dark:text-bluecolor" target="_blank" rel="noreferrer noopener">
          Parallel Routes</Link> documentation for a step-by-step example, or see our image gallery example.
        </p>
      </div>

    </main>
  );
}