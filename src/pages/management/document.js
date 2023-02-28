import Layout from "@/components/layout";

function Document() {
  return (
      <div>
        <h1>Document page</h1>
      </div>
  );
}

Document.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Document;
