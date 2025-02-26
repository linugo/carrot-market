export default function Home() {
  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center p-5 
                    sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100">
      <div className="bg-white shadow-lg p-5 w-full rounded-3xl max-w-screen-sm 
                      flex flex-col gap-2 md:flex-row">
        <input 
          className="w-full rounded-full h-10 bg-gray-200 pl-5 outline-none 
                    ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 
                    transition-shadow placeholder:drop-shadow invalid:focus:ring-blue-500 peer"
          type="email" required
          placeholder="Search here..."/>
        <button className="text-white py-2 rounded-full transition-transform 
                          font-medium active:scale-90 outline-none md:px-10 bg-black peer-invalid:bg-purple-300">
          Search
        </button>
      </div>
    </main>
  );
}
