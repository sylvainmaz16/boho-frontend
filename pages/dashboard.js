import MainLayout from "../components/layout/MainLayout";

const Dashboard = () => {
  return null;
  
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
