# Endpoints

## Patients

- `GET /patients` - Get all patients
- `GET /patients/:id` - Get patient by id
- `POST /patients` - Create patient
- `PUT /patients/:id` - Update patient by id
- `DELETE /patients/:id` - Delete patient by id

### Get patiens

- GET /patients - Get all patients

### New patient

- `POST /patients` - Create patient

```json
{
  "name": "John Doe",
  "birthDate": "2000-01-01",
  "socialNumber": "123456789",
  "phone": "123456789"
}
```

### Update patient

- `PUT /patients/:id` - Update patient by id

```json
{
  "name": "John Doe",
  "birthDate": "2000-01-01",
  "socialNumber": "123456789",
  "phone": "123456789"
}
```

### Delete patient

- `DELETE /patients/:id` - Delete patient by id

## Visits

- `GET /visits` - Get all visits
- `GET /visits/:id` - Get visit by id
- `POST /visits` - Create visit
- `PUT /visits/:id` - Update visit by id
- `DELETE /visits/:id` - Delete visit by id

### Get visits

- GET /visits - Get all visits

### New visit

- `POST /visits` - Create visit

```json
{
  "patientId": 1,
  "date": "2025-11-20T10:30:00",
  "diagnosis": "Boka ficam",
  "doctor": "Dr. Kovács"
}
```

### Update visit

- `PUT /visits/:id` - Update visit by id

```json
{
  "patientId": 1,
  "date": "2025-11-20T10:30:00",
  "diagnosis": "Boka ficam",
  "doctor": "Dr. Kovács"
}
```

### Delete visit

- `DELETE /visits/:id` - Delete visit by id
