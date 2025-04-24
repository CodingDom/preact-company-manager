import { h } from "preact";

import { Card } from "../../molecules/Card";
import { Row } from "../../atoms/Row";

import "./Dashboard.scss";
import { Gauge, GaugeCornerRadius } from "../../molecules/Gauge";
import {
  SegmentedBar,
  SegmentedBarCornerRadius,
} from "../../atoms/SegmentedBar";

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
            <SegmentedBar
              fills={employeeStats.categories.map(({ percentage }, index) => ({
                value: percentage,
                color: getCategoryColor(index),
              }))}
              cornerRadius={SegmentedBarCornerRadius.Curved}
            />
          </Card>
        </div>

        <div className={"col col-12 col-md-6"}>
          <Card
            className="h-100"
            heading="Job Applicants"
            cta={{ href: "/dashboard", label: "View More" }}
          >
            <p>{props.applicantCount}</p>
            <Gauge
              fills={[
                { color: "var(--color-success)", value: 50 },
                { color: "var(--color-warning)", value: 25 },
                { color: "var(--color-danger)", value: 25 },
              ]}
              min={0}
              max={100}
              cornerRadius={GaugeCornerRadius.Curved}
            />
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
  const categories = stats.categories.map(({ name, count }) => ({
    name,
    count,
    percentage: (count / totalEmployees) * 100,
  }));

  return {
    totalEmployees,
    categories,
  };
};

const getCategoryColor = (index: number) => {
  const categoryColors = [
    "var(--color-primary)",
    "var(--color-success)",
    "var(--color-warning)",
    "var(--color-danger)",
  ];

  return categoryColors[index % (categoryColors.length - 1)];
};

export default Dashboard;
