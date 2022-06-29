import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  // TypeScript 用プリセット
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json',
    },
  },
  // テスト環境: jest@v27 以降のデフォルトは 'node'
  testEnvironment: 'jsdom',
  // 拡張子 'ts' or 'tsx' のファイル（正規表現）を `ts-jest` に処理させる
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  // SVG と CSS のモックを指定
  moduleNameMapper: {
    '^.+\\.(css|svg)$': '<rootDir>/__mocks__/assetMock.ts',
  },
};

export default config;
