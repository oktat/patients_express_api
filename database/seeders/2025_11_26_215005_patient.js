import db from '../../app/models/modrels.js';

async function up({context: QueryInterface}) {
  if(db.Employee) {
    await db.Employee.bulkCreate([
 
    ]);
  }else {
    const now = new Date()
    await QueryInterface.bulkInsert('patients', [
  {
    "id": 1,
    "name": "Erős István",
    "birthDate": "1998-05-28",
    "socialNumber": "834384001",
    "phone": "+36(40)522-3422"
  },
  {
    "id": 2,
    "name": "Nagy Zsuzsanna",
    "birthDate": "1975-11-03",
    "socialNumber": "123456781",
    "phone": "+36(20)456-7890"
  },
  {
    "id": 3,
    "name": "Kovács László",
    "birthDate": "1962-08-14",
    "socialNumber": "234567892",
    "phone": "+36(30)111-2233"
  },
  {
    "id": 4,
    "name": "Kiss Virág",
    "birthDate": "2005-03-01",
    "socialNumber": "345678903",
    "phone": "+36(70)987-6543"
  },
  {
    "id": 5,
    "name": "Varga Dávid",
    "birthDate": "1989-01-22",
    "socialNumber": "456789014",
    "phone": "+36(30)555-4444"
  },
  {
    "id": 6,
    "name": "Tóth Ágnes",
    "birthDate": "1950-12-10",
    "socialNumber": "567890125",
    "phone": "+36(20)333-6666"
  },
  {
    "id": 7,
    "name": "Horváth Zoltán",
    "birthDate": "1993-09-17",
    "socialNumber": "678901236",
    "phone": "+36(70)212-3456"
  },
  {
    "id": 8,
    "name": "Szabó Katalin",
    "birthDate": "1980-04-05",
    "socialNumber": "789012347",
    "phone": "+36(30)876-5432"
  },
  {
    "id": 9,
    "name": "Balogh Richárd",
    "birthDate": "2010-06-25",
    "socialNumber": "890123458",
    "phone": "+36(20)777-8888"
  },
  {
    "id": 10,
    "name": "Molnár Enikő",
    "birthDate": "1971-02-08",
    "socialNumber": "901234569",
    "phone": "+36(40)123-9876"
  },
  {
    "id": 11,
    "name": "Farkas Gábor",
    "birthDate": "1968-10-19",
    "socialNumber": "012345670",
    "phone": "+36(30)600-7000"
  }
    ]);
  }
}

async function down({context: QueryInterface}) {
  await QueryInterface.bulkDelete('patients', null, {});
}

export { up, down }
