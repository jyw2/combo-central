const common = require("../../sf6-commonButtonVariants")


const { generatePresetIds } = require("../../../../utils/presetIdsUtil")

const preset = {
  "Command Normals": [
    [
      {
        name: "elbow drop",
        input: [
          [
            {
              buttons: [["B"]],
              command: ["2"],
            },
          ],
        ],
        playerState: ["jumping"]
      },
      {
        name: "water slicer slide",
        input: [
          [
            {
              buttons: [["C"]],
              command: ["3"],
            },
          ],
        ],
      },
      {
        name: "windmill kick",
        input: [
          [
            {
              buttons: [["RT"]],
              command: ["4"],
            },
          ],
        ],
      },],
    [
      {
        name: "hisen kick",
        input: [
          [
            {
              buttons: [["RT"]],
              command: ["6"],
            },
          ],
        ],
      },
      {
        name: "step up neutral",
        input: [
          [
            {
              buttons: [[]],
              command: ["8"],
            },
          ],
        ],
        dependencies: ["kimberly-hisen-kick"]
      },
      {
        name: "step up back",
        input: [
          [
            {
              buttons: [[]],
              command: ["7"],
            },
          ],
        ],
        dependencies: ["kimberly-hisen-kick"]
      },
      {
        name: "step up forward",
        input: [
          [
            {
              buttons: [[]],
              command: ["9"],
            },
          ],
        ],
        dependencies: ["kimberly-hisen-kick"]
      },
    ]
  ],
  "Target Combos": [
    [
      {
        name: "bushin prism strikes",
        input: [
          [
            {
              buttons: [["A"]],
              command: [""],
            },
          ], [
            {
              buttons: [["B"]],
              command: [""],
            },
          ], [
            {
              buttons: [["RB"]],
              command: [""],
            },
          ], [
            {
              buttons: [["RT"]],
              command: [""],
            },
          ],
        ],
      }, {
        name: "3 hit bushin prism strikes",
        input: [
          [
            {
              buttons: [["A"]],
              command: [""],
            },
          ], [
            {
              buttons: [["B"]],
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
        name: "2 hit bushin prism strikes",
        input: [
          [
            {
              buttons: [["A"]],
              command: [""],
            },
          ], [
            {
              buttons: [["B"]],
              command: [""],
            },
          ],
        ],
      },
    ],
    [
      {
        name: "bushin hellchain",
        input: [
          [
            {
              buttons: [["A"]],
              command: [""],
            },
          ], [
            {
              buttons: [["B"]],
              command: [""],
            },
          ], [
            {
              buttons: [["RB"]],
              command: ["2"],
            },
          ], [
            {
              buttons: [["RT"]],
              command: [""],
            },
          ],
        ],
      },
      {
        name: "bushin hellchain throw",
        input: [
          [
            {
              buttons: [["A"]],
              command: [""],
            },
          ], [
            {
              buttons: [["B"]],
              command: [""],
            },
          ], [
            {
              buttons: [["RB"]],
              command: ["2"],
            },
          ], [
            {
              buttons: [["RT"]],
              command: ["2"],
            },
          ],
        ],
      },
      {
        name: "3 hit bushin hellchain",
        input: [
          [
            {
              buttons: [["A"]],
              command: [""],
            },
          ], [
            {
              buttons: [["B"]],
              command: [""],
            },
          ], [
            {
              buttons: [["RB"]],
              command: ["2"],
            },
          ],
        ],
      },
      {
        name: "2 hit bushin hellchain",
        input: [
          [
            {
              buttons: [["A"]],
              command: [""],
            },
          ], [
            {
              buttons: [["B"]],
              command: [""],
            },
          ],
        ],
      },
    ],
    [
      {
        name: "bushin tiger fangs",
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
        ],
        ],
      },
    ],
  ],
  Specials: [
    [
      {
        name: "light bushin senpukyaku",
        input: [[
          {
            buttons: [["D"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "medium bushin senpukyaku",
        input: [[
          {
            buttons: [["C"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "heavy bushin senpukyaku",
        input: [[
          {
            buttons: [["RT"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "overdrive bushin senpukyaku",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["214"],
          },
        ]],
      },

    ],
    [
      {
        name: "jumping bushin senpukyaku",
        input: [[
          {
            buttons: common.anyKick,
            command: ["214"],
          },
        ]],
        playerState: ["jumping"]
      },
      {
        name: "jumping overdrive bushin senpukyaku",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["214"],
          },
        ]],
        playerState: ["jumping"]
      },
    ],
    [
      {
        name: "light vagabond edge",
        input: [[
          {
            buttons: [["A"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "medium vagabond edge",
        input: [[
          {
            buttons: [["B"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "heavy vagabond edge",
        input: [[
          {
            buttons: [["RB"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "overdrive vagabond edge",
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
        name: "sprint",
        input: [[
          {
            buttons: common.anyKick,
            command: ["236"],
          },
        ]],
      },
      {
        name: "overdrive sprint",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["236"],
          },
        ]],
      },
      {
        name: "emergency stop",
        input: [[
          {
            buttons: common.anyPunch,
            command: [""],
          },
        ]],
        dependencies: ["kimberly-sprint|overdrive-kimberly-sprint"]
      },
      {
        name: "torso cleaver",
        input: [[
          {
            buttons: [["D"]],
            command: [""],
          },
        ]],
        dependencies: ["kimberly-sprint|overdrive-kimberly-sprint"]
      },
      {
        name: "shadow slide",
        input: [[
          {
            buttons: [["C"]],
            command: [""],
          },
        ]],
        dependencies: ["kimberly-sprint|overdrive-kimberly-sprint"]
      },
      {
        name: "neck hunter",
        input: [[
          {
            buttons: [["RT"]],
            command: [""],
          },
        ]],
        dependencies: ["kimberly-sprint|overdrive-kimberly-sprint"]
      },

    ],
    [
      {
        name: "arc step",
        input: [[
          {
            buttons: common.anyKick,
            command: ["236"],
          },
        ]],
        playerState: ["close to opponent"]
      },
      {
        name: "overdrive arc step",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["236"],
          },
        ]],
        playerState: ["close to opponent"]
      },
      {
        name: "bushin hojin kick",
        input: [[
          {
            buttons: common.anyKick,
            command: [""],
          },
        ]],
        dependencies: ["kimberly-arc-step|kimberly-overdrive-arc-step"]
      },
      {
        name: "bushin izuna otoshi",
        input: [[
          {
            buttons: common.anyPunch,
            command: [""],
          },
        ]],
        dependencies: ["kimberly-arc-step|kimberly-overdrive-arc-step"]
      },
    ],
    [
      {
        name: "hidden variable",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["214"],
          },
        ]],
      },
      {
        name: "overdrive hidden variable",
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
        name: "genius at play",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["22"],
          },
        ]],
      },
      {
        name: "overdrive genius at play",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["22"],
          },
        ]],
      },
    ],
    [
      {
        name: "nue twister",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["236"],
          },
        ]],
        playerState: ["jumping"]
      },
      {
        name: "overdrive nue twister",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["236"],
          },
        ]],
        playerState: ["jumping"]
      },
    ],
    [

      {
        name: "light shuriken bomb",
        input: [[
          {
            buttons: [["A"]],
            command: ["22"],
          },
        ]],
      },
      {
        name: "medium shuriken bomb",
        input: [[
          {
            buttons: [["B"]],
            command: ["22"],
          },
        ]],
      },
      {
        name: "heavy shuriken bomb",
        input: [[
          {
            buttons: [["RB"]],
            command: ["22"],
          },
        ]],
      },
      {
        name: "light + medium shuriken bomb",
        input: [[
          {
            buttons: [["A", "B"]],
            command: ["22"],
          },
        ]],
      },
      {
        name: "medium + heavy shuriken bomb",
        input: [[
          {
            buttons: [["B", "RB"]],
            command: ["22"],
          },
        ]],
      },
      {
        name: "light + heavy shuriken bomb",
        input: [[
          {
            buttons: [["A", "RB"]],
            command: ["22"],
          },
        ]],
      },

    ]
  ],
  "Super Arts": [
    [
      {
        name: "bushin beats",
        input: [[
          {
            buttons: common.anyKick,
            command: ["236236"],
          },
        ]],
      },
    ], [
      {
        name: "bushin scramble",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["214214"],
          },
        ]],
      },
    ],
    [
      {
        name: "bushin ninjastar cypher",
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

generatePresetIds(preset, "kimberly")
module.exports = { preset };
