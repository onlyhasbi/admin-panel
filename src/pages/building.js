import Button from "@/components/common/button";
import Input from "@/components/common/input";
import Number from "@/components/common/input/number";
import Password from "@/components/common/input/password";
import Search from "@/components/common/input/search";
import Modal from "@/components/common/modal";
import Table from "@/components/common/table";
import Layout from "@/components/layout";
import { useReducer, useState } from "react";
import { RiAddLine } from "react-icons/ri";

function Building() {
  const [open, toggle] = useReducer((open) => !open, false);
  const [search, setSearch] = useState("");

  const handleDelete = () => {
    console.log("data telah dihapus");
    toggle();
  };

  return (
    <div className="mb-14">
      <div className="flex flex-col gap-y-3 justify-between items-center">
        <Search
          label="Search"
          name="search"
          placeholder="search"
          search={search}
          setSearch={setSearch}
        />
        <Input label="Username" placeholder="username" name="username" />
        <Password label="Password" placeholder="password" name="password" />
        <Number label="Age" name="age" placeholder="your age" />

        <Button className="text-white p-5" onClick={toggle} primary>
          <RiAddLine />
        </Button>
      </div>
      {/* <Table /> */}
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
