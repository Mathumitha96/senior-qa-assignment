# Performance Test Plan - Demo Web Shop

## Overview

This document outlines performance test scenarios for https://demowebshop.tricentis.com.

## Area to Test: Product Search Functionality

**Why Product Search:**
- Most frequently used feature by users
- Database-intensive operation (queries, indexing)
- Directly impacts user experience and conversion rates
- Can become a bottleneck during peak traffic

## Test Scenarios

### Scenario 1: Product Search - Normal Load
**Objective:** Validate search performance under normal user load

**Parameters:**
- **Virtual Users:** 50-100 concurrent users
- **Ramp-up Time:** 5 minutes (gradual increase)
- **Test Duration:** 15 minutes
- **Think Time:** 2-5 seconds between requests
- **Search Terms:** Mix of common terms (book, computer, smartphone, laptop)

**Test Steps:**
1. Users navigate to homepage
2. Enter search term in search box
3. Submit search request
4. Wait for search results page to load
5. Verify results are displayed
6. Repeat with different search terms

**Success Criteria:**
- 95% of search requests complete within 2 seconds
- No errors (error rate < 0.1%)
- Server CPU usage < 70%
- Memory usage stable
- Database query response time < 500ms

---

### Scenario 2: Product Search - Peak Load
**Objective:** Test search functionality during peak traffic hours

**Parameters:**
- **Virtual Users:** 200-300 concurrent users
- **Ramp-up Time:** 10 minutes
- **Test Duration:** 30 minutes
- **Think Time:** 1-3 seconds
- **Search Pattern:** 70% common terms, 30% unique terms

**Test Steps:**
1. Simulate peak hour traffic pattern
2. Multiple users searching simultaneously
3. Mix of simple and complex search queries
4. Monitor system resources continuously

**Success Criteria:**
- 90% of requests complete within 3 seconds
- Error rate < 1%
- Server response time p95 < 4 seconds
- No memory leaks observed
- Database connection pool not exhausted

---

### Scenario 3: Product Search - Stress Test
**Objective:** Identify maximum capacity and breaking points

**Parameters:**
- **Virtual Users:** Gradually increase from 100 to 500+
- **Ramp-up Time:** 20 minutes (gradual increase)
- **Test Duration:** 45 minutes
- **Think Time:** Minimal (1-2 seconds)
- **Search Terms:** Random mix including edge cases

**Test Steps:**
1. Start with 100 concurrent users
2. Gradually increase load every 5 minutes
3. Monitor system metrics at each level
4. Continue until system shows degradation
5. Identify breaking point and recovery time

**Success Criteria:**
- Identify maximum concurrent users supported
- Document performance degradation points
- Measure recovery time after load reduction
- Identify resource bottlenecks (CPU, memory, database, network)

---

### Scenario 4: Shopping Cart - Concurrent Additions
**Objective:** Test cart operations under concurrent load

**Parameters:**
- **Virtual Users:** 150 concurrent users
- **Ramp-up Time:** 5 minutes
- **Test Duration:** 20 minutes
- **Actions per User:** Add 2-3 products to cart
- **Think Time:** 3-5 seconds between actions

**Test Steps:**
1. Users navigate to product category pages
2. Add products to shopping cart
3. Update quantities in cart
4. Remove products from cart
5. Verify cart calculations

**Success Criteria:**
- Cart operations complete within 1 second
- No cart data corruption
- Session management stable
- Price calculations accurate
- Error rate < 0.5%

---

### Scenario 5: Checkout Process - Transaction Load
**Objective:** Test complete checkout flow under load

**Parameters:**
- **Virtual Users:** 50-75 concurrent users
- **Ramp-up Time:** 3 minutes
- **Test Duration:** 15 minutes
- **Think Time:** 5-10 seconds (realistic user behavior)
- **Payment Methods:** Mix of different payment options

**Test Steps:**
1. Users add products to cart
2. Navigate to checkout
3. Fill billing/shipping information
4. Select shipping method
5. Select payment method
6. Submit order
7. Verify order confirmation

**Success Criteria:**
- Checkout completion within 5 seconds
- Order creation successful (100% success rate)
- No duplicate orders created
- Database transactions complete successfully
- Payment processing integration stable

---

### Scenario 6: Spike Test - Flash Sale Simulation
**Objective:** Test system response to sudden traffic spikes

**Parameters:**
- **Baseline Users:** 50 concurrent users
- **Spike Users:** 500 concurrent users (10x increase)
- **Spike Duration:** 2 minutes
- **Ramp-up to Spike:** 30 seconds
- **Ramp-down from Spike:** 1 minute
- **Test Duration:** 10 minutes

**Test Steps:**
1. Maintain baseline load for 3 minutes
2. Rapidly increase to spike load (simulate flash sale announcement)
3. Maintain spike load for 2 minutes
4. Gradually reduce load back to baseline
5. Monitor system recovery

**Success Criteria:**
- System handles spike without crashing
- Response time degradation is acceptable (< 10 seconds)
- Error rate during spike < 5%
- System recovers to normal performance within 2 minutes
- No data loss or corruption

---

### Scenario 7: Endurance Test - Extended Load
**Objective:** Test system stability over extended period

**Parameters:**
- **Virtual Users:** 100 concurrent users
- **Test Duration:** 2-4 hours
- **Ramp-up Time:** 10 minutes
- **Think Time:** 2-5 seconds
- **Mixed Scenarios:** Search (40%), Cart (30%), Checkout (20%), Browsing (10%)

**Test Steps:**
1. Continuous mixed workload simulation
2. Monitor system resources throughout
3. Check for memory leaks
4. Verify database connection pool stability
5. Monitor response time trends

**Success Criteria:**
- No memory leaks (memory usage stable)
- Response times remain consistent
- No degradation in performance over time
- Database connections properly managed
- Error rate remains low throughout

