// Create all Car Configuration Options at startup/docker compose in mongodb
// This is simply to replace/as a placeholder for a proper Admin-Panel.
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

// Schema & Model
const optionSchema = new mongoose.Schema({
    type: String,
    name: String,
    hex: String,
    price: Number
});
const CarOption = mongoose.model('car_options', optionSchema);

// Daten für die drei Typen
const carColors = [
    { type: 'car', name: 'Schwarz', hex: '#000000', price: 0 },
    { type: 'car', name: 'Rot', hex: '#ff0000', price: 1000 },
    { type: 'car', name: 'Blau', hex: '#0000ff', price: 1000 },
    { type: 'car', name: 'Grün', hex: '#00ff00', price: 1500 },
    { type: 'car', name: 'Pink', hex: '#8b586f', price: 2000 },
    { type: 'car', name: 'Purpur', hex: '#732c8b', price: 2000 },
    { type: 'car', name: 'Gelb', hex: '#8b7600', price: 3000 },
    { type: 'car', name: 'Beige', hex: '#8b774b', price: 2000 },
    { type: 'car', name: 'ITT', hex: '#22CE83', price: 2000 },
    { type: 'car', name: 'Weiss', hex: '#ffffff', price: 1000 },
    { type: 'car', name: 'Silver', hex: '#c0c0c0', price: 1500 },
];

const rimColors = [
    { type: 'rim', name: 'Black', hex: '#000000', price: 0 },
    { type: 'rim', name: 'Blue', hex: '#0000ff', price: 200 },
    { type: 'rim', name: 'Silver', hex: '#c0c0c0', price: 500 },
    { type: 'rim', name: 'Chrome', hex: '#f2f2f2', price: 800 }
];

const caliperColors = [
    { type: 'caliper', name: 'Schwarz', hex: '#000000', price: 0 },
    { type: 'caliper', name: 'Rot', hex: '#ff0000', price: 500 },
    { type: 'caliper', name: 'Yellow', hex: '#ffff00', price: 500 },
    { type: 'caliper', name: 'Blue', hex: '#0000ff', price: 800 },
    { type: 'caliper', name: 'Green', hex: '#00ff00', price: 1000 },
    { type: 'caliper', name: 'Weiss', hex: '#ffffff', price: 1000 }
];

(async () => {
    console.log('Running Seed Function');
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');

        const seedIfEmpty = async (type, data) => {
            const count = await CarOption.countDocuments({ type });
            if (count === 0) {
                await CarOption.insertMany(data);
                console.log(`${type} colors seeded`);
            } else {
                console.log(`${type} colors already exist, skipping`);
            }
        };

        await seedIfEmpty('car', carColors);
        await seedIfEmpty('rim', rimColors);
        await seedIfEmpty('caliper', caliperColors);

        await mongoose.disconnect();
        process.exit(0);
    } catch (err) {
        console.error('Seed failed:', err);
        process.exit(1);
    }
})();
