import { sidebarModel } from "@/model/sidebar";
import { useRouter } from "next/router";
import List from "./list.component";

function Sidebar() {
  const { pathname: currentPath } = useRouter();

  return (
    <div className="w-[19rem] px-8 flex flex-col gap-y-4 bg-blue-600">
      <div className="py-8 mt-5 flex justify-center">
        <h3 className="font-bold text-2xl text-white">Logo</h3>
      </div>
      <List items={sidebarModel} currentPath={currentPath} />
    </div>
  );
}

export default Sidebar;
