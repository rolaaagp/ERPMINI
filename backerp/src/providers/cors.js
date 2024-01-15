export const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:5173"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};