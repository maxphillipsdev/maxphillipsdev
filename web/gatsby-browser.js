/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import "@fontsource/inter";
import "./src/css/index.css";

import { init } from "@sentry/react";

if (process.env.NODE_ENV === "production") {
  init({
    dsn: process.env.SENTRY_DSN,
    release: process.env.COMMIT_REF || "unknown",
  });
}
