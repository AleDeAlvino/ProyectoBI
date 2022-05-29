import { port } from '../config/config.js';
const path = require('path');
const express = require('express');
import app from './app'

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server on port ${port}`)
})