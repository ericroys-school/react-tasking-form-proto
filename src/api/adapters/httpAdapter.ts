export class HttpAdapter {
  constructor() {}

  async get(uri: string) {
    const res = await fetch(uri);
    if (!res.ok) {
      throw (res.status, res.statusText);
    }
    return await res.json();
  }

  async getOne(uri: string, id: string) {
    return this.get(uri + '/' + id);
  }

  async post<T>(uri: string, data: T) {
    const res = await fetch(uri, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });
    return await res.json();
  }

  async put<T>(uri: string, id: string, data: T) {
    const res = await fetch(uri + '/' + id, {
      method: 'Put',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) {
      throw (res.status, res.statusText);
    }
    return await res.json();
  }

  async delete(uri: string, id: string) {
    const res = await fetch(uri + '/' + id, {
      method: 'Delete',
      headers: { 'Content-Type': 'application/json' },
    });
    return await res.json();
  }
}
