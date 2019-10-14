module.exports = {
  extends: [
    `eslint:recommended`,
    `plugin:@typescript-eslint/eslint-recommended`,
    `plugin:@typescript-eslint/recommended`,
    `plugin:prettier/recommended`,
    `prettier/@typescript-eslint`,
    `react-app`,
  ],
  globals: {
    __PATH_PREFIX__: true,
  },
  rules: {
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/explicit-function-return-type": [
      `error`,
      {
        allowTypedFunctionExpressions: true,
      },
    ],
  },
}
