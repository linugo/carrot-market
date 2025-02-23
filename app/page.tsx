export default function Home() {
  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-lg p-5 w-full rounded-3xl max-w-screen-sm flex flex-col gap-2">
        <input 
          className="w-full rounded-full h-10 bg-gray-200 pl-5 outline-none ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow"
          type="text" 
          placeholder="Search here..."/>
        <button className="bg-black text-white py-2 rounded-full transition-transform font-medium active:scale-90 outline-none">Search</button>
      </div>
    </main>
  );
}
