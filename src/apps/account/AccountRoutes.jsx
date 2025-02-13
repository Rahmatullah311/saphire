import { Routes, Route } from "react-router";
import Account from "./Account";
const AccountRoutes = () => {
  return (
    <Routes>
      <Route path="/account/" element={<Account />} />
    </Routes>
  );
};

export default AccountRoutes;
