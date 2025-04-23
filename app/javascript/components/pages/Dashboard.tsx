import { h } from "preact";

import { Button, ButtonTypes } from "../atoms/Button/Button";
import { Anchor } from "../atoms/Anchor/Anchor";
import { Card } from "../atoms/Card/Card";
import { CardRow } from "../atoms/Card-Row/Card-Row";

const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <p>Let's see an overview of your company</p>

    <Card
      children={[
        <CardRow
          children={[
            <h3>Total Employees</h3>,
            <Anchor href="/dashboard" label="View More" />,
          ]}
        />,
        <Button type={ButtonTypes.Primary} label="Hello world" />,
      ]}
    />
  </div>
);

export default Dashboard;
