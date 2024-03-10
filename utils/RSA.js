const NodeRSA = require("node-rsa");

module.exports.encryptData = encryptData;
async function encryptData({ data, backPublicKey }) {
  try {
    const keyPublic = new NodeRSA(backPublicKey);
    data.date = new Date().toUTCString();
    const passPhraseEncrypted = keyPublic.encrypt(JSON.stringify(data), "base64");
    return passPhraseEncrypted;
  } catch {
    return null;
  }
}
