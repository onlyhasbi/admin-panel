import Modal from "@/components/modal";
import Layout from "@/components/layout";
import Button from "@/components/forms/button";
import { useReducer } from "react";

function Building() {
  const [open, toggle] = useReducer((open) => !open, false);

  const handleDelete = () => {
    console.log("data telah dihapus");
    toggle();
  };

  return (
    <div>
      <h1 className="mb-7">Building page</h1>
      <Button className="text-white" onClick={toggle} primary>
        Open
      </Button>
      <Modal title="Delete" onOpen={open} onClose={toggle} close>
        <p>Yakin ingin menghapus data ?</p>
        <Button
          className="text-white pb-[.35rem] mt-5 ml-auto"
          onClick={handleDelete}
          danger
        >
          Delete
        </Button>
      </Modal>
    </div>
  );
}

Building.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Building;
