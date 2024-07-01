// pages/index.tsx
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../pages/components/Layout/Layout";
import ButtonTecnologic from "./components/IconsTecnoligc/tecnologic";
import ImageShow from "./components/imagesShow/imagesshow";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"; // Importe Grid do Material-UI
import Footer from "./components/Footer/footer";
// Importe o componente Footer

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Box sx={{ flexGrow: 1, padding: 2 }}>
      
   
       {/* xs=12 para tela cheia em dispositivos móveis, md=6 para metade da tela em dispositivos maiores */}
            <ButtonTecnologic />
      
      
      </Box>
      <Footer /> {/* Adicionando o componente Footer aqui */}
    </Layout>
  );
}
