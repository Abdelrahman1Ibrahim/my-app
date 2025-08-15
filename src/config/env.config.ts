// Environment Configuration Types
export interface EnvironmentConfig {
  // API Configuration
  API_URL: string;
  API_KEY: string;
  STRAPI_URL: string;
}

// Environment Configuration
const config: EnvironmentConfig = {
  // API Configuration
  API_URL: "http://localhost:3001/api",
  API_KEY: process.env.REACT_APP_API_KEY || "",
  STRAPI_URL: "http://localhost:1337/api"
};

export default config;
