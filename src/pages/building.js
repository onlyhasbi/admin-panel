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
import { useForm } from "react-hook-form";
import Radio from "@/components/common/radio";
import Select from "@/components/common/select/select";
import TextArea from "@/components/common/textarea";

const defaultValues = {
  username: "",
  age: "",
  search: "",
  password: "",
  gender: "female",
  merk: 4,
};

const gender = [
  {
    label: "Female",
    value: "female",
  },
  {
    label: "Male",
    value: "male",
  },
];

const phoneOptions = [
  {
    label: "Nokia",
    value: 1,
  },
  {
    label: "Sony",
    value: 2,
  },
  {
    label: "Samsung",
    value: 3,
  },
  {
    label: "Xiaomi",
    value: 4,
  },
  {
    label: "Motorola",
    value: 5,
  },
];

function Building() {
  const [open, toggle] = useReducer((open) => !open, false);
  const [search, setSearch] = useState("");
  const { register, handleSubmit, setValue, watch, setFocus } = useForm({
    defaultValues,
  });

  const handleDelete = () => {
    console.log("data telah dihapus");
    toggle();
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-start gap-x-8 mb-14">
      <form
        className="w-[20rem] flex flex-col  gap-y-3 items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          label="Username"
          labelStyle="w-full"
          name="username"
          placeholder="username"
          {...register("username")}
        />

        <Number
          label="Age"
          labelStyle="w-full"
          name="age"
          placeholder="your age"
          {...register("age")}
        />

        <Search
          label="Search"
          labelStyle="w-full"
          name="search"
          placeholder="search"
          onSearch={watch("search")}
          onClear={() => {
            setValue("search", "");
            setFocus("search", { shouldSelect: true });
          }}
          {...register("search")}
        />

        <Password
          label="Password"
          labelStyle="w-full"
          placeholder="password"
          name="password"
          {...register("password")}
        />

        <div className="w-full">
          <input
            className="bg-blue-600 rounded-lg text-white px-8 py-2 ml-auto"
            type="submit"
            value="Save"
          />
        </div>
      </form>

      <form className="w-[20rem] flex flex-col gap-y-3 items-center">
        <Radio
          name="gender"
          label="Jenis Kelamin"
          labelStyle="w-full"
          options={gender}
          {...register("gender")}
        />
        <Select
          name="merk"
          label="Merk"
          options={phoneOptions}
          labelStyle="w-full mt-3"
          {...register("merk")}
        />

        <TextArea
          label="Home Address"
          labelStyle="w-full mt-2"
          name="address"
          placeholder="Home address"
          row={3}
        />
      </form>

      <Button className="text-white p-5" onClick={toggle} primary>
        <RiAddLine />
      </Button>
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
