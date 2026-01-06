import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  // Override default ignores of eslint-config-next.
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),

  // 👇 Thêm block này để tắt rule gây lỗi Tailwind
  {
    rules: {
      "tailwindcss/no-custom-classname": "off",
      "selector-class-pattern": "off",
    },
  },
]);

export default eslintConfig;
