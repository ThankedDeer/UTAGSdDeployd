/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  output: 'export', // Configuración para la exportación estática
  // Otras configuraciones pueden ir aquí...
};

module.exports = nextConfig;
