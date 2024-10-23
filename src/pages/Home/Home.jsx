import NavBar from "../../components/Navbar/NavBar";
import Journal from "../../assets/journal.jpg";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center mt-28">
        <div className="flex flex-col items-center">
          <img
            src={Journal}
            alt="logo"
            className="w-500 h-500 w-[500px] px-7 py-10"
          />
          <p className="text-4xl font-medium text-slate-950 text-center">
            Write your thoughts, ideas, remainder and task.
          </p>
          <a
            className="text-2xl font-medium text-center mt-2 text-blue-600 hover:underline cursor-pointer"
            href="/signup"
          >
            Get Started
          </a>
        </div>
      </div>
    </>
  );
}
