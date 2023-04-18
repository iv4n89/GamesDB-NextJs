import { getAllRoles } from '@/api/role.api'
import { RegisterForm } from '@/components/auth/register/RegisterForm'
import { Role } from '@/interfaces';
import React from 'react'

function RegisterIndex({ roles }: { roles: Role[] }) {
  return (
    <RegisterForm roles={ roles } />
  )
}

export async function getServerSideProps() {
    const roles = await (await getAllRoles()).data;
    console.log(roles);
    
    return { props: { roles } }
}

export default RegisterIndex;