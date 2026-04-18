const common = require("../../sf6-commonButtonVariants")


const { generatePresetIds } = require("../../../../utils/presetIdsUtil")

const preset = {
  "Command Normals": [
    [
      {
        name: "desert storm",
        input: [
          [
            {
              buttons: [["RB"]],
              command: ["6"],
            },
          ],
        ],
      },
      {
        name: "ridge thrust",
        input: [
          [
            {
              buttons: [["RB"]],
              command: ["3"],
            },
          ],
        ],
      },
      {
        name: "horn breaker",
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
        name: "great spin",
        input: [
          [
            {
              buttons: [["RB"]],
              command: ["2"],
            },
          ],
        ],
        playerState: ["jumping"]
      },
    ],
  ],
  "Target Combos": [
    [
      {
        name: "desert storm combo",
        input: [
          [
            {
              buttons: [["RB"]],
              command: ["6"],
            },
          ], [
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
      }, {
        name: "2 hit desert storm combo",
        input: [
          [
            {
              buttons: [["RB"]],
              command: ["6"],
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
    [
      {
        name: "double arrow",
        input: [
          [
            {
              buttons: [["B"]],
              command: [""],
            },
          ], [
            {
              buttons: [["B"]],
              command: [""],
            },
          ],
        ],
        playerState: ["jumping"]
      },
    ],
  ],
  Specials: [
    [
      {
        name: "light condor spire",
        input: [[
          {
            buttons: [["D"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "medium condor spire",
        input: [[
          {
            buttons: [["C"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "heavy condor spire",
        input: [[
          {
            buttons: [["RT"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "overdrive condor spire",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["236"],
          },
        ]],
      },
      {
        name: "windclad light condor spire",
        input: [[
          {
            buttons: [["D"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "windclad medium condor spire",
        input: [[
          {
            buttons: [["C"]],
            command: ["236"],
          },
        ]],
        playerState: ["windclad"]
      },
      {
        name: "windclad heavy condor spire",
        input: [[
          {
            buttons: [["RT"]],
            command: ["236"],
          },
        ]],
        playerState: ["windclad"]
      },
      {
        name: "windclad overdrive condor spire",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["236"],
          },
        ]],
        playerState: ["windclad"]
      },
    ],
    [
      {
        name: "light condor wind",
        input: [[
          {
            buttons: [["D"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "medium condor wind",
        input: [[
          {
            buttons: [["C"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "heavy condor wind",
        input: [[
          {
            buttons: [["RT"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "overdrive condor wind",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["214"],
          },
        ]],
      },
      {
        name: "held light condor wind",
        input: [[
          {
            buttons: [["D:(hold)"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "held medium condor wind",
        input: [[
          {
            buttons: [["C:(hold)"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "held heavy condor wind",
        input: [[
          {
            buttons: [["RT:(hold)"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "held overdrive condor wind",
        input: [[
          {
            buttons: [["D:(hold)", "C:(hold)"], ["D:(hold)", "RT:(hold)"], ["C:(hold)", "RT:(hold)"]],
            command: ["214"],
          },
        ]],
      },
    ],
    [
      {
        name: "light tomahawk buster",
        input: [[
          {
            buttons: [["A"]],
            command: ["623"],
          },
        ]],
      },
      {
        name: "medium tomahawk buster",
        input: [[
          {
            buttons: [["B"]],
            command: ["623"],
          },
        ]],
      },
      {
        name: "heavy tomahawk buster",
        input: [[
          {
            buttons: [["RB"]],
            command: ["623"],
          },
        ]],
      },
      {
        name: "overdrive tomahawk buster",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["623"],
          },
        ]],
      },
      {
        name: "windclad light tomahawk buster",
        input: [[
          {
            buttons: [["A"]],
            command: ["623"],
          },
        ]],
        playerState: ["windclad"]
      },
      {
        name: "windclad medium tomahawk buster",
        input: [[
          {
            buttons: [["B"]],
            command: ["623"],
          },
        ]],
        playerState: ["windclad"]
      },
      {
        name: "windclad heavy tomahawk buster",
        input: [[
          {
            buttons: [["RB"]],
            command: ["623"],
          },
        ]],
        playerState: ["windclad"]
      },
      {
        name: "windclad overdrive tomahawk buster",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["623"],
          },
        ]],
        playerState: ["windclad"]
      },
    ],
    [
      {
        name: "light mexican typhoon",
        input: [[
          {
            buttons: [["A"]],
            command: ["632147896"],
          },
        ]],
      },
      {
        name: "medium mexican typhoon",
        input: [[
          {
            buttons: [["B"]],
            command: ["632147896"],
          },
        ]],
      }, 
      {
        name: "heavy mexican typhoon",
        input: [[
          {
            buttons: [["RB"]],
            command: ["632147896"],
          },
        ]],
      },
      {
        name: "overdrive mexican typhoon",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["632147896"],
          },
        ]],
      },
    ],
    [
      {
        name: "condor dive",
        input: [[
          {
            buttons: common.any2Punches,
            command: [""],
          },
        ]],
        playerState: ["jumping"]
      },
      {
        name: "overdrive condor dive",
        input: [[
          {
            buttons: [["A", "B", "RB"]],
            command: [""],
          },
        ]],
        playerState: ["jumping"]
      },
      {
        name: "windclad condor dive",
        input: [[
          {
            buttons: common.any2Punches,
            command: [""],
          },
        ]],
        playerState: ["jumping", "windclad"]
      },
      {
        name: "windclad overdrive condor dive",
        input: [[
          {
            buttons: [["A", "B", "RB"]],
            command: [""],
          },
        ]],
        playerState: ["jumping", "windclad"]
      },
    ]
  ],
  "Super Arts": [
    [
      {
        name: "breezing hawk",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["236236"],
          },
        ]],
      },
    ], [
      {
        name: "thunderbird",
        input: [[
          {
            buttons: common.anyKick,
            command: ["236236"],
          },
        ]],
      },
      {
        name: "windclad thunderbird",
        input: [[
          {
            buttons: common.anyKick,
            command: ["236236"],
          },
        ]],
        playerState:["windclad"]
      },
    ],
    [
      {
        name: "raging typhoon",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["214214"],
          },
        ]],
      },
    ],
  ],
};

generatePresetIds(preset, "lily")
module.exports = { preset };
