/* 
This problem was asked by Facebook.
Given an unordered list of flights taken by someone, each represented as (origin, destination) pairs, and a starting airport, compute the person's itinerary. If no such itinerary exists, return null. If there are multiple possible itineraries, return the lexicographically smallest one. All flights must be used in the itinerary.

For example, given the list of flights [('SFO', 'HKO'), ('YYZ', 'SFO'), ('YUL', 'YYZ'), ('HKO', 'ORD')] and starting airport YUL, you should return the list ['YUL', 'YYZ', 'SFO', 'HKO', 'ORD'].

Given the list of flights [('SFO', 'COM'), ('COM', 'YYZ')] and starting airport COM, you should return null.

Given the list of flights [('A', 'B'), ('A', 'C'), ('B', 'C'), ('C', 'A')] and starting airport A, you should return the list ['A', 'B', 'C', 'A', 'C'] even though ['A', 'C', 'A', 'B', 'C'] is also a valid itinerary. However, the first one is lexicographically smaller. */

import Heap from '../../data-structures/Heap'

/* Returning the person's itinerary
	@param {string[][]} flightPath
  @param {string} startingAirport
  @return {string[]}
*/

function createItinerary(flightPath, startingAirport){

// Key: string; Value: Heap	

const flightsMap = new Map();

// Constructing a map queue to keep the order

for(let i = 0; i < flightPath.length; i++) {
	const flight = flights[i];
  const [origin, destination] = flight;
  if(!flightsPath.has(origin)) {
  	flightsMap.set(origin, new Heap((a, b) => b.localeCompare(a)));
  }
  flightsMap.get(origin).add(destination)
}

// Finding suitable path
const itinerary = [];

visit(startingAirport, flightsMap, itinerary);

// Check if path does not exist

const keys = Array.from(flightsMap.keys());
for(let i = 0; i < keys.length; i++){
	const pq = flightsMap.get(keys[i]);
  if(pq.size() !== 0) return null;
}
	// Return appropriate path
  return itinerary;
}

/* Performing dfs. When we are done visiting every neighbor in nodes, we add it to the front of the itinerary 
	@param {string} startingAirport
  @param {Map<string, Heap>} flightsMap
  @param {string[]} itinerary
*/

function visit(startingAirport, flightsMap, itinerary){
	const pq = flightsMap.get(startingAirport);
  if(pq !== undefined && pq.size !== 0) {
  	visit(pq.poll(), flightsMap, itinerary);
  }
  itinerary.unshift(startingAirport)
}

