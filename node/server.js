import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { handler } from './build/handler.js';

// Constants for environment
const app = express();
const PORT = process.env.PORT || 80;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(MONGODB_URI)
    // If connection was successful
    .then(() => console.log('Connected to MongoDB'))
    // If Connection to MongoDB didn't work, print
    .catch(err => console.error('Could not connect to MongoDB:', err));

// Mongoose Schema for Configuration Documents
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
        expires: '7d' // MongoDB Automatically deletes Documents after 7d ('30' -> 30 seconds)
    }
});

// Mongoose Schema for Color Options Documents
const optionSchema = new mongoose.Schema({
    type: { type: String, required: true, enum: ['car', 'rim', 'caliper'] },
    name: { type: String, required: true },
    hex: { type: String, required: true },
    price: { type: Number, required: true }
});

// Coonstants for MongoDB Schemas
const CarOption = mongoose.model('car_options', optionSchema);
const CarConfig = mongoose.model('car_configurations', configSchema);

// Helper function to create a standardized API Response
function createApiResponse(status, code, message, data = null) {
    return {
        status: {
            status,
            code,
            message
        },
        data
    };
}

// Helper function to generate a 6-digit code
// TO-DO: Implement "check" function, to see if Code is already used
function generateCode() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
}

// API endpoint to save a new configuration
app.post('/api/config', async (req, res) => {
    console.log(req.body);
    try {
        const code = generateCode();
        const newConfig = new CarConfig({
            code,
            config: req.body
        });
        await newConfig.save();
        const response = createApiResponse('SUCCESS', 201, 'Configuration saved successfully', {code: code})
        res.status(201).json(response);
    } catch (error) {
        console.error('Failed to retrieve Configuration:', error);
        const response = createApiResponse('FAILED', 500, 'Failed to retrieve configuration')
        res.status(500).json({ error: 'Failed to save configuration' });
    }
});

// API endpoint to get a configuration by code
app.get('/api/config/:code', async (req, res) => {
    try {
        const { code } = req.params;
        const config = await CarConfig.findOne({ code });
        if (!config) {
            const response = createApiResponse('FAILED', 404, 'Configuration not found');
            return res.status(404).json(response);
        }
        console.log(config);
        const response = createApiResponse('SUCCESS', 200, 'Configuration found', {code: code, config: config['config']});
        res.status(200).json(response);
    } catch (error) {
        const response = createApiResponse('FAILED', 500, 'Failed to retrieve configuration');
        res.status(500).json({response});
    }
});

// API endpoint to get all Car options
// Returns ALL Options.
app.get('/api/options', async (req, res) => {
    try {
        const options = await CarOption.find();

        // Group all Documents
        const grouped = {
            car: options.filter(o => o.type === 'car'),
            rim: options.filter(o => o.type === 'rim'),
            caliper: options.filter(o => o.type === 'caliper')
        };

        const response = createApiResponse('SUCCESS', 200, 'Options loaded', grouped);
        res.status(200).json(response);
    } catch (error) {
        console.error('Failed to retrieve options:', error);
        const response = createApiResponse('FAILED', 500, 'Failed to retrieve options');
        res.status(500).json(response);
    }
});

app.use(handler);

// Start the server
app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});