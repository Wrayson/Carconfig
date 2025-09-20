# 'Carconfig': 3D-Web Vehicle Configurator 

A light-weight, fast, easy to use full-stack web-based Vehicle Configurator. <br />
Developed using SvelteKit, Node/ExpressJS and MongoDB. <br />
Easily create your dream configuration, save it and share the code with your friends.<br />
Automatically clean up old configurations/codes and easily add new color options. <br />

Following options are currently configurable:
 - Body Paint
 - Rim Color
 - Caliper Color

Orbital Controls allow you to easily zoom, rotate and move around the configured vehicle. <br /> 

Created for TEKOs 'Web Engineering' (LN3). <br />
Created by Edonis Kryeziu (O-TIN-22-a).

## Interfaces
### Frontend Interfaces
Following Interfaces have been implemented and used on the frontend (API.ts):

`
export interface API_RESPONSE<T> {
	status: {
		status: 'SUCCESS' | 'FAILED';
		code: number;
		message: string;
	};
	data: T | null;
}
`

`
export interface CAR_CONFIGURATION {
code: string;
config: {
carColor: string;
rimColor: string;
caliperColor: string;
}
}
`

`export interface COLOR_OPTION {
_id: string;
type: 'car' | 'rim' | 'caliper';
name: string;
hex: string;
price: number;
}
`

`
export interface CAR_OPTIONS {
car: COLOR_OPTION[];
rim: COLOR_OPTION[];
caliper: COLOR_OPTION[];
}
`

### Backend Interfaces
Following Schemas have been implemented and used on the backend (server.js):

`
const configSchema = new mongoose.Schema({
code: {
type: String,
required: true,
unique: true
},
config: {
type: Object,
required: true
},
createdAt: {
type: Date,
default: Date.now,
expires: '7d'
}
});
`

`
const optionSchema = new mongoose.Schema({
type: { type: String, required: true, enum: ['car', 'rim', 'caliper'] },
name: { type: String, required: true },
hex: { type: String, required: true },
price: { type: Number, required: true }
});
`

### REST-Endpoints
### POST */api/config*
Used to post customized configurations from the frontend in JSON-Format.
The posted configuration will be saved into a MongoDB-Collection (car_configurations).
A 6-digit identifying code will be generated and sent back to the user. <br />
The configuration will automatically be deleted after 7 days.

### GET */api/config/{code}*
Fetches a saved configuration in MongoDB using a 6-digit Code and returns
it to the frontend in the JSON-Format.

### GET */api/options*
Fetches all pre-defined Configuration options from MongoDB and returns them grouped
in JSON-Format to the frontend.

## Installation
    1. Clone this repository
    2. Open terminal/cmd and change into repository directory
    3. docker compose up --build
Watch the docker logs to see the hosting information.

## Configuration
You can customize and configure the application, however, you want.
By building the Docker-environment (Step 'Installation'), the frontend gets built and all dependencies are installed.

If you want to create new Customization Options (color variants) in the application;
All Color Options are configured in the seed.js-File, which runs upon building docker.
In the seed.js-File you can change, add or remove custom color options.

**Important:** The MongoDB Volume is persistent. Upon changing color options, you have to either:
- Remove the Volume <br/>
or
- Delete the 'car_options'-Collection in MongoDB (using, e.g., MongoDB Compass)

After running either of these steps, you have to re-run docker compose-Command (Step 'Installation') to re-run the seeding.

## Usage
    1. Run 'Installation' Step
    2. Conenct to port 80 with your preferred browser
        2.1 Watch docker logs to see alternative hosting information.
    3. Navigate to "Jetzt konfigurieren" to get to the main application.
        3.1 Configure your car to your liking
        3.2 Save your configuration by pressing "Speichern"
        3.3 Load your configuration by entering it in the input field and pressing "Laden"

## Testing
Testing was removed due to ESM-Errors (Known Issues).

## License
This project is licensed under **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)**.

This means that: <br />
- ✅ You can use, change and distribute the code/project.
- ❌ You cannot use this commercially without permission of the authors and creators.
- More information about [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/deed.de).

## Authors
Edonis Kryeziu (O-TIN-22-a)

## Known Issues (optional)
### Unit Tests
Unit Tests were removed due to ESM-Errors.
I did not have the time yet to fix errors.

### Missing CRUD-Operations
An update and delete Operation were not implemented.
No sensical U/D Operation could not be designed and implemented.

### Device Agnostic & Mobile First
Device Agnostic and mobile first principal was dismissed and not implemented.
'Carconfig' is currently only designed for Desktop and Laptop.
This was done in part of missing time and resources as well as the reasoning, 
that Car configurations most of the time only make sense on Desktop/Laptops, not on Mobile Devices.
Implementing Device Agnostic would have wasted precious time for something that wouldn't have made 
any sense for this use case.

### General roughness
Due to missing time and resources, I wasn't able to properly finish or polish the project.