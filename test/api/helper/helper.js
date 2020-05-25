require('dotenv').config();
const request = require('supertest');
const { assert } = require('chai');

global.assert = assert;
global.request = request;
