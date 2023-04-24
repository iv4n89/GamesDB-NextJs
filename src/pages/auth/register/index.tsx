import { getAllRoles } from "@/api/role.api";
import { RegisterForm } from "@/components/auth/register/RegisterForm";
import { Layout } from "@/components/base/Layout";
import { Role } from "@/interfaces";
import React from "react";

function RegisterIndex({ roles }: { roles: Role[] }) {
  return (
    <Layout>
      <RegisterForm roles={roles} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const roles = await (await getAllRoles()).data;

  return { props: { roles } };
}

export default RegisterIndex;
