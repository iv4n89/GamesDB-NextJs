import { Role, User } from "@/interfaces";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { createUser } from "@/api/user.api";
import styles from "./RegusterForm.module.css";
import { styled } from "@mui/styles";

const schema = yup.object({
  name: yup.string().required(),
  lastName: yup.string().optional(),
  email: yup.string().email().required(),
  birthDate: yup.date().optional(),
  username: yup.string().required(),
  password: yup.string().required(),
  role: yup.number().optional(),
});

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'orange',
  },
  '& label': {
    color: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'orangered',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'orange',
    },
  },
  '& input': {
    color: 'orange'
  },
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
    <div className="flex justify-center flex-col w-1/2">
      <Typography color="orange" className="mb-5 text-4xl text-center"> Registration form </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth className="mb-2">
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <CssTextField
                label="Name"
                {...field}
                type="text"
              />
            )}
          />
        </FormControl>
        <FormControl fullWidth className="mb-2 ">
          <Controller
            control={control}
            name="lastName"
            render={({ field }) => (
              <CssTextField label="Last name" 
              {...field} type="text" />
            )}
          />
        </FormControl>
        <FormControl fullWidth className="mb-2 ">
          <Controller
            control={control}
            name="username"
            render={({ field }) => (
              <CssTextField label="Username" 
              {...field} type="text" />
            )}
          />
        </FormControl>
        <FormControl fullWidth className="mb-2 ">
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <CssTextField label="Email"
              {...field} type="email" />
            )}
          />
        </FormControl>
        <FormControl fullWidth className="mb-2 ">
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <CssTextField label="Password" 
              {...field} type="password" />
            )}
          />
        </FormControl>
        <FormControl fullWidth className="mb-2 ">
          <InputLabel id="role-select" className="text-white">
            Role
          </InputLabel>
          <Controller
            control={control}
            name="role"
            render={({ field }) => (
              <Select
                {...field}
                name="role"
                style={{
                  color: "white",
                  borderRadius: "10px",
                }}
                label="Role"
                labelId="role-select"
                onChange={(
                  e: SelectChangeEvent<{ id: number; name: string }>
                ) => {
                  setRole(e.target.value as any);
                }}
              >
                <MenuItem value="0" selected>
                  {" "}
                  Select a role{" "}
                </MenuItem>
                {roles.map((role) => (
                  <MenuItem key={role.id} value={role.id}>
                    {" "}
                    {role.name}{" "}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>
        <div className="mb-2">
          <Button type="submit" color="success" variant="contained">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};
