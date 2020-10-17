import 'dotenv/config';

import express from 'express';
import routes from './routes';
import cors from 'cors';
import io from 'socket.io';
import http from 'http';

import './database';

class App {
  constructor() {
    this.app = express();
    this.server = http.Server(this.app);

    this.socket();

    this.middlewares();
    this.routes();
    this.exceptionHandler();

    this.connectedUsers = {};
  }

  socket() {
    this.io = io(this.server);

    this.io.on('connection', (socket) => {
      const { usuario_id } = socket.handshake.query;
      this.connectedUsers[usuario_id] = socket.id;

      socket.on('disconnect', () => {
        delete this.connectedUsers[usuario_id];
      });
    });
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());

    this.app.use((req, res, next) => {
      req.io = this.io;
      req.connectedUsers = this.connectedUsers;

      next();
    })
  }

  routes() {
    this.app.use(routes);
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();

        return res.status(500).json(errors);
      }

      return res.status(500).json({ erro: 'Internal server error' });
    });
  }
}

export default new App().server;
