import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// Mock the libraries that ship as ESM (axios v1.x, react-leaflet,
// react-apexcharts). CRA's jest setup does not transform node_modules, so
// loading the real builds throws "Cannot use import statement outside a
// module" / "Unexpected token 'export'". Using factory mocks keeps jest from
// ever loading those ESM bundles and keeps this smoke test focused on the
// frontend mounting/routing, which was broken by the invalid
// 'react-router-dommmmm' import path.
jest.mock('axios', () => ({
  __esModule: true,
  default: {
    get: jest.fn(() => Promise.resolve({ data: {} })),
    post: jest.fn(() => Promise.resolve({ data: {} })),
  },
}));

jest.mock('react-leaflet', () => ({
  __esModule: true,
  MapContainer: () => null,
  TileLayer: () => null,
  Marker: () => null,
  Popup: () => null,
  useMapEvents: () => null,
}));

jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => null,
}));

import App from './App';

// The frontend was failing to compile because of an invalid import path
// ('react-router-dommmmm'). This smoke test mounts the whole App inside a
// Router and verifies that routing renders without crashing.
test('App mounts and renders the home page', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/CometCharge/i)).toBeTruthy();
});

test('App routes render the login page', () => {
  render(
    <MemoryRouter initialEntries={['/login']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Sign in to us/i)).toBeTruthy();
});
