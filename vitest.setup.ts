import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

// vite の expect に @testing-library/jest-dom/matchers の expect の機能を含ませる
expect.extend(matchers);
