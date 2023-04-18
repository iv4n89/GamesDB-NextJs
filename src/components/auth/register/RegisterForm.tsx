import { Role, User } from "@/interfaces";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { createUser } from "@/api/user.api";

const schema = yup.object({
  name: yup.string().required(),
  lastName: yup.string().optional(),
  email: yup.string().email().required(),
  birthDate: yup.date().optional(),
  username: yup.string().required(),
  password: yup.string().required(),
  role: yup.number().optional(),
});

interface Props {
  roles: Role[];
}

export const RegisterForm = ({ roles }: Props) => {
  const {
    handleSubmit,
    register,
    control,
    watch,
    formState: { errors, isSubmitted, isSubmitting, isSubmitSuccessful },
  } = useForm<User>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: User) => await createUser({ ...data, role });

  const [role, setRole] = useState(undefined);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <label htmlFor="name"> Name </label>
          <Controller
            control={control}
            name="name"
            render={({ field }) => <input {...field} type="text" />}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="lastName"> Last Name </label>
          <Controller
            control={control}
            name="lastName"
            render={({ field }) => <input {...field} type="text" />}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="username"> Username </label>
          <Controller
            control={control}
            name="username"
            render={({ field }) => <input {...field} type="text" />}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="email"> Email </label>
          <Controller
            control={control}
            name="email"
            render={({ field }) => <input {...field} type="email" />}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password"> Password </label>
          <Controller
            control={control}
            name="password"
            render={({ field }) => <input {...field} type="password" />}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="role"> Role </label>
          <Controller
            control={control}
            name="role"
            render={({ field }) => (
              <Select {...field} name='role' onChange={ (e: SelectChangeEvent<{ id: number; name: string; }>) => { setRole(e.target.value as any); } }>
                <MenuItem value='0' selected> Select a role </MenuItem>
                {roles.map((role) => (
                  <MenuItem key={role.id} value={ role.id } > {role.name} </MenuItem>
                ))}
              </Select>
            )}
          />
        </div>
        <div className="mb-2">
          <Button type="submit" color="success">
            Send
          </Button>
        </div>
      </form>
    </>
  );
};
