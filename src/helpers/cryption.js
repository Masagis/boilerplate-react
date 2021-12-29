import crypto from 'crypto';
import { AES_KEY, AES_IV } from '../configs/environment';

export const encryptAes = (data) => {
  if (data) {
    const cipher = crypto.createCipheriv('aes-256-cbc', AES_KEY, AES_IV);
    let encrypted = cipher.update(data, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return encrypted;
  }
  return null;
};

export const decryptAes = (data) => {
  if (data) {
    const cipher = crypto.createDecipheriv('aes-256-cbc', AES_KEY, AES_IV);
    let decrypted = cipher.update(data, 'utf8', 'base64');
    decrypted += cipher.final('base64');
    return decrypted;
  }
  return null;
};
