import NavTab from "../components/NavTab";
import NotesTab from "./NotesTab";

export default function DashboardPage() {
  return (
    <>
      <div className="min-h-full">
        <NavTab />
        <NotesTab />
      </div>
    </>
  );
}
