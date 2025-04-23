import { h } from "preact";

import { Anchor } from "../../atoms/Anchor";
import { Card } from "../../molecules/Card";
import { Row } from "../../atoms/Row";

import "./Dashboard.scss";

interface RoleCategoryStats {
  name: string;
  count: number;
}

interface EmployeeStats {
  categories: RoleCategoryStats[];
}

export interface DashboardProps {
  employees: EmployeeStats;
  applicantCount: number;
  balance: number;
}

const Dashboard = (props: DashboardProps) => {
  const employeeStats = getEmployeeStats(props.employees);
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Let's see an overview of your company</p>

      <Row fluid>
        <div className={"col col-12 col-md-6"}>
          <Card
            className="h-100"
            heading="Total Employees"
            cta={{ href: "/dashboard", label: "View More" }}
          >
            <p className="lead-text">
              {employeeStats.totalEmployees} Employees
            </p>
          </Card>
        </div>

        <div className={"col col-12 col-md-6"}>
          <Card
            className="h-100"
            heading="Job Applicants"
            cta={{ href: "/dashboard", label: "View More" }}
          >
            <p>{props.applicantCount}</p>
          </Card>
        </div>
      </Row>

      <h2>Financial Activity</h2>
      <Row fluid>
        <div className={"col col-12 col-md-6"}>
          <Card className="h-100" heading="Your Balance">
            <p>{props.balance}</p>
          </Card>
        </div>
      </Row>
    </div>
  );
};

const getEmployeeStats = (stats: EmployeeStats) => {
  const totalEmployees = stats.categories.reduce(
    (prevCount, category) => prevCount + category.count,
    0
  );

  return {
    totalEmployees,
  };
};

export default Dashboard;
