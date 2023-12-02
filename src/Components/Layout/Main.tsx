import Explore from "./Explore";
import Offers from "./Offers";

function Main() {
  return (
      <main className="bg-gray-400 ">
        <div className="container mx-auto">
        <Offers />
        <Explore />
        </div>
      </main>
  );
}

export default Main;