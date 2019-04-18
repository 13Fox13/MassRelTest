export default class Service {
  _apiBase = 'http://api.massrelevance.com/MassRelDemo'

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json
  };

  getAllItems = async () => {
    const res = await this.getResource(`/kindle.json/`);
    return res.result.map(this._transformItems);
  };

  // _extractId = (itemId) => {
  //   const idRegExp = /\/([0-9]*)\/$/;
  //   return itemId.url.match(idRegExp)[1];
  // }

  _transformItems = (item) => {
    return {
      id: item.id,
      name: item.name,
      description: item.description,
    };
  }
}