# API Automation - Pet Store API

Postman collection for Pet Store API testing covering POST and GET endpoints.

## Prerequisites

- Postman Desktop App or Postman Web
- [Download Postman](https://www.postman.com/downloads/)

## Getting Started

1. **Import the collection:**
   - Open Postman
   - Click "Import" button
   - Select `PetStore-API.postman_collection.json`
   - Click "Import"

2. **Run the collection:**
   - Select the collection "Pet Store API Tests"
   - Click "Run" button (or right-click → Run collection)
   - Click "Run Pet Store API Tests" to execute all tests

## Test Scenarios

### POST /pet - Create Pet (8 scenarios)
- Valid request with all fields
- Valid request with minimal fields
- Different status values (available, pending, sold)
- Invalid request (missing required fields)
- Invalid request (invalid JSON format)
- Edge case: Large pet name
- Edge case: Special characters in name
- Edge case: Duplicate pet ID

### GET /pet/{petId} - Get Pet by ID (8 scenarios)
- Valid pet ID (existing pet)
- Invalid pet ID (non-existent - 404 error)
- Invalid pet ID (negative number)
- Invalid pet ID (zero)
- Invalid pet ID (string instead of number)
- Invalid pet ID (special characters)
- Very large pet ID (boundary testing)
- Missing pet ID parameter

## Running Individual Tests

1. Click on any test request in the collection
2. Click "Send" button
3. View response in the "Body" tab
4. Check test results in the "Test Results" tab

## API Details

**Base URL:** `https://petstore.swagger.io/v2`

**Endpoints:**
- `POST /pet` - Creates a new pet
- `GET /pet/{petId}` - Retrieves pet details by ID

**Test Coverage:** 16 test cases (8 POST + 8 GET)
