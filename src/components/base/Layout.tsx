import { Container } from "@mui/material";
import styles from "./Layout.module.css";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <div className={ styles.banner }> Game Collection DB </div>
      <Container maxWidth='md' className={styles.container}>
        {children}
      </Container>
    </>
  );
};
