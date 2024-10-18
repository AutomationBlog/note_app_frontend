import { useState } from "react";
import TagInput from "../../components/Input/TagInput";
import { MdClose } from "react-icons/md";
import PropTypes from "prop-types";

const AddEditNote = ({ noteData, type, onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);

  const [error, setError] = useState(null);

  const addNewNote = () => {};

  const editNote = () => {};

  const handleAddNote = async (e) => {
    e.preventDefault();

    if (!title) {
      setError("Please enter the title");
      return;
    }

    if (!content) {
      setError("Please enter the content");
      return;
    }

    setError(null);
    if (type === "add") {
      addNewNote();
    } else {
      editNote();
    }
  };

  return (
    <div className="relative">
      <button
        className="w-10 h-10 flex items-center justify-center rounded-full absolute -top-3 -right-3 bg-slate-50"
        onClick={onClose}
      >
        <MdClose className="text-xl text-slate-400" />
      </button>
      <div className="flex flex-col gap-2">
        <label className="input-label">TITLE</label>
        <input
          type="text"
          className="text-2xl text-slate-950 outline-none"
          placeholder="Title"
          onChange={({ target }) => {
            setTitle(target.value);
          }}
          value={title}
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label">CONTENT</label>
        <textarea
          type="text"
          className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded"
          placeholder="Content"
          rows={10}
          onChange={({ target }) => setContent(target.value)}
          value={content}
        />
      </div>
      <div>
        <label className="input-label">TAGS</label>
        <TagInput tags={tags} setTags={setTags} />
      </div>
      {error && <p className="text-red-500 text-sm pt-4">{error}</p>}
      <button
        className="btn-primary font-medium mt-5 p-3"
        onClick={handleAddNote}
      >
        ADD
      </button>
    </div>
  );
};

export default AddEditNote;

AddEditNote.propTypes = {
  onClose: PropTypes.func,
  type: PropTypes.string,
  noteDate: PropTypes.string,
};
