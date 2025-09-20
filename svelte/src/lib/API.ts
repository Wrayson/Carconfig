const HOST_NAME = getBaseUrl();
const HOST_PORT = 80;

// Helper Function, um die IP Adresse des Servers zu holen
function getBaseUrl() {
	if (typeof window !== 'undefined') {
		return `http://${window.location.hostname}:`;
	}
	// Fallback für SSR oder lokale Entwicklung
	return 'http://localhost:';
}


// Interface with API Response information
export interface API_RESPONSE<T> {
	status: {
		status: 'SUCCESS' | 'FAILED';
		code: number;
		message: string;
	};
	data: T | null;
}

// Interface with Car Configuration information
export interface CAR_CONFIGURATION {
	code: string;
	config: {
		carColor: string;
		rimColor: string;
		caliperColor: string;
	}
}

// Interface for Color Options
export interface COLOR_OPTION {
	_id: string;
	type: 'car' | 'rim' | 'caliper';
	name: string;
	hex: string;
	price: number;
}

// Interface with Car configuration Options
export interface CAR_OPTIONS {
	car: COLOR_OPTION[];
	rim: COLOR_OPTION[];
	caliper: COLOR_OPTION[];
}

export async function fetchOptions():
	Promise<API_RESPONSE<CAR_OPTIONS> | null> {
	try {
		const response = await fetch(`${HOST_NAME}${HOST_PORT}/api/options`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})

		const data: API_RESPONSE<CAR_OPTIONS> = await response.json()
		return data
	} catch (error) {
		console.error('Failed to retrieve options:', error);
		return null;
	}
}

// Function to save given Car Configuration
export async function saveConfiguration(
	config: Omit<CAR_CONFIGURATION, 'code'>
): Promise<API_RESPONSE<CAR_CONFIGURATION> | null> {
	try {
		const response = await fetch(`${HOST_NAME}${HOST_PORT}/api/config`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(config),
		})

		const data: API_RESPONSE<CAR_CONFIGURATION> = await response.json()
		return data
	}
	catch (error) {
		console.error(error);
		return null;
	}
}

// Function to load Car Configuration based on given 6-digit Share-Code
export async function fetchConfiguration(code: string): Promise<API_RESPONSE<CAR_CONFIGURATION> | null> {
	try {
		const response = await fetch(`${HOST_NAME}${HOST_PORT}/api/config/${code}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})

		const data: API_RESPONSE<CAR_CONFIGURATION> = await response.json()
		return data
	} catch (error) {
		console.error('Failed to retrieve configuration:', error);
		return null;
	}
}