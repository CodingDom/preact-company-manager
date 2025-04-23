import { h } from "preact";

import { Button, ButtonTypes } from "../atoms/Button/Button";

const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>

    <Button type={ButtonTypes.Primary} label="Hello world" />
  </div>
);

export default Dashboard;
