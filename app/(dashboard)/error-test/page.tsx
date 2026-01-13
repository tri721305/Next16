import React from "react";

const ErrorTestPage = () => {
  // Throw error trong component (sẽ được bắt bởi app/error.tsx)
  throw new Error(
    "Page component error - This will be caught by app/error.tsx"
  );

  return (
    <div>
      <h1>This page will never render</h1>
    </div>
  );
};

export default ErrorTestPage;
