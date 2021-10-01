class APPStorage {
    
  static _prefix = 'taskapp_';
  static get(name) {
    return new Promise((resolve, reject) => {
      const item = localStorage.getItem(APPStorage._prefix + name);
      if (!item) {
        reject(`LocalStorage: ${name} not found`);
        return;
      }

      resolve(item);
    });
  }

  static set(name, value) {
    return new Promise((resolve) => {
      localStorage.setItem(APPStorage._prefix + name, value);
      resolve(value);
    });
  }
}

export default APPStorage;
