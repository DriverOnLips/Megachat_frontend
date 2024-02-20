import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3000,
		cors: {
			origin: 'http://192.168.95.1:8800',
			methods: ['GET, POST', 'PUT', 'DELETE'],
			allowedHeaders: ['Content-Type', 'Authorization'],
			credentials: true,
			maxAge: 3600,
		},
	},
	plugins: [react()],
});
