import Layout from "@/components/layout";

function Audit() {
  return (
    <div>
      <h1>Audit page</h1>
    </div>
  );
}

Audit.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Audit;
