import APPStorage from './storage';

class ImageStorage {
  static async getImage(name) {
    return APPStorage.get(name);
  }

  static async setImage(name, file) {
    const base64 = await toBase64(file);
    APPStorage.set(name, base64);
    return base64;
  }
}

function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export default ImageStorage;
