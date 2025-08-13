import connection from "../db/connection.js";

class Service {
  constructor(query) {
    this.data = {};
    this.query = query;
  }

  makeRequest = async () => {
    try {
      const params = Object.values(this.data);
      const [rows] = await connection.execute(this.query, params);
      return rows;
    } catch (error) {
      throw error;
    }
  };
}

export default Service;