const common = require("../../sf6-commonButtonVariants")


const { generatePresetIds } = require("../../../../utils/presetIdsUtil")

const preset = {
  "Command Normals": [
    [
      {
        name: "psycho knuckle",
        input: [[
          {
            buttons: [["RB:(hold)"]],
            command: [""],
          },
        ]],
      },
      {
        name: "cobra punch",
        input: [[
          {
            buttons: [["RB"]],
            command: ["6"],
          },
        ]],
      },
    ]
  ],
  "Target Combos": [
    [
      {
        name: "flicker combination",
        input: [[
          {
            buttons: [["D"]],
            command: [""],
          },
        ], [
          {
            buttons: [["D"]],
            command: [""],
          },
        ], [
          {
            buttons: [["D"]],
            command: [""],
          },
        ]],
      },
      {
        name: "2 hit flicker combination",
        input: [[
          {
            buttons: [["D"]],
            command: [""],
          },
        ], [
          {
            buttons: [["D"]],
            command: [""],
          },
        ],],
      },],
    [
      {
        name: "body blow combination",
        input: [[
          {
            buttons: [["B"]],
            command: [""],
          },
        ], [
          {
            buttons: [["RB"]],
            command: [""],
          },
        ]],
      }, {
        name: "low smash combination",
        input: [[
          {
            buttons: [["RT"]],
            command: ["2"],
          },
        ], [
          {
            buttons: [["RB"]],
            command: [""],
          },
        ]],
      }],
    [
      {
        name: "hitman combination",
        input: [[
          {
            buttons: [["C"]],
            command: [""],
          },
        ], [
          {
            buttons: [["C"]],
            command: [""],
          },
        ],
        [
          {
            buttons: [["RB"]],
            command: [""],
          },
        ]],
      },
      {
        name: "2 hit hitman combination",
        input: [[
          {
            buttons: [["C"]],
            command: [""],
          },
        ], [
          {
            buttons: [["C"]],
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
        name: "light psycho spark",
        input: [[
          {
            buttons: [["A"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "medium psycho spark",
        input: [[
          {
            buttons: [["B"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "heavy psycho spark",
        input: [[
          {
            buttons: [["RB"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "overdrive psycho spark",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["236"],
          },
        ]],
      },
      {
        name: "psycho shoot",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["6"],
          },
        ]],
        dependencies: ["ed-overdrive-psycho-spark|ed-heavy-psycho-spark|ed-medium-psycho-spark|ed-light-psycho-spark"]
      },
    ],
    [
      {
        name: "light psycho uppercut",
        input: [[
          {
            buttons: [["A"]],
            command: ["623"],
          },
        ]],
      },
      {
        name: "medium psycho uppercut",
        input: [[
          {
            buttons: [["B"]],
            command: ["623"],
          },
        ]],
      },
      {
        name: "heavy psycho uppercut",
        input: [[
          {
            buttons: [["RB"]],
            command: ["623"],
          },
        ]],
      },
      {
        name: "overdrive psycho uppercut",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["623"],
          },
        ]],
      },
    ],
    [
      {
        name: "light psycho blitz",
        input: [[
          {
            buttons: [["A"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "medium psycho blitz",
        input: [[
          {
            buttons: [["B"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "heavy psycho blitz",
        input: [[
          {
            buttons: [["RB"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "overdrive psycho blitz",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["214"],
          },
        ]],
      },
    ],
    [
      {
        name: "light psycho flicker",
        input: [[
          {
            buttons: [["D"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "medium psycho flicker",
        input: [[
          {
            buttons: [["C"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "heavy psycho flicker",
        input: [[
          {
            buttons: [["RT"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "overdrive psycho flicker",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["236"],
          },
        ]],
      },
    ],
    [
      {
        name: "charged light psycho flicker",
        input: [[
          {
            buttons: [["D:(hold)"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "charged medium psycho flicker",
        input: [[
          {
            buttons: [["C:(hold)"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "charged heavy psycho flicker",
        input: [[
          {
            buttons: [["RT:(hold)"]],
            command: ["236"],
          },
        ]],
      },
    ],
    [
      {
        name: "forward kill rush",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["6", "5"],
          },
        ]],
      },
      {
        name: "backwards kill rush",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["4"],
          },
        ]],
      },
      {
        name: "kill switch break",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["6"],
          },
        ]],
        dependencies: ["ed-forward-kill-rush"]
      },
      {
        name: "kill switch chaser",
        input: [[
          {
            buttons: [["A:(delay)"], ["B:(delay)"], ["RB:(delay)"]],
            command: ["6"],
          },
        ]],
        dependencies: ["ed-forward-kill-rush"]
      },
    ]
  ],
  "Super Arts": [
    [
      {
        name: "psycho storm",
        input: [[
          {
            buttons: common.anyKick,
            command: ["236236"],
          },
        ]],
      },
      {
        name: "psycho cannon",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["214214"],
          },
        ]],
      },
      {
        name: "psycho chamber",
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
generatePresetIds(preset, "ed")

module.exports = { preset };
