declare global {
	interface Window {
		api: SandBox
	}
}

export interface SandBox {
	send: () => void
}
