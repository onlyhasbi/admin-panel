import Button from "@/components/common/button";
import Modal from "@/components/common/modal";
import Table from "@/components/common/table";
import Layout from "@/components/layout";
import { useReducer } from "react";

function Building() {
  const [open, toggle] = useReducer((open) => !open, false);

  const handleDelete = () => {
    console.log("data telah dihapus");
    toggle();
  };

  return (
    <div className="mb-14">
      <div className="flex justify-between items-center">
        
        <Button
          className="text-lg text-white font-bold"
          onClick={toggle}
          primary
        >
          +
        </Button>
      </div>
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
