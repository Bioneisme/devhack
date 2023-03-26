import React from "react";

import { CreateApplicationModule } from "../modules/CreateApplicationModule/index.js";
import { ServicesModule } from "../modules/ServicesModule/index.js";

const GetServicesPage = () => {
  return (
    <main>
      <CreateApplicationModule />
      <ServicesModule />
    </main>
  );
};

export default GetServicesPage;
