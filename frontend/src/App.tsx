import Header from "./components/layouts/Header";

export default function App() {
  return (
    <>
      <div
        className="grid grid-cols-2 
        grid-rows-[12%_auto_12%] 
        w-screen h-screen bg-black"
      >
        <div className="col-span-full h-full w-full">
          <Header />
        </div>
        <div className="bg-gray-800 row-span">SideBar</div>
        <div className="">Content</div>
        <div className="col-span-full">Footer</div>
      </div>
    </>
  );
}
