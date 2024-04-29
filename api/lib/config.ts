import process from "process";

export const config = {
    port: process.env.PORT || 3100,
    supportedPostCount: 15,
    JwtSecret: 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcxMzgwNjg4OCwiaWF0IjoxNzEzODA2ODg4fQ.YwjPyNkb4kHd8ky0FwCCZrXVJRUDtPl4HvDVrvVXuMA',
    databaseUrl: process.env.MONGODB_URI || 'mongodb+srv://twwai:KTp5wYwutrLHPLT@cluster0.ooees.mongodb.net/IoT?retryWrites=true&w=majority'
};