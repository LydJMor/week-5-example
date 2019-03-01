
class Record {
  constructor(title, artist, year) {
    console.log(this);
    this.title = title;
    this.artist = artist;
    this.year = year;

    return this;

  } //end of constructor;
} //end of Record;


let collection = [];

// let record0 = new Record('Blood on the Tracks', 'Dylan', 1963);
// collection.push(record0);
// let record1 = new Record('Alice', 'Arlo Guthrie', 1967);
// collection.push(record1);
// let record2 = new Record('Takk', 'Sigur Ros', 2005);
// collection.push(record2);
// let record3 = new Record('Byrjun', 'Sigur Ros', 1999);
// collection.push(record3);

console.log('collection before:', collection);

function addToCollection(title, artist, year) {
  let record = new Record(title, artist, year);
  collection.push(record);

  // does not give anything back to the caller
  console.log(record);

  // we want something back!
  return record;
}

// now make records
// call the function
let record0 = addToCollection('Blood on the Tracks', 'Dylan', 1963);
// call the function
let record1 = addToCollection('Alice', 'Arlo Guthrie', 1967);
// call the function
let record2 = addToCollection('Takk', 'Sigur Ros', 2005);

console.log('collection after:', collection);


function findRecord(title) {
  // variable called title, the value is 'Takk'
  for (let i = 0; i < collection.length; i++) {
    if (title === collection[i].title) {
      // return collection[i].title;
      // return index
      return i; // stop the function
    }
  }
  // only after checking every single index, say false
  return false;
}

findRecord('Takk'); // -1 ??
findRecord('Stuff and Things');

function allBy(artist) {
  let recordsByArtist = [];
  for (let i = 0; i < collection.length; i++) {
    // the given artist matches THIS record's artist
    if(artist === collection[i].artist) {      
      // then add it to our return array
      recordsByArtist.push(collection[i]);
    }
  }

  return recordsByArtist;
}

allBy('Dylan');

/*
function findRecord(title) {
  for (let i = 0; i < collection.length; i++) {
    if (this.title === collection[i].length) {
    } return collection.indexOf(this.title);
  }
}
findRecord('Taak');// -1 ??
*/