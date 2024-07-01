// components/Footer.tsx
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        bgcolor: "background.paper",
        p: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © 2024 Meu Site. Todos os direitos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
