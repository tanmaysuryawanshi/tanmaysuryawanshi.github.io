  import Image from "next/image";

  export default function Home() {
    return (
      <section className="flex min-h-screen flex-col items-center justify-between p-24">
      
          <div className=" top-0 left-0 flex flex-col h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-transparent dark:via-transparent lg:static lg:size-auto lg:bg-none">
          <h1 className="mb-8 text-2xl font-medium tracking-tighter">hey, I&apos;m tanmay 👋</h1>
        <p className="prose prose-neutral dark:prose-invert">
          I am a Software Engineer who love Android and Devops
        </p>
        
        </div>

        <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
          <div
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          
      
          />
        </div>

        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
          <a
            href="https://play.google.com/store/apps/details?id=com.messmenu.messmenu"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Apps{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Here is my app 1500+ downloads on playstore.
            </p>
          </a>

          <a
            href="https://medium.com/@dev.tanmaysuryawanshi"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Medium{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              All the medium articles published by me!
            </p>
          </a>

          <a
            href="https://github.com/tanmaysuryawanshi"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Github{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Explore github profile 
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/tanmay-suryawanshi/"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Linkedin{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
              Visit Linkedin profile.
            </p>
          </a>
        </div>
      

        <div className="bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-transparent dark:via-transparent lg:static lg:size-auto lg:bg-none">
          <h1 className="text-xl font-semibold leading-6 tracking-tighter">
  Made with ❤️
          </h1>
        
        </div>
      </section>
    );
  }
