import js from '@eslint/js';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import astro from 'eslint-plugin-astro';
import astroParser from 'astro-eslint-parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';

const astroConfigs = astro.configs['flat/recommended'].map((config) => {
  if (config.languageOptions?.parser?.meta?.name === 'astro-eslint-parser') {
    return {
      ...config,
      languageOptions: {
        ...config.languageOptions,
        parser: astroParser,
        parserOptions: {
          ...config.languageOptions.parserOptions,
          parser: tsParser
        },
        globals: {
          ...config.languageOptions.globals,
          ...globals.browser,
          Astro: 'readonly'
        }
      }
    };
  }

  return config;
});

export default [
  {
    ignores: ['node_modules', 'dist', '.astro', 'src/content/**/*.mdx']
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.strict.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off'
    }
  },
  ...astroConfigs
];
