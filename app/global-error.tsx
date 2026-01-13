"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  return (
    <html>
      <body>
        <div style={{ padding: "20px", textAlign: "center" }}>
          <h1>🚨 Global Error Caught!</h1>
          <h2>Root Layout Error Detected</h2>
          <p>
            Error message: <strong>{error.message}</strong>
          </p>

          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              backgroundColor: "#fff3cd",
              border: "1px solid #ffeaa7",
              borderRadius: "5px",
            }}
          >
            <h4>📚 Kiến thức:</h4>
            <ul
              style={{ textAlign: "left", maxWidth: "500px", margin: "0 auto" }}
            >
              <li>
                <code>app/error.tsx</code> - Bắt lỗi components/pages
              </li>
              <li>
                <code>app/global-error.tsx</code> - Bắt lỗi Root Layout
              </li>
              <li>Global Error PHẢI có thẻ html và body</li>
            </ul>
          </div>

          <button
            onClick={reset}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
