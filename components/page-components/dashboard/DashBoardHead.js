import ProgressBar from "@/page-components/dashboard/ProgressBar";

import Link from "next/link";

export const DashBoardHead = ({ name, children }) => {
  return (
    <div className="wrapper-90">
      <div className="dashboard__head">
        <h2>Welcome, {name}</h2>
        <ProgressBar />
      </div>
      <div className="dashboard__content">
        <div className="dashboard__content__head">
          <h2>Upcoming Events</h2>
          <Link href="/upcoming-events">
            <a>View All</a>
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
};

export default DashBoardHead;
