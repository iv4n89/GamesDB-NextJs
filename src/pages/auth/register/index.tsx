import { getAllRoles } from "@/api/role.api";
import { RegisterForm } from "@/components/auth/register/RegisterForm";
import { Base } from "@/components/base/Base";
import { Role } from "@/interfaces";
import React from "react";

function RegisterIndex({ roles }: { roles: Role[] }) {
  return (
    <Base>
      <RegisterForm roles={roles} />
    </Base>
  );
}

export async function getServerSideProps() {
  const roles = await (await getAllRoles()).data;
  console.log(roles);

  return { props: { roles } };
}

export default RegisterIndex;
