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
import Radio from "@/components/common/input/radio";

const defaultValues = {
  username: "",
  age: "",
  search: "",
  password: "",
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
        className="w-8/12 flex flex-col gap-y-3 items-end"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          label="Username"
          name="username"
          placeholder="username"
          {...register("username")}
        />

        <Number
          label="Age"
          name="age"
          placeholder="your age"
          {...register("age")}
        />

        <Search
          label="Search"
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
          placeholder="password"
          name="password"
          {...register("password")}
        />

        <input
          className="bg-blue-600 rounded-lg text-white px-8 py-2"
          type="submit"
          value="Save"
        />
      </form>

      <div className="w-8/12 flex flex-col gap-y-3 items-end">
        <Radio name="gender" options={gender} vertical />
      </div>
    </div>
  );
}

Building.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Building;
