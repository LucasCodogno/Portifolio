// import * as React from "react";
// import Box from "@mui/material/Box";
// import { Typography } from "@mui/material";
// import Image from "next/image";
// import typeScript from "../../../../public/image/pngwing.png";
// import next from "../../../../public/image/next.png";
// import node from "../../../../public/image/node.png";
// import html from "../../../../public/image/html.png";
// import mongo from "../../../../public/image/mongo.png";
// import react from "../../../../public/image/react.png";
// import javascript from "../../../../public/image/javascript.png";
// import tailwind from "../../../../public/image/tailwind.png";
// import firebase from "../../../../public/image/firebase.png";
// import ui from "../../../../public/image/ui.png";
// import ant from "../../../../public/image/antdesign.png";
// import cssImage from "../../../../public/image/css.png";
// import sql from "../../../../public/image/sql.png";
// import docker from "../../../../public/image/docker.png";
// import redux from "../../../../public/image/redux.png";

// export default function ButtonTecnologic() {
//   const [value, setValue] = React.useState(0);

//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       setValue((prevValue) => (prevValue + 1) % 15);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   const technologies = [
//     { label: "Next.js", icon: next },
//     { label: "React.js", icon: react },
//     { label: "Node.js", icon: node },
//     { label: "Javascript", icon: javascript },
//     { label: "Typescript", icon: typeScript },
//     { label: "Redux", icon: redux },
//     { label: "Html", icon: html },
//     { label: "Css", icon: cssImage },
//     { label: "Tailwind", icon: tailwind },
//     { label: "Ant Design", icon: ant },
//     { label: "Mui", icon: ui },
//     { label: "Firebase", icon: firebase },
//     { label: "Mongo", icon: mongo },
//     { label: "Sql", icon: sql },
//     { label: "Docker", icon: docker },
//   ];

//   return (
//     <>
//       <Typography variant="h6" sx={{ textAlign: "center", mb: 2 }}>
//         Tecnologias
//       </Typography>
//       <Box
//         sx={{
//           width: "100%",
//           display: "flex",
//           justifyContent: "center",
//           flexWrap: "wrap",
//           gap: 2,
//         }}
//       >
//         {technologies.map((tech, index) => (
//           <Box
//             key={index}
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               transition: "transform 0.3s ease-in-out",
//               transform: value === index ? "scale(1.2)" : "scale(1)",
//               boxSizing: "border-box",
//               width: { xs: "50%", sm: "33.33%", md: "20%" }, // Ajuste de largura para responsividade
//               padding: "8px"
//             }}
//           >
//             <Box
//               sx={{
//                 backgroundColor: tech.label === "Next.js" ? "white" : "transparent",
//                 borderRadius: tech.label === "Next.js" ? "19px" : "0",
//                 padding: tech.label === "Next.js" ? "10px" : "0",
//               }}
//             >
//               <Image src={tech.icon} alt={tech.label} width={40} height={40} />
//             </Box>
//             <Typography variant="caption" sx={{ fontSize: "0.75rem", marginTop: "5px" }}>
//               {tech.label}
//             </Typography>
//           </Box>
//         ))}
//       </Box>
//     </>
//   );
// }
import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Image from "next/image";
import typeScript from "../../../../public/image/pngwing.png";
import next from "../../../../public/image/next.png";
import node from "../../../../public/image/node.png";
import html from "../../../../public/image/html.png";
import mongo from "../../../../public/image/mongo.png";
import react from "../../../../public/image/react.png";
import javascript from "../../../../public/image/javascript.png";
import tailwind from "../../../../public/image/tailwind.png";
import firebase from "../../../../public/image/firebase.png";
import ui from "../../../../public/image/ui.png";
import ant from "../../../../public/image/antdesign.png";
import cssImage from "../../../../public/image/css.png";
import sql from "../../../../public/image/sql.png";
import docker from "../../../../public/image/docker.png";
import redux from "../../../../public/image/redux.png";

export default function ButtonTecnologic() {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => (prevValue + 1) % 15);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const technologies = [
    { label: "Next.js", icon: next },
    { label: "React.js", icon: react },
    { label: "Node.js", icon: node },
    { label: "Javascript", icon: javascript },
    { label: "Typescript", icon: typeScript },
    { label: "Redux", icon: redux },
    { label: "Html", icon: html },
    { label: "Css", icon: cssImage },
    { label: "Tailwind", icon: tailwind },
    { label: "Ant Design", icon: ant },
    { label: "Mui", icon: ui },
    { label: "Firebase", icon: firebase },
    { label: "Mongo", icon: mongo },
    { label: "Sql", icon: sql },
    { label: "Docker", icon: docker },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ textAlign: "center", mb: 2 }}>
        Tecnologias
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {technologies.map((tech, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition: "transform 0.3s ease-in-out",
              transform: value === index ? "scale(1.2)" : "scale(1)",
              boxSizing: "border-box",
              width: { xs: "50%", sm: "33.33%", md: "20%" }, // Ajuste de largura para responsividade
              padding: "8px"
            }}
          >
            <Box
              sx={{
                backgroundColor: tech.label === "Next.js" ? "white" : "transparent",
                borderRadius: tech.label === "Next.js" ? "19px" : "0",
                padding: tech.label === "Next.js" ? "10px" : "0",
              }}
            >
              <Image src={tech.icon} alt={tech.label} width={40} height={40} />
            </Box>
            <Typography variant="caption" sx={{ fontSize: "0.75rem", marginTop: "5px" }}>
              {tech.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
}
