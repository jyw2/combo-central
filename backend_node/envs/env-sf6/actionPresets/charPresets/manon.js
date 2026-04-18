const common = require("../../sf6-commonButtonVariants")


const { generatePresetIds } = require("../../../../utils/presetIdsUtil")

const preset = {
  "Command Normals": [
    [
      {
        name: "en haut",
        input: [
          [
            {
              buttons: [["C"]],
              command: ["4"],
            },
          ],
        ],
      },
      {
        name: "révérence",
        input: [
          [
            {
              buttons: [["RB"]],
              command: ["4"],
            },
          ],
        ],
      },
      {
        name: "tomoe derrière",
        input: [
          [
            {
              buttons: [["RT"]],
              command: ["3"],
            },
          ],
        ],
      },
    ],
  ],
  "Target Combos": [
    [
      {
        name: "à terre",
        input: [
          [
            {
              buttons: [["B"]],
              command: [""],
            },
          ], [
            {
              buttons: [["C"]],
              command: [""],
            },
          ],
        ],
      }, {
        name: "en haut combo",
        input: [
          [
            {
              buttons: [["C"]],
              command: ["4"],
            },
          ], [
            {
              buttons: [["C"]],
              command: [""],
            },
          ],
        ],
      },
      {
        name: "temps lié",
        input: [
          [
            {
              buttons: [["RB"]],
              command: [""],
            },
          ], [
            {
              buttons: [["RB"]],
              command: [""],
            },
          ],
        ],
      },
      {
        name: "allongé",
        input: [
          [
            {
              buttons: [["RB"]],
              command: ["2"],
            },
          ], [
            {
              buttons: [["RB"]],
              command: [""],
            },
          ],
        ],
      },
    ],
  ],
  Specials: [
    [
      {
        name: "light manège doré",
        input: [[
          {
            buttons: [["A"]],
            command: ["63214"],
          },
        ]],
      },
      {
        name: "medium manège doré",
        input: [[
          {
            buttons: [["B"]],
            command: ["63214"],
          },
        ]],
      },
      {
        name: "heavy manège doré",
        input: [[
          {
            buttons: [["RB"]],
            command: ["63214"],
          },
        ]],
      },
      {
        name: "overdrive manège doré",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["63214"],
          },
        ]],
      },
    ],
    [
      {
        name: "light renversé",
        input: [[
          {
            buttons: [["A"]],
            command: ["236"],
          },
        ]],
        playerState: ["windclad"]
      },
      {
        name: "medium renversé",
        input: [[
          {
            buttons: [["B"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "heavy renversé",
        input: [[
          {
            buttons: [["RB"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "overdrive renversé",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["236"],
          },
        ]],
      },
      {
        name: "renversé feint",
        input: [[
          {
            buttons: [["A:(hold)"], ["B:(hold)"], ["RB:(hold)"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "overdrive renversé feint",
        input: [[
          {
            buttons: [["A:(hold)", "B:(hold)"], ["A:(hold)", "RB:(hold)"], ["B:(hold)", "RB:(hold)"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "grand fouetté",
        input: [[
          {
            buttons: common.anyKick,
            command: [""],
          },
        ]],
        dependencies:["manon-light-renversé|manon-medium-renversé|manon-heavy-renversé|manon-overdrive-renversé"]
      },
    ],
    [
      {
        name: "light rond-point",
        input: [[
          {
            buttons: [["D"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "medium rond-point",
        input: [[
          {
            buttons: [["C"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "heavy rond-point",
        input: [[
          {
            buttons: [["RT"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "overdrive rond-point",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["236"],
          },
        ]],
      },
    ],
    [
      {
        name: "light dégagé",
        input: [[
          {
            buttons: [["D"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "medium dégagé",
        input: [[
          {
            buttons: [["C"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "heavy dégagé",
        input: [[
          {
            buttons: [["RT"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "overdrive dégagé",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["214"],
          },
        ]],
      },
    ],
  ],
  "Super Arts": [
    [
      {
        name: "arabesque",
        input: [[
          {
            buttons: common.anyKick,
            command: ["236236"],
          },
        ]],
      },
    ], [
      {
        name: "étoile",
        input: [[
          {
            buttons: common.anyKick,
            command: ["214214"],
          },
        ]],
      },
    ],
    [
      {
        name: "pas de deux",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["236236"],
          },
        ]],
      },
    ],
  ],
};

generatePresetIds(preset, "manon")
module.exports = { preset };
