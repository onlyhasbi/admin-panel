import Layout from "@/components/layout";

function Tenant() {
  return (
      <div>
        <h1>Tenant page</h1>
      </div>
  );
}

Tenant.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Tenant;
