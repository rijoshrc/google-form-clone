import mongoose from "mongoose";

/**
 * Mongoose connection status
 */
// const DISCONNECTED = 0;
const CONNECTED = 1;
const CONNECTING = 2;
// const DISCONNECTING = 3;

/**
 * Connect the db
 */
const connect = async () => {
  // check if db already connected
  const { readyState } = mongoose.connection;
  if (readyState === CONNECTED || readyState === CONNECTING) return;

  // if not connected already, establish the connection
  mongoose
    .connect(process.env.DB_STRING as string)
    .then(() => console.log("DB connected"));
};

export default connect;
