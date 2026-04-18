const common = require("../../local-commonButtonVariants")


const { generatePresetIds } = require("../../../../utils/presetIdsUtil")

const preset = {
  "Command Normals": [
    [
      {
        name: "rawhide",
        input: [[
          {
            buttons: [["B"]],
            command: ["6"],
          },
        ]],
      },
      {
        name: "suppressor",
        input: [[
          {
            buttons: [["RB"]],
            command: ["4"],
          },
        ]],
      },
      {
        name: "outlaw kick",
        input: [[
          {
            buttons: [["RT"]],
            command: ["4"],
          },
        ]],
      }
    ]
  ],
  "Target Combos": [
    [
      {
        name: "double impact",
        input: [[
          {
            buttons: [["RB"]],
            command: ["6"],
          },
        ], [
          {
            buttons: [["RB"]],
            command: [""],
          },
        ]],
      },
      {
        name: "nose breaker",
        input: [[
          {
            buttons: [["C"]],
            command: ["2"],
          },
        ], [
          {
            buttons: [["RB"]],
            command: ["2"],
          },
        ]],
      }], [
      {
        name: "triple impact",
        input: [[
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
        [
          {
            buttons: [["RB"]],
            command: [""],
          },
        ]],
      },
      {
        name: "2 hit triple impact",
        input: [[
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
    ], [
      {
        name: "snapback combo",
        input: [[
          {
            buttons: [["B"]],
            command: [""],
          },
        ], [
          {
            buttons: [["B"]],
            command: [""],
          },
        ], [
          {
            buttons: [["B"]],
            command: [""],
          },
        ], [
          {
            buttons: [["B"]],
            command: [""],
          },
        ],],
      },
      {
        name: "2 hit snapback combo",
        input: [[
          {
            buttons: [["B"]],
            command: [""],
          },
        ], [
          {
            buttons: [["B"]],
            command: [""],
          },
        ],]
      },
      {
        name: "3 hit snapback combo",
        input: [[
          {
            buttons: [["B"]],
            command: [""],
          },
        ], [
          {
            buttons: [["B"]],
            command: [""],
          },
        ], [
          {
            buttons: [["B"]],
            command: [""],
          },
        ],],
      },
    ]
  ],
  Specials: [
    [
      {
        name: "light sand blast",
        input: [[
          {
            buttons: [["A"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "medium sand blast",
        input: [[
          {
            buttons: [["B"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "heavy sand blast",
        input: [[
          {
            buttons: [["RB"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "overdrive sand blast",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["236"],
          },
        ]],
      },
      {
        name: "fatal shot",
        input: [[
          {
            buttons: common.any2Punches,
            command: [""],
          },
        ]],
        dependencies: ["luke-sullivan-overdrive-sand-blast"]
      },
    ],
    [
      {
        name: "light flash knuckle",
        input: [[
          {
            buttons: [["A"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "medium flash knuckle",
        input: [[
          {
            buttons: [["B"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "heavy flash knuckle",
        input: [[
          {
            buttons: [["RB"]],
            command: ["214"],
          },
        ]],
      }],
    [
      {
        name: "perfect light flash knuckle",
        input: [[
          {
            buttons: [["A:(timed hold)"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "perfect medium flash knuckle",
        input: [[
          {
            buttons: [["B:(timed hold)"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "perfect heavy flash knuckle",
        input: [[
          {
            buttons: [["RB:(timed hold)"]],
            command: ["214"],
          },
        ]],
      },],
    [
      {
        name: "charged light flash knuckle",
        input: [[
          {
            buttons: [["A:(hold)"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "charged medium flash knuckle",
        input: [[
          {
            buttons: [["B:(hold)"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "charged heavy flash knuckle",
        input: [[
          {
            buttons: [["RB:(hold)"]],
            command: ["214"],
          },
        ]],
      },],
    [
      {
        name: "overdrive flash knuckle",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["214"],
          },
        ]],
      },
      {
        name: "DDT",
        input: [[
          {
            buttons: common.any2Punches,
            command: [""],
          },
        ]],
        dependencies: ["luke-sullivan-overdrive-flash-knuckle"]
      },],
    [
      {
        name: "aerial flash knuckle",
        input: [[
          {
            buttons: common.anyPunch,
            command: [""],
          },
        ]],
        playerState: ["jumping"],
      },
      {
        name: "aerial charged flash knuckle",
        input: [[
          {
            buttons: common.anyPunch,
            command: [""],
          },
        ]],
        playerState: ["jumping"],
      },
    ],
    [
      {
        name: "avenger",
        input: [[
          {
            buttons: common.anyKick,
            command: ["236"],
          },
        ]],
      },
      {
        name: "overdrive avenger",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["236"],
          },
        ]],
      },
      {
        name: "no chaser",
        input: [[
          {
            buttons: common.anyPunch,
            command: [""],
          },
        ]],
        dependencies: ["luke-sullivan-avenger|luke-sullivan-overdrive-avenger"]
      },
      {
        name: "impaler",
        input: [[
          {
            buttons: common.anyKick,
            command: [""],
          },
        ]],
        dependencies: ["luke-sullivan-avenger|luke-sullivan-overdrive-avenger"]
      },
    ],
    [
      {
        name: "light rising uppercut",
        input: [[
          {
            buttons: [["A"]],
            command: ["623"],
          },
        ]],
      },
      {
        name: "medium rising uppercut",
        input: [[
          {
            buttons: [["B"]],
            command: ["623"],
          },
        ]],
      },
      {
        name: "heavy rising uppercut",
        input: [[
          {
            buttons: [["RB"]],
            command: ["623"],
          },
        ]],
      },
      {
        name: "overdrive rising uppercut",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["623"],
          },
        ]],
      },
      {
        name: "slam dunk",
        input: [[
          {
            buttons: common.any2Punches,
            command: [""],
          },
        ]],
        dependencies: ["luke-sullivan-overdrive-rising-uppercut"]
      },
    ]
  ],
  "Super Arts": [
    [
      {
        name: "vulcan blast",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["236236"],
          },
        ]],
      },
      {
        name: "eraser",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["214214"],
          },
        ]],
      },
      {
        name: "pale rider",
        input: [[
          {
            buttons: common.anyKick,
            command: ["236236"],
          },
        ]],
      },
    ],
  ],
};
generatePresetIds(preset, "luke-sullivan")

module.exports = { preset };
