import Layout from "@/components/layout";

function Profile() {
  return <h1>Profile</h1>;
}

Profile.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Profile;
