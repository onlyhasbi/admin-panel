import Modal from "@/components/modal";
import Layout from "@/components/layout";
import Button from "@/components/forms/button";
import Table from "@/components/table";
import { useReducer } from "react";

function Building() {
  const [open, toggle] = useReducer((open) => !open, false);

  const handleDelete = () => {
    console.log("data telah dihapus");
    toggle();
  };

  return (
    <div className="mb-14">
      <h1 className="mb-7">Building page</h1>
      <Button className="text-white my-5" onClick={toggle} primary>
        Open
      </Button>
      <Table />
      <Modal title="Add Data" onOpen={open} onClose={toggle} close>
        <p>add data form modal</p>
        <Button
          className="text-white pb-[.35rem] mt-5 ml-auto"
          onClick={handleDelete}
          primary
        >
          Save
        </Button>
      </Modal>
    </div>
  );
}

Building.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Building;
