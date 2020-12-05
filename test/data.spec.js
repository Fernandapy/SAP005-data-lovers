
import { statusFilter, speciesFilter, genderFilter, searchLocation } from '../src/test.js';

const resultadoTest= [
  
    {
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        
        
        
    },
    {
        "id": 2,
        "name": "Morty Smith",
        "status": "Alive",
        "species": "Human",
        
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        
    },
    {
        "id": 3,
        "name": "Summer Smith",
        "status": "Alive",
        "species": "Human",
       
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
      },
    {
        "id": 4,
        "name": "Beth Smith",
        "status": "Alive",
        "species": "Human",
        
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
      },
    {
        "id": 5,
        "name": "Jerry Smith",
        "status": "Alive",
        "species": "Human",
       
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
      }
  
      ];
      

describe('statusFilter', () => {
it('is a function', () => {
  expect(typeof statusFilter).toBe('function');
});

it('returns `statusFilter`', () => {
  expect(statusFilter(resultadoTest, 'Alive')).toStrictEqual([
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      
      "location": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
      },
      
      
      
  },
  {
      "id": 2,
      "name": "Morty Smith",
      "status": "Alive",
      "species": "Human",
      
      "location": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
      },
      
  },
  {
      "id": 3,
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
     
      "location": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
      },
    },
  {
      "id": 4,
      "name": "Beth Smith",
      "status": "Alive",
      "species": "Human",
      
      "location": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
      },
    },
  {
      "id": 5,
      "name": "Jerry Smith",
      "status": "Alive",
      "species": "Human",
     
      "location": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
      },
    }
  ]);
});
});

describe('speciesFilter', () => {
it('is a function', () => {
  expect(typeof speciesFilter).toBe('function');
});

it('returns `example`', () => {
  expect(example()).toBe('example');
});
});

describe('genderFilter', () => {
it('is a function', () => {
  expect(typeof genderFilter).toBe('function');
});

it('returns `example`', () => {
  expect(example()).toBe('example');
});
});

describe('gsearchLocation', () => {
it('is a function', () => {
  expect(typeof searchLocation).toBe('function');
});

it('returns `example`', () => {
  expect(example()).toBe('example');
});
});

describe('statisticData', () => {
it('is a function', () => {
  expect(typeof statisticData).toBe('function');
});

it('returns `example`', () => {
  expect(example()).toBe('example');
});
});