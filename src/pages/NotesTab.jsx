import SearchBar from "../components/SearchBar";
import { useState } from "react";
import NoteCard from "../components/NoteCard";

const NotesTab = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {};

  const onClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex justify-between">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 my-2">
            Notes
          </h1>
          <SearchBar
            value={searchQuery}
            onChange={({ target }) => {
              setSearchQuery(target.value);
            }}
            onClearSearch={onClearSearch}
            handleSearch={handleSearch}
          />
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-6">
            <NoteCard
              title={"Note Title"}
              date={"10/10/2022"}
              content={"Note Content"}
              tags={["Tag1", "Tag2", "Tag3"]}
              isPinned={true}
              onEdit={() => {}}
              onDelete={() => {}}
              onPinNote={() => {}}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotesTab;
