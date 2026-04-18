<img width="1109" height="561" alt="image" src="https://github.com/user-attachments/assets/44d7462b-ee96-403c-bbd5-f3a12c08ac0b" />


# Combo Central
An all in one web app framework to create and share combos for **any 2D fighting game**. Multi game support is possible through custom configuration. Current live implementation only supports Street Fighter 6.
<br>
<br>
Note: Commit history prior to 4/18/2026 has been archived to ensure the removal of sensitive data. See private repo `combo-central-legacy` for past commits.
<br>
<br>Demo: https://www.youtube.com/watch?v=EO5sJ7pNLFg&feature=youtu.be
<br>Live SF6 site: https://sf6.combocentral.com/combo/luke-sullivan/69d2d5ca0a891d61eaf9968f

### Main Features
- Combo Creation, Read, Update
  - Many display options for combos, including Numpad notation, animated joystick, PC, XBOX, and PS4
  - Robust combo action support for modern 2D fighting games, including target combos, rekka dependencies, multi button, multiple input options, and double taps. 
  - Prebuilt selectable combo actions (Ex. attacks, special moves)
  - Custom combo actions to support emergent gameplay such as Tiger Knee inputs
  - Custom rich text fields that can have combo actions inside of them
- Combo Searching
  - Combo searching based on tags
  - Combo searching based on the attacks used and their position
- Combo sets to group together combos (Ex. A set of beginner combos)
  - Combo set searching based on tags
  - Combo set Create, Update, Read
  - Combo set likes
- Accounts
  - Authentication and Authorization
  - Combo likes

### Tech Stack 
**React** frontend <-> **Express** backend using **Mongoose** <-> local **MongoDB** instance.
<br>**Firebase** used for identity management.

### Important Terms
- **Combo**: A set of actions that string together in a 2D fighting game, usually without letting the opponent take any actions for the entire duration.
- **Combo Action**: A part of a combo, usually an attack, cancel or some sort of movement.
- **Combo Set**: A collection of combos that should be related in some way. For example a collection of easy combos or a collection of Bread and Butter Combos.

# Setup
The following outlines how to setup / configure an environment for a game and get it running.
## Create Backend env files (Source Controlled)
- look for any `<envName>-env` directory for an example
- Locate the `envs` directory in the `backend_node` directory
- create a `<envName>-env` directory
- create a `<envName>-comboDetailsSchema.js` file. This file contains the MONGO DB schema for combo details. Details are things like hit types, meter needed ETC. Some pre build details schemas exist. See the example set for usage of them.
   - Make sure all types have `uiType` set. `string_single_select`, `number`, `string_multi_select`, and `character_array` are the supported types.
- create a `<envName>-commonButtonVariants.js` file. This file should contain any patterns that are collapsible in combos EX: ` any punch strength -> P`. Format is: `patternName: [["Buton1","Button2"], pattern2, ...]`. Any pattern in the outer array will be collapsed into another button based on the `patternName`. The collapsed result is configured in the frontend env files. Use this object from this file in the `charPresets` files when setting the buttons for preset actions.
- create a directory named `actionPresets`
- create a file named `<envName>-universal.js` in the `actionPresets` directory. This should contain action presets that every character has access to (EX drive impact). See the example file for format.
- create a directory named `charPresets` inside the `<envName>-universal.js`
- add a js file for every character id (EG `chun-li.js`). see example for format.
    - presetId is mostly for dependency checking (EG making sure `rin` is only selectable after `fuujin`). 
    - For dependencies, each entry in the array is an action id that is required before the action is available. 
        - Read right to left. Use `|` to signify multiple options. 
        - EX: ["shinKick|axeKick", "ODJinrai"] means either OD jinrai must be one action before the current action and either shinKick or axeKick must be the preceding action before the current action.
    - For actions with no buttons always leave at least one empty array `buttons: [[]]`. 
    - For actions with no motion place an empty string `[""]`.

## Create Frontend env files (Source controlled)
- Create a `<envName>-config.js` file. This contains the URL for the backend server.
- Create a `<envName>-gameConfig.js` file. Read the example file to see what should be included.
- Create a `<envName>-comboRendering` directory
- In the `<envName>-comboRendering` directory create:
    - `<envName>-collapsePairs.js`: contains the patterns that the renderer will look for when collapsing buttons into a single `code`. Use the shared `generateAllButtonsPermsCollapsePairs` to quickly generate all pair patterns from a set of button options.
    - `<envName>-renderMixin.js`: contains classes which return components based on the `code` created by `<envName>-collapsePairs.js`. Make sure every `code` from `<envName>-collapsePairs.js` has a corresponding case in every mixin class. The classes are sent to the button renderers on construction.
    - `<envName>-customRenderStrategies.js`: contains classes that return components based on regular button codes. Should extend `ComboButtonRender` class.
    - `renderProviders` directory. Contains:
        - `<envName>-buttonRenderProvider.js`: acts as a directory/manager of sorts to provide the correct button renderer
        - `<envName>-motionRenderProvider.js`: acts as a directory/manager of sorts to provide the correct motion renderer
- Create an `images` directory and follow the `setup images` section below.
- add an entry for the new env in environments.js

### Start from here if redeploying an existing env
Make sure nodeJS, pm2 and mongoDB are installed and setup first.

## Create env config file (not source controlled)
- in the `/frontend/src` directory create an `env.js` file. 
- Fields:
    - apiHost = `backend origin`
    - frontEndUrl = `frontend server origin. In production should be the same as the apiHost but without the sub domain.`
    - envId = `id for the environment. use "local" for local development`
    - enableCors = `disables or ensables Cross origin requests. Keep cors disabled (enableCors = false) for all production environments)`
    - httpType = `http or https`
    - mongoAuthString = `auth string for the mongoDB connection if setup. Can leave blank if DB is configured for it`
- export using `module.exports` and not `export`. The backend nodeJS can't use the ES6 export.

*Example*
```
const apiHost = "localhost:3001" or "sf6.combocentral.com" for prod
const frontEndUrl = "localhost:3000" or "combocentral.com" for prod
const envId = "local"
const enableCors = true
const httpType = "http"
const mongoAuthString = "" for local "admin:<PW>"  for productions. PW set during mongoDB setup

module.exports = {
    apiHost,
    frontEndUrl,
    envId,
    enableCors,
    httpType,
    mongoAuthString,
    adSenseTestOnly
}
```
ALSO NEEDS TO BE ON THE VPS

## Create firebase config files (not source controlled)
- in `backend/secrets` create a `firebaseServiceAccountKey.json` file. This comes following https://firebase.google.com/docs/admin/setup. 
Can be found as of 2026 in firebase project settings -> service accounts -> Admin SDK -> generate new private key   
Should look like:
```
{
    "type": "service_account",
    "project_id": "combo-central",
    "private_key_id": "...",
    "private_key": "...",
    "client_id": "...",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "...",
    "universe_domain": "googleapis.com"
}
```
NEEDS TO BE ON THE VPS 

- in `frontend/src/secrets` add a `firebaseConfig.json`. Obtain  file by adding an app to the firebase project. Should look like 
```
{
  "apiKey": "...",
  "authDomain": "combo-central-local.firebaseapp.com",
  "projectId": "combo-central-local",
  "storageBucket": "combo-central-local.appspot.com",
  "messagingSenderId": "...",
  "appId": "..."
}
```
You will need to add double qoutes to the keys if copied directly from the firebase settings -> config.

## Setting up a character
1. add the `wide` and `chip-icon` images following the `Setup Images` section below
2. add them to the `characterData` object in the `gameConfig.js` file in the frontend dev file. 
3. add a `<charId>.js` file to  the `charPresets` folder with their presets
4. make a full combo with all details
5. Tweak colors, name and id
### Setup Images

### For each character
#### \<CharId>-wide.png
- 500px x 250px
- Try to get the face in the center of the image or slightly higher
- Shown on combo headers and search directories

#### \<CharId>-chip-icon.png 
- 50px x 50px
- shown on chips and small combo headers
- Also need a `all-characters-chip-icon.png`

### Other
#### banner-\<bannerNum>.png
- Need bannerNums from  0 to 3 
- shown on front page
- 600px x 100 px
- keep faces in the upper part of the image near the top edge

#### banner-\<subDomain>.png
- shown on env directory page
- 600px x 100 px
- keep faces in the upper part of the image near the top edge

## Running the app in production
0. Make sure that the backend firebase file and the frontend `env.js` are setup on the VPS, they are needed by the backend code.
1. Install GIT  https://git-scm.com/install/linux 
2. Install NodeJS `sudo apt install nodejs` and Install NPM `sudo apt install npm`
3. Install mongoDB `https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-20-04` and run the daemon
    - Remember to setup an admin account
4. Install PM2 to run the nodeJS front and backend servers https://pm2.keymetrics.io/docs/usage/quick-start/
5. Install and setup NGINX, including server blocks https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04 
	1. clone from the repo If it's private you will need to login using a personal access token as the password. The command line will prompt you to login
		1. Generate the personal access token in developer settings on the github website
	2. Setting up file permissions properly is important! Pay attention to what directories are being changed
6.  Go to your domain registar and setup a record pointing to the VPS IP for the subdomain - may take a couple minutes to propagate
7. Setup SSL cert for HHTPS connections
	1. Follow https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04
		1. MAKE SURE YOUR DOMAIN is pointing to the server already, this is used to verify ownership of the domain
8. Setup the combo central env based on the readme from the git repo
9. Make sure the MONGODB daemon is running
10. follow `https://www.digitalocean.com/community/tutorials/deploy-react-application-with-nginx-on-ubuntu`
    - We are using an API on the same domain, so add that optimization section to the NGINX config
    - build the app locally and copy the files over SCP by default. NPM i and building can be too heavy for a cheap VPS. Will need a SSH key setup. Scuffed way is to use a new github repo for the build
    - You should now see the homepage, but no data can be loaded without the backend!
11. go to the `backend_node` directory and run `npm i` then ` node index.js` to test. If its working, run `pm2 start index.js ` to run it with a daemon
    - if you run into a module not found error, just manually install that package with `npm i`
12. check that the app is running from the browser

## Running The App Locally
```
from /frontend: npm i
from /backend_node: npm i
from /start_scripts: .\startServers.bat
```

## Useful Commands For Deploying
```
# Open nginx block config file
sudo nano /etc/nginx/sites-available/sf6.combocentral.com
# Restart nginx
sudo systemctl restart nginx 
# validate nginx config
sudo nginx -t
#go to error log directory
cd /var/log/nginx/

#Backend server
cd /var/www/sf6.combocentral.com/combo-central/backend_node/
pm2 start index.js 
# Must be started in this directory!!!

pm2 status
pm2 stop <processName>
pm2 delete <processName>
```

