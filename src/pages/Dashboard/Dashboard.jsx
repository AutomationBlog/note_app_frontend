import { MdAdd } from "react-icons/md";
import NoteCard from "../../components/Cards/NoteCard";
import NavBar from "../../components/Navbar/NavBar";
import AddEditNote from "../Home/AddEditNote";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../utils/axiosInstance";

const Dashboard = () => {
  const [openAddEditModel, setOpenAddEditModel] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  const [userinfo, setUserinfo] = useState({});

  const navigate = useNavigate();

  const getUserinfo = async () => {
    try {
      const response = await axiosInstance.get("/api/auth/getuser");
      if (response.data) {
        setUserinfo(response.data.user);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // localStorage.clear();
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    getUserinfo();
  }, []);

  return (
    <>
      <NavBar userinfo={userinfo} />
      <div className="container mx-auto">
        <div className="grid gap-4 mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <NoteCard
            title={"Note App"}
            date={"10/10/2022"}
            content={"Content"}
            tags={"Tag"}
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
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
          noteDate={openAddEditModel.data}
          onClose={() =>
            setOpenAddEditModel({ ...openAddEditModel, isShown: false })
          }
        />
      </Modal>
    </>
  );
};

export default Dashboard;
