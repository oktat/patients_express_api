import db from '../../app/models/modrels.js';

async function up({context: QueryInterface}) {
  if(db.Employee) {
    await db.Employee.bulkCreate([
 
    ]);
  }else {
    const now = new Date()
    await QueryInterface.bulkInsert('visits', [
  {
    "id": 1,
    "patientId": 1,
    "date": "2025-11-20T10:30:00",
    "diagnosis": "Boka ficam",
    "doctor": "Dr. Kovács"
  },
  {
    "id": 2,
    "patientId": 3,
    "date": "2025-11-21T15:00:00",
    "diagnosis": "Krónikus fejfájás",
    "doctor": "Dr. Nagy"
  },
  {
    "id": 3,
    "patientId": 7,
    "date": "2025-11-22T08:45:00",
    "diagnosis": "Mandulagyulladás",
    "doctor": "Dr. Szűcs"
  },
  {
    "id": 4,
    "patientId": 1,
    "date": "2025-11-24T11:00:00",
    "diagnosis": "Kontrollvizsgálat",
    "doctor": "Dr. Kovács"
  },
  {
    "id": 5,
    "patientId": 10,
    "date": "2025-11-25T14:15:00",
    "diagnosis": "Magas vérnyomás",
    "doctor": "Dr. Nagy"
  }
    ]);
  }
}

async function down({context: QueryInterface}) {
  await QueryInterface.bulkDelete('visits', null, {});
}

export { up, down }
