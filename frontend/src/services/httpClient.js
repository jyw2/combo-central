import { apiHost } from "../env.js";
import { httpType } from "../env.js";

export default class HttpClient {
  // TODO: Error Handling
  static host = apiHost;
  static encryption = httpType;

  // COMBOS
  static async sendComboCreate(body, token) {
    // Get user id from token and not put in body
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    };

    try {
      const response = await fetch(
        `${this.encryption}://${this.host}/api/combos`,
        requestOptions
      );
      const data = await response.json();
      return data;
    } catch (e) {
      throw e;
    }
  }

  static async sendComboUpdate(body, id, token) {
    body._id = id;
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    };

    try {
      const response = await fetch(
        `${this.encryption}://${this.host}/api/combos/${id}`,
        requestOptions
      );
      const data = await response.json();
      return data;
    } catch (e) {
      throw e;
    }
  }

  static async getCombos(
    charId,
    userId = "",
    filters = null,
    likesOnly = false
  ) {
    const queryParams = filters ? filters : new URLSearchParams();
    queryParams.set("charid", charId);
    queryParams.set("userid", userId);

    if (likesOnly) queryParams.set("likes", true);

    const requestOptions = {
      method: "GET",
    };
    let res = await fetch(
      `${this.encryption}://${this.host}/api/combos?` + queryParams,
      requestOptions
    );
    return res.json();
  }

  static async getCombo(comboId, token) {
    const requestOptions = {
      method: "GET",
      authorization: `bearer ${token}`,
    };
    let res = await fetch(
      `${this.encryption}://${this.host}/api/combos/${comboId}`,
      requestOptions
    );
    return { data: await res.json(), status: res.status }
  }

  static async getComboUISchema() {
    const requestOptions = {
      method: "GET",
    };
    let res = await fetch(
      `${this.encryption}://${this.host}/api/combos/ui-schema`,
      requestOptions
    );
    return { data: await res.json(), status: res.status }
  }

  static async getPresetActions(charId) {
    const requestOptions = {
      method: "GET",
    };
    let res = await fetch(
      `${this.encryption}://${this.host}/api/presets/${charId}`,
      requestOptions
    );
    return res.json();
  }

  static async getPresetActionNamesAndIds(charId) {
    const requestOptions = {
      method: "GET",
    };
    let res = await fetch(
      `${this.encryption}://${this.host}/api/presets/names/${charId}`,
      requestOptions
    );
    return res.json();
  }

  static async getPropSearchTerms() {
    const requestOptions = {
      method: "GET",
    };
    let res = await fetch(
      `${this.encryption}://${this.host}/api/combos/search-props`,
      requestOptions
    );
    return res.json();
  }

  static async sendComboGetLight(charId) {
    const requestOptions = {
      method: "GET",
    };
    let res = await fetch(
      `${this.encryption}://${this.host}/api/combos/${charId}/light`,
      requestOptions
    );
    return res.json();
  }

  // USERS
  static async getUserLikes(userId, charId, token) {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(
        `${this.encryption}://${this.host}/api/users/${userId}/${charId}/likes`,
        requestOptions
      );
      const data = await response.json();
      return data;
    } catch (e) {
      throw e;
    }
  }

  static async getUserSetLikes(userId, charId, token) {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(
        `${this.encryption}://${this.host}/api/users/${userId}/${charId}/set-likes`,
        requestOptions
      );
      const data = await response.json();
      return data;
    } catch (e) {
      throw e;
    }
  }

  static async setUserLike(userId, charId, token, comboId, liked) {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ comboId, liked }),
    };

    try {
      const response = await fetch(
        `${this.encryption}://${this.host}/api/users/${userId}/${charId}/likes`,
        requestOptions
      );
      const data = await response.json();
      return data;
    } catch (e) {
      throw e;
    }
  }

  static async setUserSetLike(userId, charId, token, comboSetId, liked) {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ comboSetId, liked }),
    };

    try {
      const response = await fetch(
        `${this.encryption}://${this.host}/api/users/${userId}/${charId}/set-likes`,
        requestOptions
      );
      const data = await response.json();
      return data;
    } catch (e) {
      throw e;
    }
  }

  static async getUser(userId) {
    const requestOptions = {
      method: "GET",
    };
    let res = await fetch(
      `${this.encryption}://${this.host}/api/users/${userId}`,
      requestOptions
    );
    return { data: await res.json(), status: res.status };
  }

  static async createDBUser(token) {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(
        `${this.encryption}://${this.host}/api/users/env`,
        requestOptions
      );
      return { data: await response.json(), status: response.status }
    } catch (e) {
      throw e;
    }
  }

  static async createUser(username, token) {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ username }),
    };

    try {
      const response = await fetch(
        `${this.encryption}://${this.host}/api/users`,
        requestOptions
      );
      return { data: await response.json(), status: response.status }
    } catch (e) {
      throw e;
    }
  }


  // COMBO SETS
  static async sendComboSetCreate(body, token) {
    // Get user id from token and not put in body
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    };
    try {
      const response = await fetch(
        `${this.encryption}://${this.host}/api/combo-sets`,
        requestOptions
      );
      const data = await response.json();
      return data;
    } catch (e) {
      throw e;
    }
  }

  static async sendComboSetUpdate(body, id, token) {
    body._id = id;
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    };

    try {
      await fetch(
        `${this.encryption}://${this.host}/api/combo-sets/${id}`,
        requestOptions
      );
    } catch (e) {
      throw e;
    }
  }

  static async getComboSets(charId, page, sort, sortDirection, userId = "", filters = null, likesOnly = false) {
    const queryParams = new URLSearchParams();
    queryParams.set("charid", charId);
    queryParams.set("userid", userId);
    queryParams.set("page", page);
    queryParams.set("sort", sort);
    queryParams.set("sortdirection", sortDirection);


    if (likesOnly) queryParams.set("likes", true);


    if (filters) {
      filters.forEach((f) => queryParams.append("tags", f));
    }

    const requestOptions = {
      method: "GET",
    };
    let res = await fetch(
      `${this.encryption}://${this.host}/api/combo-sets/search?` + queryParams,
      requestOptions
    );
    return res.json();
  }

  static async getComboSet(comboId, token) {
    const requestOptions = {
      method: "GET",
      authorization: `bearer ${token}`,
    };
    let res = await fetch(
      `${this.encryption}://${this.host}/api/combo-sets/${comboId}`,
      requestOptions
    );
    return { data: await res.json(), status: res.status }
  }
}
