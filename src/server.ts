import { app } from './app';
const PORT = process.env.PORT || 7004;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
