import { MdAdd } from "react-icons/md";
import NoteCard from "../../components/Cards/NoteCard";
import NavBar from "../../components/Navbar/NavBar";
import AddEditNote from "../AddEditNote/AddEditNote.jsx";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../utils/axiosInstance";
import Toast from "../../components/ToastMessage/Toast.jsx";
import EmptyCard from "../../components/EmptyCard/EmptyCard.jsx";
import AddNotesImg from "../../assets/AddNotesImg.png";
import NoDataImg from "../../assets/noData.png";

export default function Dashboard() {
  const [openAddEditModel, setOpenAddEditModel] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  const [showToastMsg, setShowToastMsg] = useState({
    isShown: false,
    message: "",
    type: "add",
  });

  const [AllNotes, setAllNotes] = useState([]);

  const [userinfo, setUserinfo] = useState({});

  const [isSearch, seIsSearch] = useState(false);

  const navigate = useNavigate();

  const handleEditNote = (noteDetails) => {
    setOpenAddEditModel({
      isShown: true,
      type: "edit",
      data: noteDetails,
    });
  };

  const showToastMessage = (message, type) => {
    setShowToastMsg({
      isShown: true,
      message: message,
      type,
    });
  };

  const handleCloseToast = () => {
    setShowToastMsg({
      isShown: false,
      message: "",
    });
  };

  const handleDeleteNote = async (noteId) => {
    try {
      const response = await axiosInstance.delete(
        "/api/note/delete-note/" + noteId
      );
      if (response.data.success) {
        showToastMessage("Note deleted successfully", "delete");
        getAllNotes();
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        console.log(error.response.data.message);
      }
    }
  };

  const onSearchNote = (query) => {
    try {
      const response = axiosInstance.post("/api/note/search-notes", {
        params: { query },
      });
      if (response.data.success) {
        seIsSearch(true);
        setAllNotes(response.data.notes);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleClearSearch = () => {
    seIsSearch(false);
    setAllNotes([]);
  };

  const getUserinfo = async () => {
    try {
      const response = await axiosInstance.get("/api/auth/getuser");
      if (response.data) {
        setUserinfo(response.data.user);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        localStorage.clear();
        navigate("/login");
      }
    }
  };

  const updatedIsPinned = async (noteId) => {
    try {
      const response = await axiosInstance.put("/api/note/pin-note/" + noteId);
      if (response.data.success) {
        showToastMessage("Note updated successfully", "success");
        getAllNotes();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const getAllNotes = async () => {
    try {
      const response = await axiosInstance.get("/api/note/get-notes");
      if (response.data) {
        setAllNotes(response.data.notes);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUserinfo();
    getAllNotes();
  }, []);

  return (
    <>
      <NavBar
        userinfo={userinfo}
        onSearchNote={onSearchNote}
        handleClearSearch={handleClearSearch}
      />
      <div className="container mx-auto">
        {AllNotes.length > 0 ? (
          <div className="grid gap-4 mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {AllNotes.map((note) => (
              <NoteCard
                key={note._id}
                title={note.title}
                date={note.createdOn}
                content={note.content}
                tags={note.tags}
                isPinned={note.isPinned}
                onEdit={() => handleEditNote(note)}
                onDelete={() => handleDeleteNote(note._id)}
                onPinNote={() => {
                  updatedIsPinned(note._id);
                }}
              />
            ))}
          </div>
        ) : (
          <EmptyCard
            imgSrc={isSearch ? NoDataImg : AddNotesImg}
            message={isSearch ? "No notes found" : "Add your first note"}
          />
        )}
      </div>
      <button
        className="w-16 h-16 flex items-center justify-center absolute bottom-10 right-10 rounded-2xl bg-primary hover:bg-blue-600 "
        onClick={() => {
          setOpenAddEditModel({ isShown: true, type: "add", data: null });
        }}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>
      <Modal
        isOpen={openAddEditModel.isShown}
        ariaHideApp={false}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          },
        }}
        contentLabel="Add Note"
        className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-auto"
      >
        <AddEditNote
          type={openAddEditModel.type}
          noteData={openAddEditModel.data}
          onClose={() =>
            setOpenAddEditModel({ isShown: false, type: "add", data: null })
          }
          getAllNotes={getAllNotes}
          showToastMessage={showToastMessage}
        />
      </Modal>
      <Toast
        isShown={showToastMsg.isShown}
        message={showToastMsg.message}
        type={showToastMsg.type}
        onClose={handleCloseToast}
      />
    </>
  );
}
