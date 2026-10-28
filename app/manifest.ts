import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Anujkumar Yadav — Full Stack Software Engineer",
    short_name: "Anujkumar Yadav",
    description: "Full Stack Software Engineer building web and mobile products with React, TypeScript, React Native, and Node.js. Core contributor to OpenMetadata.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B0B0C",
    theme_color: "#0B0B0C",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
