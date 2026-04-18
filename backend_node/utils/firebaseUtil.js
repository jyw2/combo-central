const { initializeApp, cert } = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");
const { getFirestore } = require('firebase-admin/firestore');

// RECOMMENDED TO UPDATE THIS TO A PATH BASED STORE https://firebase.google.com/docs/admin/setup#windows
const serviceAccount = require("../secrets/firebaseServiceAccountKey.json");

const app = initializeApp({
    credential: cert(serviceAccount),
});

const auth = getAuth(app)
// Update project config with password policy config
getAuth().projectConfigManager().updateProjectConfig({
    passwordPolicyConfig: {
      enforcementState: 'ENFORCE',
      forceUpgradeOnSignin: true,
      constraints: {
        requireUppercase: true,
        requireLowercase: true,
        requireNonAlphanumeric: true,
        requireNumeric: true,
        minLength: 6,
        maxLength: 100,
      },
    },
  })
const firestoreDB = getFirestore(app)

module.exports = { auth, firestoreDB }