import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Skeleton from "@mui/material/Skeleton";
import Image, { StaticImageData } from "next/image";
import imageYudemy from "../../../../public/image/UC-cd4964ab-cb5d-4059-9de8-92f00174903d.jpg";
import imageYudemy2 from "../../../../public/image/UC-bcf67f33-ae6d-4b29-b71f-9bcf8b64dcaa.jpg";
import imageYudemy3 from "../../../../public/image/TbOoOcpQdNxRawSvSE3K5cbakxBmki8F_gjwN6yKY98=.png";
import imageCoder from "../../../../public/image/SOUHCWvev6HmfC5QztXJd+CkSK8+3WGWg+F_ww_fqXA=.png";
import imageCoder2 from "../../../../public/image/Eg_SbOy66StYJSJgDWYLrHAMVb_28ZfyndLzHYtQPeA=.png";
import faculdadeBookplay from "../../../../public/image/1692881329593.jpeg";
import Link from "next/link";

interface ImageInfo {
  label: string | JSX.Element;
  imgPath: StaticImageData;
  width: number;
  height: number;
}

const images: ImageInfo[] = [
  {
    label: "Faculdade BookPlay - Web Designer.",
    imgPath: faculdadeBookplay,
    width: 500,
    height: 500,
  },
  {
    label: "Udemy – Next.js e React - Curso Completo.",
    imgPath: imageYudemy,
    width: 500,
    height: 500,
  },
  {
    label: "Udemy – NextJS do zero ao avançado na pratica 2024.",
    imgPath: imageYudemy2,
    width: 500,
    height: 500,
  },
  {
    label: (
      <Link href="https://www.cloudskillsboost.google/public_profiles/56a48da5-fc4b-451f-986b-ab2238faa26f/badges/2871660">
        Google Cloud – Baseline: Infrastructure.
      </Link>
    ),
    imgPath: imageCoder2,
    width: 500,
    height: 500,
  },
  {
    label: (
      <Link href="https://www.cloudskillsboost.google/public_profiles/56a48da5-fc4b-451f-986b-ab2238faa26f/badges/2871654">
        Google Cloud – Set Up an App Dev Environment on Google Cloud.
      </Link>
    ),
    imgPath: imageCoder,
    width: 500,
    height: 500,
  },
  {
    label: (
      <Link href="https://www.cloudskillsboost.google/public_profiles/56a48da5-fc4b-451f-986b-ab2238faa26f/badges/2846288">
        Google Cloud – Implement Load Balancing on Compute Engine.
      </Link>
    ),
    imgPath: imageYudemy3,
    width: 500,
    height: 500,
  },
];

interface StyledCardProps {
  active?: boolean;
}

const StyledCard = styled(Card)<StyledCardProps>(({ theme, active }) => ({
  transition: "transform 0.3s ease-in-out",
  transform: active ? "scale(1.1)" : "scale(1)",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.05)",
  },
  display: "flex",
  flexDirection: "column",
  height: "100%",
}));

const CardContentWrapper = styled(CardContent)({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
});

function ImageShow() {
  const [activeStep, setActiveStep] = React.useState<number | null>(null);
  const [loadedImages, setLoadedImages] = React.useState<boolean[]>(Array(images.length).fill(false));

  const handleMouseEnter = (index: number) => {
    setActiveStep(index);
  };

  const handleMouseLeave = () => {
    setActiveStep(null);
  };

  const handleImageLoad = (index: number) => {
    setLoadedImages((prevLoadedImages) => {
      const newLoadedImages = [...prevLoadedImages];
      newLoadedImages[index] = true;
      return newLoadedImages;
    });
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Typography variant="h6" sx={{ textAlign: "center", mb: 2 }}>
        Tecnologias
      </Typography>
      <Grid container spacing={2}>
        {images.map((step, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <StyledCard
              active={activeStep === index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Box sx={{ position: "relative", height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {!loadedImages[index] && <Skeleton variant="rectangular" height={200} width="100%" />}
                <img
                  src={step.imgPath.src}
                  alt={step.label.toString()}
                  width={step.width}
                  height={step.height}
                  style={{ display: loadedImages[index] ? 'block' : 'none', height: '100%', width: '100%' }}
                  onLoad={() => handleImageLoad(index)}
                />
              </Box>
              <CardContentWrapper>
                <Typography gutterBottom variant="h6" component="div">
                  {step.label}
                </Typography>
              </CardContentWrapper>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ImageShow;
