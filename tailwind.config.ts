
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				mint: {
					50: "#e1fbf6",
					100: "#c0f3e5",
					200: "#98edd3",
					400: "#48cfae",
					500: "#32c7a1", // CTA, icons
					600: "#25a581", // hover
					700: "#158a6c",
				},
				blue: {
					50: "#eef5fa",
					100: "#d5e9fb",
					200: "#aed8f8",
					400: "#54a8eb",
					500: "#3779cc",
					600: "#245a9a",
					700: "#183e6c",
				},
			},
			fontFamily: {
				inter: ['Inter', 'system-ui', 'sans-serif'],
			},
			keyframes: {
				'fade-in': {
					"0%": { opacity: "0", transform: "translateY(12px)" },
					"100%": { opacity: "1", transform: "translateY(0)" }
				},
				'scale-in': {
					"0%": { transform: "scale(0.9)", opacity: "0" },
					"100%": { transform: "scale(1)", opacity: "1" }
				}
			},
			animation: {
				"fade-in": "fade-in 0.6s cubic-bezier(.47,.77,.39,1.15)",
				"scale-in": "scale-in 0.18s cubic-bezier(.47,.77,.39,1.15)",
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
