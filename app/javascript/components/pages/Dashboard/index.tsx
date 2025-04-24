import { Card } from "../../molecules/Card";
import { Row } from "../../atoms/Row";

import "./Dashboard.scss";
import { SegmentedStatusBar } from "../../molecules/SegmentedStatusBar";
import { SegmentedBarCornerRadius } from "../../atoms/SegmentedBar";
import { SegmentedStatusGauge } from "../../molecules/SegmentedStatusGauge";
import { SegmentedGaugeCornerRadius } from "../../atoms/SegmentedGauge";

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
            <SegmentedStatusBar
              items={employeeStats.categories.map(
                ({ percentage, name }, index) => ({
                  value: percentage,
                  color: getCategoryColor(index),
                  label: `${name} (${Math.round(percentage * 10) / 10}%)`,
                })
              )}
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
            <SegmentedStatusGauge
              items={[
                {
                  color: "var(--color-success)",
                  value: 50,
                  label: "Applications reviewed",
                },
                {
                  color: "var(--color-warning)",
                  value: 25,
                  label: "Applications on-list",
                },
                {
                  color: "var(--color-danger)",
                  value: 25,
                  label: "Applications rejected",
                },
              ]}
              cornerRadius={SegmentedGaugeCornerRadius.Curved}
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
