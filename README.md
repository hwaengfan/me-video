# MeVideo

### Tech Stacks:

- Frontend: TypeScript, Next.js
- Backend: Express.js, Firebase Auth, Firebase Firestore
- Video Service: FFmpeg, Google Cloud Storage, Google Cloud Pub/Sub, Google Cloud Run
- Others: Docker, Firebase Functions

### Some Functionalities:

1. Cloud Storage will store the raw and processed videos uploaded by users.
2. Pub/Sub will send messages to the video processing service.
3. Cloud Run will host a non-public video processing service. After it transcodes videos, they will be uploaded to Cloud Storage.
4. Cloud Firestore will store the metadata for the videos.
5. Cloud Run will host a Next.js app, which will serve as the Youtube web client.
6. The Next.js app will make API calls to Firebase Functions.
7. Firebase Functions will fetch videos from Cloud Firestore and return them.

### Note: there is no current deployment because they would cost money to maintain, but I can deploy and run them anytime
