# Environment Variables Setup

## Overview

This project uses environment variables for configuration. All environment variables must be prefixed with `REACT_APP_` to be accessible in the React application.

## File Structure

- `.env.local` - Local environment variables (not committed to git)
- `src/config/env.config.ts` - Configuration file that reads environment variables

## How to Use

### 1. Create Environment Files

Create the following files in your project root:

#### `.env.local` (Recommended for local development)

```bash
# API Configuration
REACT_APP_API_URL=http://localhost:3001/api
REACT_APP_API_KEY=your_api_key_here

# Authentication
REACT_APP_JWT_SECRET=your_jwt_secret_here
REACT_APP_AUTH_DOMAIN=localhost

# Feature Flags
REACT_APP_DEBUG_MODE=true
REACT_APP_ENABLE_LOGGING=true
```

#### `.env.development` (Development environment)

```bash
REACT_APP_API_URL=http://dev-api.example.com
REACT_APP_DEBUG_MODE=true
```

#### `.env.production` (Production environment)

```bash
REACT_APP_API_URL=https://api.example.com
REACT_APP_DEBUG_MODE=false
```

### 2. Using Environment Variables in Code

```typescript
import config from "./config/env.config";

// Access environment variables
const apiUrl = config.API_URL;
const isDebug = config.DEBUG_MODE;

// Conditional logic based on environment
if (config.IS_DEVELOPMENT) {
  console.log("Development mode enabled");
}
```

### 3. Available Configuration Options

| Variable                   | Type    | Default                     | Description                          |
| -------------------------- | ------- | --------------------------- | ------------------------------------ |
| `REACT_APP_API_URL`        | string  | `http://localhost:3001/api` | API base URL                         |
| `REACT_APP_API_KEY`        | string  | `''`                        | API authentication key               |
| `REACT_APP_JWT_SECRET`     | string  | `'default_jwt_secret'`      | JWT secret key                       |
| `REACT_APP_AUTH_DOMAIN`    | string  | `'localhost'`               | Authentication domain                |
| `REACT_APP_DEBUG_MODE`     | boolean | `false`                     | Enable debug mode                    |
| `REACT_APP_ENABLE_LOGGING` | boolean | `false`                     | Enable logging                       |
| `REACT_APP_LOG_LEVEL`      | string  | `'info'`                    | Log level (debug, info, warn, error) |

### 4. Environment-Specific Files Priority

React loads environment variables in this order (later files override earlier ones):

1. `.env`
2. `.env.local`
3. `.env.development` (when NODE_ENV=development)
4. `.env.production` (when NODE_ENV=production)

### 5. Security Notes

- Never commit `.env.local` to git
- Use `.env.example` to document required variables
- All variables must start with `REACT_APP_`
- Sensitive data should be stored securely

### 6. Restart Required

After changing environment variables, restart your development server:

```bash
npm start
```

## Example Usage in Components

```typescript
import React from "react";
import config from "../config/env.config";

const MyComponent: React.FC = () => {
  const handleApiCall = async () => {
    try {
      const response = await fetch(`${config.API_URL}/users`);
      // ... rest of the code
    } catch (error) {
      if (config.DEBUG_MODE) {
        console.error("API Error:", error);
      }
    }
  };

  return (
    <div>
      {config.IS_DEVELOPMENT && <div>Debug info: {config.API_URL}</div>}
      <button onClick={handleApiCall}>Fetch Users</button>
    </div>
  );
};

export default MyComponent;
```
